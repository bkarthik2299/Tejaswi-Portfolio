import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const footerLinks = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blogs", path: "/blogs" },
];

interface PageFooterProps {
  showNewsletter?: boolean;
}

export default function PageFooter({ showNewsletter = true }: PageFooterProps) {
  return (
    <footer className="bg-footer-bg text-white">
      {/* Let's Talk Section */}
      <div className="px-8 md:px-16 py-24 md:py-36">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-6 text-white/50">Let's Talk</p>
          <a
            href="mailto:gollapudisuryatejaswi@gmail.com"
            className="block text-3xl md:text-5xl lg:text-6xl font-bold text-white hover:text-white/80 transition-colors duration-300 break-all leading-tight mb-10 group"
          >
            gollapudisuryatejaswi@gmail.com
            <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>

          {showNewsletter && (
            <div className="flex flex-col sm:flex-row gap-3 mb-12 max-w-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-white/20 rounded-pill px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-pill text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          )}

          <div className="flex flex-wrap gap-6 items-center">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://linkedin.com/in/tejaswi-gollapudi-a68b58238"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-8 md:px-16 py-5">
        <p className="text-xs text-white/30 text-center">© 2026 Tejaswi Gollapudi</p>
      </div>
    </footer>
  );
}
