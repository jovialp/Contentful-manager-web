import type { User } from "@supabase/supabase-js";
import { getSupabase, isSupabaseConfigured } from "./supabase";

export type PlanTier = "free" | "pro";
export type PlanStatus = "active" | "inactive";

export interface Profile {
  email: string | null;
  plan: PlanTier;
  planStatus: PlanStatus;
  operationsRemaining: number;
  operationsCompleted: number;
}

function fullNameOf(user: User): string | null {
  const meta = user.user_metadata ?? {};
  return (
    (meta.full_name as string | undefined) ??
    (meta.name as string | undefined) ??
    null
  );
}

/** Read the profile, creating the row if it doesn't exist yet. */
export async function fetchProfile(user: User): Promise<Profile> {
  const supabase = getSupabase();
  await supabase
    .from("profiles")
    .upsert(
      { id: user.id, email: user.email ?? null, full_name: fullNameOf(user) },
      { onConflict: "id" },
    );

  const { data } = await supabase
    .from("profiles")
    .select(
      "email, plan, plan_status, operations_remaining, operations_completed",
    )
    .eq("id", user.id)
    .maybeSingle();

  return {
    email: (data?.email as string | null) ?? user.email ?? null,
    plan: (data?.plan as PlanTier | null) ?? "free",
    planStatus: (data?.plan_status as PlanStatus | null) ?? "inactive",
    operationsRemaining: (data?.operations_remaining as number | null) ?? 0,
    operationsCompleted: (data?.operations_completed as number | null) ?? 0,
  };
}

/** Operations granted by the free plan (data-driven, default 10). */
async function freePlanOperations(): Promise<number> {
  try {
    const { data } = await getSupabase()
      .from("plans")
      .select("operations")
      .eq("id", "free")
      .maybeSingle();
    const ops = data?.operations as number | null | undefined;
    return typeof ops === "number" ? ops : 10;
  } catch {
    return 10;
  }
}

/** Activate the free tier for the signed-in user (self-serve, no payment). */
export async function selectFreePlan(user: User): Promise<void> {
  const supabase = getSupabase();
  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      email: user.email ?? null,
      full_name: fullNameOf(user),
      plan: "free",
      plan_status: "active",
      operations_remaining: await freePlanOperations(),
    },
    { onConflict: "id" },
  );
  if (error) throw new Error(error.message);
}

export interface Plan {
  id: string;
  name: string;
  priceLabel: string;
  description: string | null;
  features: string[];
  operations: number | null;
  highlighted: boolean;
}

/** Fallback shown if the plans table is unavailable or not yet created. */
export const DEFAULT_PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    priceLabel: "$0",
    description: "Try it out.",
    features: [
      "10 operations included",
      "Sign in with Google or Microsoft",
      "Export, import, localize & Excel",
      "Your token stays encrypted on-device",
    ],
    operations: 10,
    highlighted: false,
  },
  {
    id: "starter",
    name: "Starter",
    priceLabel: "$9",
    description: "For occasional use.",
    features: ["100 operations", "All core operations", "Email support"],
    operations: 100,
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    priceLabel: "$29",
    description: "For regular use.",
    features: [
      "500 operations",
      "All release & restore operations",
      "Priority support",
    ],
    operations: 500,
    highlighted: true,
  },
  {
    id: "business",
    name: "Business",
    priceLabel: "$99",
    description: "For teams.",
    features: ["2,000 operations", "All operations", "Priority support"],
    operations: 2000,
    highlighted: false,
  },
];

export async function fetchPlans(): Promise<Plan[]> {
  if (!isSupabaseConfigured()) return DEFAULT_PLANS;
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("plans")
    .select(
      "id, name, price_label, description, features, operations, highlighted, sort_order",
    )
    .eq("is_active", true)
    .order("sort_order", { ascending: true });
  if (error || !data || data.length === 0) return DEFAULT_PLANS;
  return data.map((p) => ({
    id: p.id as string,
    name: p.name as string,
    priceLabel: p.price_label as string,
    description: (p.description as string | null) ?? null,
    features: (p.features as string[] | null) ?? [],
    operations: (p.operations as number | null) ?? null,
    highlighted: Boolean(p.highlighted),
  }));
}
