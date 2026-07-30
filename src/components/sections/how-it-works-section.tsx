const steps = [
  {
    title: "Connect your token",
    body: "Paste your Contentful Management (CMA) token and choose an output folder. The token is encrypted by your operating system and stays on your machine.",
  },
  {
    title: "Pick your scope",
    body: "Choose the organization, space, and environment you want to work in. Every space your token can access shows up automatically.",
  },
  {
    title: "Run an operation",
    body: "Start an export, import, locale, or Excel job and watch live progress and logs until it finishes — then find it in your operation history.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div data-reveal className="reveal max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">How it works</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Three steps from install to a finished export
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              className="reveal rounded-2xl border border-border bg-card p-6 shadow-soft"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
