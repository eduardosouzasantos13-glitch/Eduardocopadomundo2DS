import { createFileRoute } from "@tanstack/react-router";
import { worldCups, titleCount } from "@/data/worldCups";
import { Quiz, StatsGrid } from "@/components/Quiz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Copa do Mundo FIFA — Da Primeira (1930) à Última (2022) | História Completa" },
      { name: "description", content: "História completa das Copas do Mundo FIFA de 1930 a 2022. Conheça todos os campeões, vice-campeões, sedes, placares e curiosidades das 22 edições." },
      { property: "og:title", content: "Copa do Mundo FIFA — História Completa de 1930 a 2022" },
      { property: "og:description", content: "Todos os campeões e vice-campeões das Copas do Mundo. Estatísticas, curiosidades e quiz interativo." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main>
        <StatsSection />
        <CupsSection />
        <RankingSection />
        <QuizSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-xl">
          <span className="text-2xl">🏆</span>
          <span className="text-gradient-gold tracking-wider">COPA HISTÓRICA</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#cups" className="hover:text-primary transition">Edições</a>
          <a href="#ranking" className="hover:text-primary transition">Ranking</a>
          <a href="#quiz" className="hover:text-primary transition">Quiz</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-20 pb-24 sm:pt-32 sm:pb-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, white 80px, white 160px)"
      }} />
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> 1930 — 2022
        </div>
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-none">
          <span className="block text-foreground">A HISTÓRIA DA</span>
          <span className="block text-gradient-gold">COPA DO MUNDO</span>
        </h1>
        <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Da primeira edição no Uruguai à consagração de Messi no Catar. Mergulhe em 92 anos de craques,
          gols históricos e os heróis que levantaram a taça mais cobiçada do planeta.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#cups" className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:scale-105">
            Ver todas as edições
          </a>
          <a href="#quiz" className="rounded-full border border-border bg-card/50 px-8 py-3 font-semibold transition hover:border-primary/60">
            Testar conhecimento
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <StatsGrid />
    </section>
  );
}

function CupsSection() {
  return (
    <section id="cups" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader eyebrow="22 Edições" title="TODAS AS COPAS" sub="Cada Copa do Mundo, seu campeão, seu vice e a história que ficou." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {worldCups.map((cup) => (
          <article key={cup.year} className="card-trophy card-trophy-hover rounded-2xl p-6 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="font-display text-5xl text-gradient-gold leading-none">{cup.year}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {cup.hostFlag} {cup.host}
                </div>
              </div>
              <span className="text-2xl">🏆</span>
            </div>

            <div className="space-y-3 mt-2">
              <div className="rounded-xl bg-primary/10 border border-primary/30 p-3">
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Campeão</div>
                <div className="flex items-center gap-2 text-lg font-bold">
                  <span className="text-2xl">{cup.championFlag}</span>{cup.champion}
                </div>
              </div>
              <div className="rounded-xl bg-muted/50 border border-border p-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Vice-campeão</div>
                <div className="flex items-center gap-2 text-base">
                  <span className="text-xl">{cup.runnerUpFlag}</span>{cup.runnerUp}
                </div>
              </div>
              <div className="text-center py-2 font-display text-2xl tracking-wider text-foreground/80">
                {cup.score}
              </div>
            </div>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
              {cup.fact}
            </p>
            <div className="mt-3 text-xs text-muted-foreground/70">📍 {cup.venue}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RankingSection() {
  return (
    <section id="ranking" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeader eyebrow="Hall da Fama" title="MAIORES CAMPEÕES" sub="As 8 seleções que já beijaram a taça." />
      <div className="card-trophy rounded-2xl overflow-hidden">
        {titleCount.map((c, i) => (
          <div key={c.country} className={`grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_auto_1fr_auto] items-center gap-4 px-5 py-4 ${i !== titleCount.length - 1 ? "border-b border-border" : ""}`}>
            <div className="font-display text-2xl text-muted-foreground w-8">#{i + 1}</div>
            <div className="text-3xl">{c.flag}</div>
            <div className="min-w-0">
              <div className="font-bold truncate">{c.country}</div>
              <div className="text-xs text-muted-foreground truncate">{c.years}</div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {Array.from({ length: c.titles }).map((_, k) => (
                <span key={k} className="text-lg">🏆</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuizSection() {
  return (
    <section id="quiz" className="mx-auto max-w-3xl px-4 py-20">
      <SectionHeader eyebrow="Interativo" title="QUIZ DA COPA" sub="6 perguntas para descobrir o quanto você sabe." />
      <Quiz />
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="text-center mb-10">
      <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">{eyebrow}</div>
      <h2 className="font-display text-4xl sm:text-6xl text-gradient-gold mb-3">{title}</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">{sub}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-10 px-4">
      <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
        <div className="font-display text-2xl text-gradient-gold mb-2">COPA HISTÓRICA</div>
        <p>Um tributo aos 92 anos de Copa do Mundo FIFA. ⚽🏆</p>
        <p className="mt-2 text-xs">Dados de 1930 a 2022 · Feito com paixão pelo futebol</p>
      </div>
    </footer>
  );
}
