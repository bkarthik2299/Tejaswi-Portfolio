import { FadeUp } from "@/components/animations";
import { Mail, Calendar, Linkedin, ExternalLink } from "lucide-react";
import PageFooter from "@/components/PageFooter";

const links = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "gollapudisuryatejaswi@gmail.com",
    href: "mailto:gollapudisuryatejaswi@gmail.com",
    isPrimary: false,
  },
  {
    icon: <Calendar size={18} />,
    label: "Book a Call",
    value: "Schedule 30 min",
    href: "https://calendar.app.google/tN1tcN6v1dXpGwNr6",
    isPrimary: true,
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "tejaswi-gollapudi-a68b58238",
    href: "https://linkedin.com/in/tejaswi-gollapudi-a68b58238",
    isPrimary: false,
  },
  {
    icon: <ExternalLink size={18} />,
    label: "Unstop Mentor",
    value: "unstop.com/mentor/Tejaswi",
    href: "https://unstop.com/mentor/Tejaswi?ref=bV5H3ur6",
    isPrimary: false,
  },
];

export default function Contact() {
  return (
    <main>
      <section className="min-h-[80vh] px-8 md:px-14 py-20 flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          <FadeUp>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Reach Out</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">Let's Connect</h1>
            <p className="text-muted-foreground text-body-lg mb-12 max-w-xl leading-relaxed">
              Open to product leadership, fintech systems, and scalable SaaS challenges.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <a
              href="mailto:gollapudisuryatejaswi@gmail.com"
              className="block text-2xl md:text-4xl font-bold text-primary hover:opacity-80 transition-opacity mb-14 break-all"
            >
              gollapudisuryatejaswi@gmail.com ↗
            </a>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="grid sm:grid-cols-2 gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 group ${
                    link.isPrimary
                      ? "bg-primary border-primary text-primary-foreground hover:shadow-purple"
                      : "bg-card border-border hover:border-primary/30 hover:shadow-card"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-none ${
                    link.isPrimary ? "bg-white/15" : "bg-secondary"
                  }`}>
                    <span className={link.isPrimary ? "text-white" : "text-primary"}>{link.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-medium mb-0.5 ${link.isPrimary ? "text-white/70" : "text-muted-foreground"}`}>{link.label}</p>
                    <p className={`text-sm font-semibold truncate ${link.isPrimary ? "text-white" : "text-foreground group-hover:text-primary transition-colors"}`}>
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
      <PageFooter showNewsletter={false} />
    </main>
  );
}
