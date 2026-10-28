import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Check } from "lucide-react";
import { fetchPlans, DEFAULT_PLANS, type Plan } from "@/lib/account";

function ctaLabel(plan: Plan): string {
  return plan.id === "free" ? "Get started" : `See ${plan.name}`;
}

export function PricingSection() {
  const { data: plans = DEFAULT_PLANS } = useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
    placeholderData: DEFAULT_PLANS,
  });

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="mx-auto max-w-6xl px-4 py-20 md:py-28"
    >
      <div data-reveal className="reveal max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Plans
        </p>
        <h2
          id="pricing-heading"
          className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
        >
          Start free, upgrade when you need more
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Create an account with Google or Microsoft. The Free tier includes 10
          operations; Pro unlocks unlimited operations with a one-time purchase.
          Your Contentful token always stays encrypted on your device.
        </p>
      </div>

      <div
        data-reveal
        className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl border bg-card p-8 ${
              plan.highlighted
                ? "border-primary shadow-lift"
                : "border-border shadow-soft"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <span className="text-sm font-medium text-muted-foreground">
                {plan.priceLabel}
              </span>
            </div>
            {plan.description ? (
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
            ) : null}
            <ul className="mt-6 space-y-2.5 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/plans"
              className={`mt-7 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-border text-foreground hover:bg-accent"
              }`}
            >
              {ctaLabel(plan)}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
