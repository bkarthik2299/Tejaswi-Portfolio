import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { FadeUp, StaggerContainer, cardVariants } from "@/components/animations";
import PageFooter from "@/components/PageFooter";

const stats = [
  { value: "2 Years", label: "Product Experience" },
  { value: "30+", label: "Satisfied Clients" },
  { value: "65%", label: "Reduction in Defaults" },
  { value: "$100K+", label: "Monthly Transactions" },
];

const works = [
  "BerryPay Dashboard",
  "Swiggy Product Breakdown",
  "Tata Steel Deck",
  "Risk Analytics Model",
  "Berry Nerd Platform",
  "Raptee Deck",
];

const projects = [
  {
    title: "Transforming Patient Intake Into a Revenue Intelligence Engine",
    tags: ["Fintech", "Healthcare SaaS"],
    year: "2024",
    summary: "Digitized orthodontic intake workflows reducing onboarding time by 40%.",
  },
  {
    title: "Retail Trading Platform Growth Strategy – Indian Market",
    tags: ["Fintech", "Growth Strategy"],
    year: "2024",
    summary: "Data-driven acquisition funnel for discount brokerage targeting Tier-2/3 India.",
  },
  {
    title: "Agricultural Scheme Evaluation – Bihar (Gates Foundation)",
    tags: ["Public Policy", "Analytics"],
    year: "2023",
    summary: "Framework design across 100+ state schemes with KPI tracking.",
  },
];

const services = [
  {
    title: "Fintech Product Strategy",
    desc: "Scalable architectures balancing compliance, revenue intelligence, and operational efficiency.",
    icon: "🏦",
  },
  {
    title: "SaaS Workflow Automation",
    desc: "Structured automated workflows eliminating manual inefficiencies.",
    icon: "⚙️",
  },
  {
    title: "Data & Analytics Systems",
    desc: "Growth engines connecting acquisition, activation, retention, and revenue.",
    icon: "📊",
  },
  {
    title: "Product Operations & Scaling",
    desc: "Sprint planning, RICE framework, cross-functional alignment.",
    icon: "🚀",
  },
];

const blogs = [
  {
    title: "The Personal Finance System I Wish I Built at 18",
    excerpt: "Money management isn't about budgeting harder — it's about designing systems that reduce friction and compound over time.",
    link: "https://medium.com/p/6121c5c1db71",
  },
  {
    title: "Product Management in India vs US — Structural Differences",
    excerpt: "The PM title may be the same globally, but ownership, risk appetite, and execution culture vary significantly.",
    link: "https://tejaswigollapudi.medium.com/product-management-in-india-vs-the-us-structural-differences-dd5814e93bbd",
  },
];

const testimonials = [
  {
    quote: "Tejaswi brought incredible clarity to our fintech product roadmap. His ability to translate complex data into actionable insights was game-changing.",
    name: "[Client Name]",
    title: "[Title]",
    company: "[Company]",
  },
  {
    quote: "Working with Tejaswi on our SaaS workflow automation saved us weeks of manual effort. The systems he built are robust, scalable, and user-friendly.",
    name: "[Client Name]",
    title: "[Title]",
    company: "[Company]",
  },
  {
    quote: "His product thinking goes beyond features — he understands the full system and how each decision affects the bottom line.",
    name: "[Client Name]",
    title: "[Title]",
    company: "[Company]",
  },
];

export default function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
    }
  };

  const prevTestimonial = () => setTestimonialIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const nextTestimonial = () => setTestimonialIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <main>
      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center px-8 md:px-14 py-20 md:py-0" style={{ paddingTop: "clamp(80px, 10vh, 160px)", paddingBottom: "clamp(60px, 8vh, 120px)" }}>
        <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <FadeUp delay={0}>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Product Manager · Fintech & SaaS</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight text-foreground mb-6">
                Hi, I'm Tejaswi Gollapudi
                <br />
                <span className="text-gradient-purple">Building Fintech & SaaS Systems That Scale</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-body-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Growth-oriented Product Manager experienced in building and scaling revenue-driving platforms using funnel thinking, experimentation, and performance metrics across fintech and edtech domains.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/projects">
                  <button className="bg-primary text-primary-foreground px-7 py-3.5 rounded-pill text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple active:scale-[0.98]">
                    View Projects
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border border-primary text-primary px-7 py-3.5 rounded-pill text-sm font-medium transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5">
                    Let's Talk
                  </button>
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-primary">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-3xl bg-secondary flex flex-col items-center justify-center photo-glow border border-border shadow-card-hover">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-primary/30">
                  <circle cx="32" cy="24" r="14" fill="currentColor" />
                  <ellipse cx="32" cy="56" rx="26" ry="18" fill="currentColor" />
                </svg>
                <p className="text-xs text-muted-foreground mt-4 font-medium">[ Add Profile Photo here ]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RECENT WORKS ── */}
      <section className="px-8 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="bg-secondary rounded-4xl p-8 md:p-12">
              <div className="flex items-end justify-between mb-2">
                <h2 className="text-2xl md:text-h2 font-bold text-foreground">Recent Works</h2>
                <div className="flex gap-2">
                  <button onClick={() => scroll("left")} className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={() => scroll("right")} className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-8">From concept to execution — fintech systems and scalable SaaS solutions.</p>
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {works.map((work) => (
                  <div
                    key={work}
                    className="flex-none w-64 h-44 rounded-2xl bg-primary/10 border border-primary/10 flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                      <span className="text-primary text-lg">📁</span>
                    </div>
                    <p className="text-sm font-medium text-foreground text-center px-4">{work}</p>
                    <p className="text-xs text-muted-foreground mt-1">[ Preview ]</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── LATEST PROJECTS ── */}
      <section className="px-8 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-h2 font-bold text-foreground">Latest Projects</h2>
              <Link to="/projects" className="flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                variants={cardVariants}
                className="bg-card border border-border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary/20 group"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-pill bg-secondary text-primary font-medium">{tag}</span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-2">{p.year}</p>
                <h3 className="font-semibold text-foreground text-base leading-snug mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="px-8 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-2xl md:text-h2 font-bold text-foreground mb-3">What I Do Best</h2>
            <p className="text-muted-foreground mb-10 max-w-lg">Combining data-driven insights with user-centric design to build scalable products.</p>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={cardVariants}
                className="bg-card border border-border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-purple-sm hover:border-primary/20"
              >
                <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-xl mb-5">{s.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-8 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="bg-secondary rounded-4xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">What Clients Say</h2>
                <div className="flex gap-2">
                  <button onClick={prevTestimonial} className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={nextTestimonial} className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{testimonials[testimonialIdx].quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[testimonialIdx].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[testimonialIdx].title} · {testimonials[testimonialIdx].company}</p>
                </div>
              </motion.div>
              <div className="flex gap-2 mt-6 justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === testimonialIdx ? "bg-primary w-6" : "bg-primary/25"}`}
                  />
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="px-8 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-h2 font-bold text-foreground">Insights & Writing</h2>
              <Link to="/blogs" className="flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {blogs.map((b) => (
              <motion.div
                key={b.title}
                variants={cardVariants}
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary/20 group"
              >
                <div className="h-44 bg-secondary flex items-center justify-center">
                  <span className="text-4xl">✍️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{b.excerpt}</p>
                  <a
                    href={b.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                  >
                    Read More <ArrowRight size={13} />
                  </a>
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
