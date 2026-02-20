import { FadeUp, StaggerContainer, cardVariants } from "@/components/animations";
import { motion } from "framer-motion";
import PageFooter from "@/components/PageFooter";

const services = [
  {
    icon: "🏦",
    title: "Fintech Product Strategy",
    desc: "End-to-end product strategy for financial systems — roadmap planning, go-to-market execution, scalable architectures balancing compliance, revenue intelligence, and operational efficiency.",
    includes: ["Roadmap structuring & PRD", "Ledger system architecture", "Risk & delinquency frameworks", "Compliance-aware workflows", "North Star metric definition"],
  },
  {
    icon: "⚙️",
    title: "SaaS Workflow Automation",
    desc: "Structured automated workflows eliminating manual inefficiencies and improving operational visibility across B2B SaaS platforms.",
    includes: ["Process mapping & system redesign", "Multi-step automation logic", "Role-based access architecture", "API/ERP integration planning", "Subscription & billing optimization"],
  },
  {
    icon: "📊",
    title: "Product Analytics & Growth Strategy",
    desc: "Data frameworks connecting acquisition, activation, retention, and revenue into a measurable growth engine.",
    includes: ["Funnel architecture design", "CAC vs LTV modeling", "Cohort retention analysis", "Performance marketing strategy", "Tracking framework setup"],
  },
  {
    icon: "🏥",
    title: "Healthcare Workflow Digitization",
    desc: "Transforming manual patient and financial processes into structured digital ecosystems.",
    includes: ["Patient onboarding system design", "Insurance workflow automation", "AR visibility dashboards", "Revenue capture optimization", "Financial profiling systems"],
  },
  {
    icon: "📚",
    title: "Learning Ecosystem Design",
    desc: "Scalable learning platforms with measurable engagement and retention frameworks.",
    includes: ["Course architecture mapping", "Progress tracking systems", "Role-based access models", "Engagement loop design", "Learning analytics dashboards"],
  },
  {
    icon: "🚀",
    title: "Agile Product Leadership",
    desc: "Bridging business strategy and engineering execution through structured PM practices.",
    includes: ["Sprint planning & backlog prioritization", "RICE-based feature evaluation", "Cross-functional alignment workshops", "Stakeholder communication frameworks", "UAT coordination & release planning"],
  },
];

const steps = [
  { num: "01", title: "Discover & Define", desc: "Deep research into user problems, business goals, and system constraints." },
  { num: "02", title: "Architect & Validate", desc: "Design solutions, validate with data, align with stakeholders." },
  { num: "03", title: "Launch & Optimize", desc: "Ship, measure, iterate. Build systems that scale." },
];

export default function Services() {
  return (
    <main>
      <section className="px-8 md:px-14 py-20">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Expertise</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">Services</h1>
            <p className="text-muted-foreground text-body-lg mb-16 max-w-2xl leading-relaxed">
              End-to-end product expertise from strategy to execution.
            </p>
          </FadeUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={cardVariants}
                className="bg-card border border-border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-purple-sm hover:border-primary/20 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-xl mb-5">{s.icon}</div>
                <h3 className="font-semibold text-foreground mb-2.5 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary flex-none" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* How I Work */}
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">How I Work</h2>
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={cardVariants}
                className="bg-secondary rounded-2xl p-7"
              >
                <p className="text-4xl font-bold text-primary/20 mb-4">{step.num}</p>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
