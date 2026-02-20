import { FadeUp, StaggerContainer, cardVariants } from "@/components/animations";
import { motion } from "framer-motion";
import PageFooter from "@/components/PageFooter";

const experiences = [
  {
    company: "OrthoBerry",
    role: "Product Manager",
    duration: "2023 – Present",
    tags: ["Fintech", "SaaS", "Healthcare", "EdTech"],
    featured: true,
    responsibilities: [
      {
        category: "Product Ownership & System Architecture",
        items: [
          "Led E2E product lifecycle (Discovery → PRD → Sprint → UAT → Deployment)",
          "Designed multi-ledger financial architecture (OOP + Insurance tracking)",
          "Built predictive delinquency risk models reducing defaults by 65%",
          "Migrated 50+ US orthodontic practices from legacy systems",
          "Defined data models, reporting pipelines & AR dashboards",
          "Conducted stakeholder alignment workshops",
          "Prioritized backlog using RICE framework",
          "Defined API integration requirements",
        ],
      },
      {
        category: "Berry Nerd – Learning Platform",
        items: [
          "Structured content architecture & course pipelines",
          "Built learner progress dashboards",
          "Designed engagement loops for retention metrics",
          "Defined role-based access models",
        ],
      },
    ],
    metrics: [
      { value: "65%", label: "Reduction in Payment Defaults" },
      { value: "50+", label: "Practice Migrations" },
      { value: "Real-time", label: "AR Visibility" },
      { value: "Cross-functional", label: "Product Leadership" },
    ],
  },
  {
    company: "Tata Steel",
    role: "Product & Operations Analyst",
    duration: "2022 – 2023",
    tags: ["Manufacturing", "Analytics"],
    featured: false,
    responsibilities: [
      {
        category: "Operational Optimization & Industrial Automation",
        items: [
          "Reduced OPEX by 20.7% using Kaizen methodology",
          "Conducted 8+ vendor audits & RCA frameworks",
          "Built Power BI dashboards for operational visibility",
          "Process benchmarking & ERP coordination",
        ],
      },
    ],
    metrics: [{ value: "$1.35Mn → $1.07Mn", label: "Cost Reduction Achieved" }],
  },
  {
    company: "TagZ Foods",
    role: "Supply Chain & Operations",
    duration: "2021 – 2022",
    tags: ["Supply Chain", "E-Commerce"],
    featured: false,
    responsibilities: [
      {
        category: "Supply Chain Optimization",
        items: [
          "Value Stream Mapping for 3PL coordination",
          "Reduced logistics cost by 12%",
          "SKU rationalization using performance analytics",
          "Working capital optimization (FIFO + JIT)",
        ],
      },
    ],
    metrics: [{ value: "12%", label: "Logistics Cost Reduction" }],
  },
];

export default function Experience() {
  return (
    <main>
      <section className="px-8 md:px-14 py-20">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Career</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">Work Experience</h1>
            <p className="text-muted-foreground text-body-lg mb-16 max-w-2xl leading-relaxed">
              Building scalable fintech and SaaS systems across healthcare, edtech, manufacturing, and supply chain ecosystems.
            </p>
          </FadeUp>

          <StaggerContainer className="flex flex-col gap-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={cardVariants}
                className={`bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover ${
                  exp.featured ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="p-7 md:p-9">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-primary text-sm font-medium mt-0.5">{exp.role}</p>
                      <p className="text-muted-foreground text-xs mt-1">{exp.duration}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-pill bg-secondary text-primary font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`grid gap-6 ${exp.featured ? "lg:grid-cols-[1fr_280px]" : ""}`}>
                    <div>
                      {exp.responsibilities.map((section) => (
                        <div key={section.category} className="mb-5 last:mb-0">
                          <p className="text-sm font-semibold text-foreground mb-3">{section.category}</p>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-none" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="bg-secondary rounded-2xl p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Impact Highlights</p>
                      <div className="flex flex-col gap-4">
                        {exp.metrics.map((m) => (
                          <div key={m.label} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                            <p className="text-lg font-bold text-primary">{m.value}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
