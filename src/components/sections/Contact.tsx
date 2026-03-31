import SectionContainer from "../ui/SectionContainer";
import Footer from "../layout/Footer";
import { MdEmail, MdOpenInNew } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const LINKS = [
  {
    label: "GitHub",
    handle: "Harsh Agarwal",
    href: "https://github.com/no-usefun",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    handle: "Harsh Agarwal",
    href: "https://linkedin.com/in/no-usefun",
    icon: FaLinkedin,
  },
];

function Contact() {
  return (
    <>
      <SectionContainer
        id="contact"
        className="bg-neutral-950 min-h-[60vh] flex items-center"
        title="Contact"
      >
        <div className="w-full max-w-4xl mx-auto mt-12 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 overflow-hidden relative">
          {/* Subtle glow accent */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-500/5 blur-2xl" />

          <div className="grid md:grid-cols-[1fr_1px_1fr]">
            {/* LEFT */}
            <div className="p-10">
              {/* Availability badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs uppercase tracking-widest font-medium mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
                Available for work
              </span>

              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                I'm currently open to freelance work and collaboration
                opportunities. If you'd like to work together or have any
                questions, feel free to reach out.
              </p>

              <a
                href="mailto:itsharsh636+contact@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold
                  shadow-[0_4px_20px_rgba(59,130,246,0.3)]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(59,130,246,0.45)]
                  active:scale-[0.97]"
              >
                <MdEmail size={15} />
                Send Email
              </a>
            </div>

            {/* DIVIDER */}
            <div className="hidden md:block bg-neutral-800" />

            {/* RIGHT */}
            <div className="p-10 flex flex-col justify-center gap-6">
              {/* Email row */}
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-[0.12em] font-medium mb-1.5">
                  Email
                </p>
                <p className="text-sm text-neutral-300">
                  itsharsh636+contact@gmail.com
                </p>
              </div>

              <hr className="border-neutral-800" />

              {/* Social links */}
              {LINKS.map(({ label, handle, href, icon: Icon }, i) => (
                <div key={label}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-[0.12em] font-medium mb-1">
                        {label}
                      </p>
                      <p className="text-sm text-neutral-400">{handle}</p>
                    </div>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-neutral-700 text-neutral-400 text-xs
                        transition-all duration-200
                        hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5"
                    >
                      <Icon size={12} />
                      Visit
                      <MdOpenInNew size={11} className="opacity-50" />
                    </a>
                  </div>
                  {i < LINKS.length - 1 && (
                    <hr className="border-neutral-800 mt-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
}

export default Contact;
