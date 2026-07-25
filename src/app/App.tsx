import { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Coffee,
  Palette,
  Gamepad2,
  BookOpen,
  Music,
  Camera,
  Zap,
  ChevronDown,
  Dice5,
  CheckCircle2,
  Clock,
  Circle,
  Earth,
} from "lucide-react";

// ── DATA ──────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    date: "Grade 6",
    title: "Middle school begins",
    desc: "Stepped into a new chapter — bigger school, harder subjects, and the first spark of curiosity about computers.",
    tag: "school",
  },
  {
    date: "Grade 7",
    title: "Fell in love with English",
    desc: "Discovered that English was more than a simple language — it was a doorway to books, games, and the internet.",
    tag: "language",
  },
  {
    date: "Grade 10",
    title: "First steps into AI",
    desc: "Learned how to use AI tools to study and brainstorm ideas.",
    tag: "tech",
  },
   {
    date: "Grade 10",
    title: "My first Microsoft certificate",
    desc: "Got a Microsoft Office Specialist certificate in Word.",
    tag: "certification",
  },
  {
    date: "Grade 11",
    title: "HCMC Olympic — 3rd Prize in English 🥉",
    desc: "Competed in the Ho Chi Minh City English Olympic and earned 3rd prize. One of my proudest moments.",
    tag: "achievement",
  },
  {
    date: "Grade 11",
    title: "My second Microsoft certificate",
    desc: "Got another Microsoft Office Specialist certificate, this time in Excel.",
    tag: "certification",
  },
  {
    date: "Grade 11",
    title: "Started learning to code",
    desc: "Picked up HTML, CSS, and JavaScript fundamentals. Built my first portfolio with my tutor — broken layout and all.",
    tag: "tech",
  },
  {
    date: "Grade 12",
    title: "Got an IELTS band 7.0",
    desc: "After months of preparation, I finally achieved my target IELTS score.",
    tag: "achievement",
  },
];

const HOBBIES = [
  { icon: Palette, name: "Drawing", desc: "Still currently learning how to draw, usually military stuffs." },
  { icon: Gamepad2, name: "Gaming", desc: "I love military games, especially milsims like Ready Or Not and strategy games." },
  { icon: BookOpen, name: "Reading", desc: "Currently reading a lot of light novels." },
  { icon: Music, name: "Music", desc: "Always have a playlist running consisting of musics from pretty much every genre." },
  { icon: Zap, name: "Exercising", desc: "Helps me think better and stay energized." },
  { icon: Earth, name: "Worldbuilding", desc: "Creating alternative histories and fictional worlds." },
];

const GOALS = [
  { label: "Earn MOS Certificates for Excel & Word", status: "done" },
  { label: "Win a prize at HCMC English Olympic", status: "done" },
  { label: "Learn HTML, CSS & JavaScript basics", status: "done" },
  { label: "Build my first personal portfolio website", status: "done" },
  { label: "Revitalize my momentum for studying code", status: "progress" },
  { label: "Achieve IELTS band 7.0 or above", status: "progress" },
  { label: "Improve my drawing skills", status: "progress" },
  { label: "Get into a great college", status: "upcoming" },
];

const FACTS = [
  "I play a lot of games and they usually cconsists of giant robots, military shooters and gacha games.",
  "My favorite movies are Pacific Rim, Real Steel and Bayverse Transformers.",
  "My first line of code was a typo that took an hour to fix 😅",
  "I have spent at least a year creating an alternative history and I have still not finished it :D.",
  "I LOVE giant robots and military related stuffs, including vehicular and infantry. ",
  "I prefer dark mode on everything because my eyes hurts when it is too bright. And also because it looks cooler.",
  "I am weirdly attached to anime characters, including an original character I created."
];

// ── HELPERS ───────────────────────────────────────────────────────────────────

function Badge({ status }: { status: "done" | "progress" | "upcoming" }) {
  const map = {
    done: { label: "Done", cls: "bg-green-100 text-green-700", icon: CheckCircle2 },
    progress: { label: "In Progress", cls: "bg-yellow-100 text-yellow-700", icon: Clock },
    upcoming: { label: "Upcoming", cls: "bg-gray-100 text-gray-500", icon: Circle },
  };
  const { label, cls, icon: Icon } = map[status];
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${cls}`}>
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
}

const TAG_STYLES: Record<string, string> = {
  achievement: "bg-yellow-100 text-yellow-700",
  tech: "bg-blue-100 text-blue-700",
  language: "bg-purple-100 text-purple-700",
  school: "bg-green-100 text-green-700",
  now: "bg-pink-100 text-pink-700",
};
const TAG_LABELS: Record<string, string> = {
  achievement: "🏆 Achievement",
  tech: "💻 Tech",
  language: "📖 Language",
  school: "🏫 School",
  now: "📍 Now",
};

function TagPill({ tag }: { tag: string }) {
  return (
    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${TAG_STYLES[tag] ?? "bg-gray-100 text-gray-600"}`}>
      {TAG_LABELS[tag] ?? tag}
    </span>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3 px-3 py-1 bg-secondary rounded-full">
      {text}
    </span>
  );
}

function HobbyCard({ icon: Icon, name, desc }: { icon: React.ElementType; name: string; desc: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ perspective: "800px", height: "160px" }}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-card rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center gap-3"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-semibold text-sm text-foreground">{name}</span>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 bg-primary rounded-2xl flex items-center justify-center p-4"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-primary-foreground text-sm text-center leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── MAIN ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [fact, setFact] = useState<string | null>(null);
  const [shaking, setShaking] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setIsDark(storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  function rollFact() {
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
    const pool = FACTS.filter((f) => f !== fact);
    setFact(pool[Math.floor(Math.random() * pool.length)]);
  }

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/90 backdrop-blur-sm border-b border-border shadow-sm" : ""}`}
      >
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-bold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="text-primary">{"<"}</span>Lucas
            <span className="text-accent">.</span>
            <span className="text-primary">{"/>"}</span>
          </span>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {["About", "Journey", "Hobbies", "Goals", "Contact"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsDark((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* decorative blobs */}
        <div
          className="absolute top-20 right-[-80px] w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #5B7FFF 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-10 left-[-60px] w-[300px] h-[300px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #FFD166 0%, transparent 70%)" }}
        />

        <div className="max-w-[1100px] mx-auto px-6 pt-28 pb-20 w-full">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase text-primary mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Welcome to my world
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-foreground"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hey, I'm{" "}
            <span
              className="relative inline-block"
              style={{
                color: isDark ? undefined : "#5B7FFF",
                background: isDark ? "linear-gradient(135deg, #DA6C14 60%, #915020 100%)" : undefined,
                WebkitBackgroundClip: isDark ? "text" : undefined,
                WebkitTextFillColor: isDark ? "transparent" : undefined,
                backgroundClip: isDark ? "text" : undefined,
              }}
            >
              Lucas
            </span>{" "}
            <span>👋</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-[560px] mb-10 leading-relaxed">
            I love building things, learning new skills, hanging out and having a good time.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#journey"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              See my journey <ChevronDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-200"
            >
              Say hello
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 sm:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
            <div>
              <SectionLabel text="About Me" />
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: isDark ? "linear-gradient(135deg, #DA6C14 60%, #915020 100%)" : undefined,
                  WebkitBackgroundClip: isDark ? "text" : undefined,
                  WebkitTextFillColor: isDark ? "transparent" : undefined,
                  backgroundClip: isDark ? "text" : undefined,
                }}
              >
                A little about who I am
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I’m a grade 12th student in Ho Chi Minh city, currently preparing for college and a passion for English, 
                video games, history and creativity. I love learning and experiencing, whether it is completing my first web project, 
                learning how to draw, talking about history or just chasing a higher IELTS band. 
                I also have an achievement, that is the 3rd prize reward for HCMC Olympic Competition for High School Students in English and 2 Microsoft Office Specialist certificates for Word and Excel. 
                When i am not studying, you’ll usually see me gaming, talking with friends, researching about history and learning how to draw.
              </p>
            </div>

            {/* Quick Facts card */}
            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 space-y-4">
              <h3
                className="font-bold text-base mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Quick Facts
              </h3>
              {[
                { icon: "🎓", label: "Grade", value: "12th — graduating soon!" },
                { icon: "📍", label: "From", value: "Ho Chi Minh City, Vietnam" },
                { icon: "🎯", label: "Currently aiming for", value: "IELTS 7.0+ & college" },
                { icon: "🏫", label: "My high school", value: "Han Thuyen High School" },
                { icon: "🎵", label: "Always listening to", value: "Whatever music fits the mood" },
                { icon: "🎮", label: "Video games", value: "Tactical shooters, strategy games,..." },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span className="text-xl w-8 text-center shrink-0">{icon}</span>
                  <span className="text-muted-foreground w-36 shrink-0">{label}</span>
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section id="journey" className="py-20 sm:py-24 bg-secondary/40">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel text="My Journey So Far" />
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: isDark ? "linear-gradient(135deg, #DA6C14 60%, #915020 100%)" : undefined,
                WebkitBackgroundClip: isDark ? "text" : undefined,
                WebkitTextFillColor: isDark ? "transparent" : undefined,
                backgroundClip: isDark ? "text" : undefined,
              }}
            >
              Learnings & Achievements
            </h2>
          </div>

          {/* Desktop: alternating / Mobile: left-aligned */}
          <div className="relative">
            {/* center line — hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="space-y-10">
              {TIMELINE.map((entry, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className="relative flex items-start md:items-center gap-0">
                    {/* Mobile: left line */}
                    <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-border" />

                    {/* Mobile layout */}
                    <div className="md:hidden flex items-start gap-4 pl-10 w-full">
                      <div className="absolute left-[7px] top-[6px] w-3 h-3 rounded-full bg-primary border-2 border-background shrink-0" />
                      <div className="bg-card rounded-2xl border border-border shadow-sm p-5 flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <span className="inline-block text-xs font-semibold text-primary bg-secondary px-2.5 py-1 rounded-full">
                            {entry.date}
                          </span>
                          <TagPill tag={entry.tag} />
                        </div>
                        <h3 className="font-bold text-base mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {entry.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{entry.desc}</p>
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:grid grid-cols-[1fr_40px_1fr] w-full items-center gap-0">
                      {isLeft ? (
                        <>
                          <div className="flex justify-end pr-8">
                            <div className="bg-card rounded-2xl border border-border shadow-sm p-5 max-w-sm w-full">
                              <span className="inline-block text-xs font-semibold text-primary bg-secondary px-2.5 py-1 rounded-full mb-2">
                                {entry.date}
                              </span>
                              <h3 className="font-bold text-base mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                {entry.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">{entry.desc}</p>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow" />
                          </div>
                          <div />
                        </>
                      ) : (
                        <>
                          <div />
                          <div className="flex justify-center">
                            <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow" />
                          </div>
                          <div className="pl-8">
                            <div className="bg-card rounded-2xl border border-border shadow-sm p-5 max-w-sm w-full">
                              <span className="inline-block text-xs font-semibold text-primary bg-secondary px-2.5 py-1 rounded-full mb-2">
                                {entry.date}
                              </span>
                              <h3 className="font-bold text-base mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                {entry.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">{entry.desc}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
            {[
              { num: "12", label: "Years of School" },
              { num: "3", label: "Awards & Certs" },
              { num: "1", label: "Portfolio Built" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-card rounded-2xl border border-border p-5 shadow-sm">
                <div
                  className="text-3xl font-extrabold text-primary"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {num}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOBBIES ── */}
      <section id="hobbies" className="py-20 sm:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Beyond the Screen" />
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: isDark ? "linear-gradient(135deg, #DA6C14 60%, #915020 100%)" : undefined,
                WebkitBackgroundClip: isDark ? "text" : undefined,
                WebkitTextFillColor: isDark ? "transparent" : undefined,
                backgroundClip: isDark ? "text" : undefined,
              }}
            >
              Hobbies
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">Hover a card to flip it ✨</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {HOBBIES.map((h) => (
              <HobbyCard key={h.name} icon={h.icon} name={h.name} desc={h.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GOALS ── */}
      <section id="goals" className="py-20 sm:py-24 bg-secondary/40">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Looking Ahead" />
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: isDark ? "linear-gradient(135deg, #DA6C14 60%, #915020 100%)" : undefined,
                WebkitBackgroundClip: isDark ? "text" : undefined,
                WebkitTextFillColor: isDark ? "transparent" : undefined,
                backgroundClip: isDark ? "text" : undefined,
              }}
            >
              Where I'm headed
            </h2>
          </div>
          <div className="max-w-[640px] mx-auto space-y-4">
            {GOALS.map(({ label, status }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 bg-card rounded-2xl border border-border shadow-sm px-6 py-4"
              >
                <span
                  className={`text-sm font-medium ${status === "done" ? "line-through text-muted-foreground" : "text-foreground"}`}
                >
                  {label}
                </span>
                <Badge status={status as "done" | "progress" | "upcoming"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RANDOM FACT ── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="max-w-[560px] mx-auto text-center">
            <SectionLabel text="Bonus Round" />
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: isDark ? "linear-gradient(135deg, #DA6C14 60%, #915020 100%)" : undefined,
                WebkitBackgroundClip: isDark ? "text" : undefined,
                WebkitTextFillColor: isDark ? "transparent" : undefined,
                backgroundClip: isDark ? "text" : undefined,
              }}
            >
              Get to know me — randomly
            </h2>
            <p className="text-muted-foreground mb-8">Hit the button. Learn something weird.</p>

            <div
              className={`min-h-[100px] flex items-center justify-center bg-card rounded-2xl border-2 border-dashed border-border p-6 mb-6 transition-all duration-300 ${shaking ? "animate-bounce" : ""}`}
            >
              {fact ? (
                <p className="text-lg font-medium text-foreground leading-relaxed">{fact}</p>
              ) : (
                <p className="text-muted-foreground text-sm">Click the button to reveal a fact!</p>
              )}
            </div>

            <button
              onClick={rollFact}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-150 shadow-md active:scale-95 ${
                isDark
                  ? "bg-[#5E9DD6] text-white hover:brightness-95"
                  : "bg-accent text-accent-foreground hover:bg-accent/90"
              }`}
            >
              <Dice5 className="w-5 h-5" />
              Give me a fact
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT / FOOTER ── */}
      <footer
        id="contact"
        className="py-20 sm:py-28 text-center"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let's build something cool together
          </h2>
          <p className="text-white/60 mb-10 text-lg">Find me here:</p>

          <div className="flex items-center justify-center gap-5 flex-wrap mb-14">
            {[
              { icon: Mail, label: "Email", href: "mailto:lucasnguyen090809@example.com" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs max-w-[600px] mx-auto">
            <span>© 2026 Lucas. Built with React & love.</span>
            <span className="flex items-center gap-1">
              Powered by <Coffee className="w-3 h-3" /> and curiosity
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
