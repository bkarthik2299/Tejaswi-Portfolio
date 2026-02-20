import { FadeUp, StaggerContainer, cardVariants } from "@/components/animations";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageFooter from "@/components/PageFooter";

const blogs = [
  {
    title: "The Personal Finance System I Wish I Built at 18",
    excerpt: "Money management isn't about budgeting harder — it's about designing systems that reduce friction and compound over time.",
    link: "https://medium.com/p/6121c5c1db71",
    emoji: "💸",
  },
  {
    title: "Product Management in India vs US — Structural Differences",
    excerpt: "The PM title may be the same globally, but ownership, risk appetite, and execution culture vary significantly.",
    link: "https://tejaswigollapudi.medium.com/product-management-in-india-vs-the-us-structural-differences-dd5814e93bbd",
    emoji: "🌏",
  },
  {
    title: "Fintech x Product Management — Why Systems Thinking Wins",
    excerpt: "Fintech isn't about UI improvements. It's about building trust, compliance, and invisible infrastructure.",
    link: "#",
    emoji: "🏦",
  },
  {
    title: "An Investing Guide for College Students",
    excerpt: "The biggest mistake students make isn't losing money — it's waiting too long to start.",
    link: "#",
    emoji: "📈",
  },
  {
    title: "Why Product Marketing Is the Most Underrated PM Skill",
    excerpt: "You can build a brilliant product — but if you can't position it, you've built a feature, not a business.",
    link: "#",
    emoji: "📣",
  },
];

export default function Blogs() {
  return (
    <main>
      <section className="px-8 md:px-14 py-20">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Writing</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">Insights & Writing</h1>
            <p className="text-muted-foreground text-body-lg mb-16 max-w-2xl leading-relaxed">
              Thoughts on fintech systems, product management, growth strategy, and personal finance frameworks.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <motion.a
                key={blog.title}
                variants={cardVariants}
                href={blog.link}
                target={blog.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary/20 group block"
              >
                <div className="h-44 bg-secondary flex items-center justify-center">
                  <span className="text-5xl">{blog.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight size={13} />
                  </span>
                </div>
              </motion.a>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
