import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { Check, Loader2, LogOut } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import { useAuth, type OAuthProvider } from "@/hooks/use-auth";
import {
  fetchProfile,
  fetchPlans,
  selectFreePlan,
  DEFAULT_PLANS,
} from "@/lib/account";
import { isSupabaseConfigured } from "@/lib/supabase";

export const Route = createFileRoute("/plans")({
  component: PlansPage,
  head: () => ({
    meta: [
      { title: "Plans — Contentful Manager" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1C6.2 6.9 8.9 4.8 12 4.8z"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F25022" d="M1 1h10.5v10.5H1z" />
      <path fill="#7FBA00" d="M12.5 1H23v10.5H12.5z" />
      <path fill="#00A4EF" d="M1 12.5h10.5V23H1z" />
      <path fill="#FFB900" d="M12.5 12.5H23V23H12.5z" />
    </svg>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo size={32} />
            <span className="text-[15px] font-bold tracking-tight">
              Contentful Manager
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to site
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-14">{children}</main>
    </div>
  );
}

function PlanCard({
  name,
  price,
  blurb,
  features,
  action,
}: {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  action: ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base">
          {name}
          <span className="text-sm font-normal text-muted-foreground">
            {price}
          </span>
        </CardTitle>
        <CardDescription>{blurb}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
            </li>
          ))}
        </ul>
        {action}
      </CardContent>
    </Card>
  );
}

function SignedInPlans({
  user,
  onSignOut,
}: {
  user: User;
  onSignOut: () => void;
}) {
  const qc = useQueryClient();
  const profileQuery = useQuery({
    queryKey: ["web-profile", user.id],
    queryFn: () => fetchProfile(user),
  });
  const activateFree = useMutation({
    mutationFn: () => selectFreePlan(user),
    onSuccess: () =>
      qc.invalidateQueries({ queryKey: ["web-profile", user.id] }),
  });

  const profile = profileQuery.data;
  const firstTime = !profile || profile.planStatus !== "active";
  const plansQuery = useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
    placeholderData: DEFAULT_PLANS,
  });
  const plans = (plansQuery.data ?? DEFAULT_PLANS).filter(
    (plan) => firstTime || plan.id !== "free",
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <div>
            <h1 className="text-xl font-bold tracking-tight">Your plan</h1>
            <p className="text-sm text-muted-foreground">
              {profile?.email ?? user.email}
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={onSignOut}>
          <LogOut className="h-4 w-4" /> Sign out
        </Button>
      </div>

      {profile ? (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-lg border border-border bg-card p-4 text-sm">
          <span className="flex items-center gap-2">
            <Badge
              variant={
                profile.planStatus === "active" ? "default" : "secondary"
              }
              className="capitalize"
            >
              {profile.plan}
            </Badge>
            <span className="capitalize text-muted-foreground">
              {profile.planStatus}
            </span>
          </span>
          <span className="text-muted-foreground">
            Operations remaining:{" "}
            <span className="font-medium text-foreground">
              {profile.operationsRemaining}
            </span>
          </span>
          <span className="text-muted-foreground">
            Completed:{" "}
            <span className="font-medium text-foreground">
              {profile.operationsCompleted}
            </span>
          </span>
        </div>
      ) : null}

      <div
        className={plans.length > 1 ? "grid gap-5 sm:grid-cols-2" : "max-w-md"}
      >
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            name={plan.name}
            price={plan.priceLabel}
            blurb={plan.description ?? ""}
            features={plan.features}
            action={
              plan.id === "free" ? (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => activateFree.mutate()}
                  disabled={activateFree.isPending}
                >
                  {activateFree.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : null}
                  Select
                </Button>
              ) : (
                <Button
                  className="w-full"
                  disabled
                  title="Payments coming soon"
                >
                  Buy — coming soon
                </Button>
              )
            }
          />
        ))}
      </div>

      {activateFree.isError ? (
        <p className="text-sm text-destructive">
          {(activateFree.error as Error).message}
        </p>
      ) : null}
    </div>
  );
}

function SignIn({ onSignIn }: { onSignIn: (provider: OAuthProvider) => void }) {
  return (
    <div className="mx-auto max-w-md">
      <Card>
        <CardHeader className="items-center text-center">
          <Logo size={44} />
          <CardTitle className="mt-2 text-lg">
            Sign in to Contentful Manager
          </CardTitle>
          <CardDescription>
            Use your Google or Microsoft account to view your plan.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onSignIn("google")}
          >
            <GoogleIcon /> Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onSignIn("azure")}
          >
            <MicrosoftIcon /> Continue with Microsoft
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function PlansPage() {
  const { user, loading, signIn, signOut } = useAuth();

  if (!isSupabaseConfigured()) {
    return (
      <Shell>
        <div className="mx-auto max-w-md text-center text-sm text-muted-foreground">
          Sign-in isn't configured yet. Set <code>VITE_SUPABASE_URL</code> and{" "}
          <code>VITE_SUPABASE_ANON_KEY</code> and redeploy.
        </div>
      </Shell>
    );
  }

  if (loading) {
    return (
      <Shell>
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      {user ? (
        <SignedInPlans user={user} onSignOut={signOut} />
      ) : (
        <SignIn onSignIn={signIn} />
      )}
    </Shell>
  );
}
