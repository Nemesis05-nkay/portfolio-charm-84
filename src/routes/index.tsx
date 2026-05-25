import { createFileRoute } from "@tanstack/react-router";
import flyerServices from "@/assets/flyer-services.jpg";
import workFirstLove from "@/assets/work-firstlove.jpg";
import workKezia from "@/assets/work-kezia.jpg";
import workDarkoa from "@/assets/work-darkoa.jpg";
import workKbIntro from "@/assets/work-kbintro.jpg";
import { Mail, Phone, Github, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const works = [
  {
    src: workFirstLove,
    title: "First Love Church",
    category: "Social Media Design",
    description: "Member proud-of campaign graphic for First Love Church.",
  },
  {
    src: workKezia,
    title: "Kezia's Love Bites",
    category: "Flyer · Menu Design",
    description: "Valentine's Day packages flyer with vibrant food styling.",
  },
  {
    src: workDarkoa,
    title: "Gallery Lash Artistry",
    category: "Promo Flyer",
    description: "Valentine's Day special promo pricing flyer.",
  },
  {
    src: workKbIntro,
    title: "Nana Kwame Brew — KB",
    category: "Personal Branding",
    description: "Editorial intro slide for a student leader's brand.",
  },
];

const services = [
  "Logo Design",
  "Flyers",
  "Brochures",
  "Certificates",
  "T-shirt Styles",
  "Business Cards",
  "Websites",
  "Branding",
  "Menu Design",
  "UI / UX Design",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-text)] text-primary-foreground">
              K
            </span>
            <span>KamalNK</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>
          <a
            href="mailto:Aguzenathaniel@gmail.com"
            className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Hire me <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-32">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Available for new projects
            </span>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Designing brands &{" "}
              <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
                building digital
              </span>{" "}
              experiences.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I'm <span className="text-foreground">KamalNK</span> — a Software Engineer, UI/UX and
              Graphic Designer based in Abokobi, Ghana. I craft flyers, identities and interfaces
              that move people.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              >
                View my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
              style={{ background: "var(--gradient-hero)" }}
            />
            <img
              src={flyerServices}
              alt="KamalNK graphic design services flyer"
              className="relative w-full rounded-3xl border border-border/60 object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border/40 bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary">Services</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                What I design & build
              </h2>
            </div>
            <p className="hidden max-w-sm text-muted-foreground md:block">
              From a single business card to a full brand system and the website that ships with it.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {services.map((s) => (
              <div
                key={s}
                className="group rounded-2xl border border-border/60 bg-card p-5 text-sm font-medium transition-all hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
                  ✓
                </span>{" "}
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-primary">Selected Work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
              Recent projects
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {works.map((w) => (
              <article
                key={w.title}
                className="group overflow-hidden rounded-3xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={w.src}
                    alt={w.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary">{w.category}</p>
                    <h3 className="mt-1 text-xl font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.description}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border/40 bg-card/30 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">About</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
              A designer who codes — and a coder who designs.
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm KamalNK, a multidisciplinary creator working at the intersection of brand,
              interface and engineering. I help small businesses, churches, creators and student
              organizations look great and ship fast.
            </p>
            <p>
              My toolkit spans Photoshop, Illustrator, Figma, React and TypeScript. Whether it's a
              one-night flyer or a full product, I bring the same care to typography, color and
              detail.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Graphic Design", "UI / UX", "Branding", "Front-end", "Print & Social"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className="overflow-hidden rounded-3xl border border-border/60 p-10 md:p-16"
            style={{ background: "var(--gradient-hero)" }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-foreground/80">Contact</p>
            <h2 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
              Let's build something memorable.
            </h2>
            <div className="mt-10 grid gap-4 text-primary-foreground md:grid-cols-2">
              <a
                href="mailto:Aguzenathaniel@gmail.com"
                className="flex items-center gap-3 rounded-2xl bg-background/15 p-4 backdrop-blur transition-colors hover:bg-background/25"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">Aguzenathaniel@gmail.com</span>
              </a>
              <a
                href="tel:+233505684296"
                className="flex items-center gap-3 rounded-2xl bg-background/15 p-4 backdrop-blur transition-colors hover:bg-background/25"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">0505 684 296</span>
              </a>
              <a
                href="https://github.com/Nemesis05-nkay"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-background/15 p-4 backdrop-blur transition-colors hover:bg-background/25"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium">github.com/Nemesis05-nkay</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-background/15 p-4 backdrop-blur">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Abokobi, Kente Junction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} KamalNK · Designed & built with care.
      </footer>
    </div>
  );
}
