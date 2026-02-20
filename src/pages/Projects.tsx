import { FadeUp, StaggerContainer, cardVariants } from "@/components/animations";
import { motion } from "framer-motion";
import PageFooter from "@/components/PageFooter";

const featuredProject = {
  title: "Transforming Patient Intake Into a Revenue Intelligence Engine",
  context: "Orthodontic practices relied on fragmented intake — manual forms, inconsistent insurance validation, poor financial transparency.",
  problems: ["High intake drop-offs", "Delayed insurance eligibility", "Manual data errors", "Revenue leakage"],
  solutions: [
    "Built structured intake data model",
    "Automated insurance pre-verification triggers",
    "Embedded financial eligibility scoring at onboarding",
    "Integrated patient onboarding with ledger creation",
    "Defined funnel tracking metrics for drop-off analysis",
  ],
  impact: [
    { value: "40%", label: "Reduced Onboarding Time" },
    { value: "↑", label: "Improved first-visit revenue capture" },
    { value: "↓", label: "Lowered intake drop-off rate" },
    { value: "Real-time", label: "Patient financial profiling" },
  ],
  tags: ["Fintech", "Healthcare SaaS", "Workflow Automation", "Growth Systems"],
};

const gridProjects = [
  {
    title: "Retail Trading Platform Growth Strategy",
    context: "Analyzed retail trading growth trends across NSE ecosystem.",
    objective: "Growth strategy for discount brokerage targeting Tier-2/3 India.",
    strategy: "Awareness→Account→First Trade→Retention funnel, referral loops, micro-learning, behavioral nudges.",
    metrics: "CAC vs LTV, cohort retention, first trade activation, paid vs organic mix.",
    northStar: "Active traders executing 3+ trades/month",
    tags: ["Fintech", "Growth Strategy", "Capital Markets", "Performance Marketing"],
  },
  {
    title: "Agricultural Scheme Evaluation – Bihar (Gates Foundation)",
    context: "Structured analysis of 100+ agricultural schemes under state development initiative.",
    work: "Categorized into 6 delivery frameworks, KPIs for physical & financial targets, 5 evaluation metrics, review framework for decision makers.",
    impact: "Structured performance benchmarking across government schemes.",
    tags: ["Public Policy", "Impact Strategy", "Analytics"],
  },
];

export default function Projects() {
  return (
    <main>
      <section className="px-8 md:px-14 py-20">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Work</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">Selected Projects</h1>
            <p className="text-muted-foreground text-body-lg mb-16 max-w-2xl leading-relaxed">
              From fintech infrastructure to digital transformation — strategic product problem solving across domains.
            </p>
          </FadeUp>

          {/* Featured Project */}
          <FadeUp delay={0.1}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8 transition-all duration-300 hover:shadow-card-hover hover:border-primary/20">
              <div className="flex flex-wrap gap-2 mb-5">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-pill bg-secondary text-primary font-medium">{tag}</span>
                ))}
                <span className="text-xs px-3 py-1 rounded-pill bg-primary/10 text-primary font-medium">Featured</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">{featuredProject.title}</h2>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Context</p>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{featuredProject.context}</p>
                  <p className="text-sm font-semibold text-foreground mb-2">Problem</p>
                  <ul className="space-y-1.5 mb-6">
                    {featuredProject.problems.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-none" />{p}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-foreground mb-2">Solution</p>
                  <ul className="space-y-1.5">
                    {featuredProject.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-none" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Impact</p>
                  <div className="grid grid-cols-2 gap-4">
                    {featuredProject.impact.map((m) => (
                      <div key={m.label} className="bg-card rounded-xl p-4 border border-border">
                        <p className="text-2xl font-bold text-primary">{m.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Grid Projects */}
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {gridProjects.map((p) => (
              <motion.div
                key={p.title}
                variants={cardVariants}
                className="bg-card border border-border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary/20"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-pill bg-secondary text-primary font-medium">{tag}</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2"><span className="font-medium text-foreground">Context: </span>{p.context}</p>
                {p.objective && <p className="text-sm text-muted-foreground leading-relaxed mb-2"><span className="font-medium text-foreground">Objective: </span>{p.objective}</p>}
                {p.strategy && <p className="text-sm text-muted-foreground leading-relaxed mb-2"><span className="font-medium text-foreground">Strategy: </span>{p.strategy}</p>}
                {p.northStar && <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">North Star: </span>{p.northStar}</p>}
                {p.work && <p className="text-sm text-muted-foreground leading-relaxed mb-2"><span className="font-medium text-foreground">Work: </span>{p.work}</p>}
                {p.impact && <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Impact: </span>{p.impact}</p>}
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
