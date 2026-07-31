import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ia")({
  head: () => ({
    meta: [
      { title: "Como a IA Aprende — O Processo de Aprendizado da Inteligência Artificial" },
      { name: "description", content: "Entenda como a Inteligência Artificial aprende: dados, padrões e respostas. E descubra como a IA pode te ajudar no dia a dia, explicado de forma simples." },
      { property: "og:title", content: "Como a IA Aprende — Dados, Padrões e Respostas" },
      { property: "og:description", content: "O processo de aprendizado da Inteligência Artificial explicado de forma simples e visual." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: IaPage,
});

const steps = [
  {
    n: 1,
    icon: "📚",
    title: "Dados",
    text: "Leitura de muitos livros, artigos e sites da internet.",
    detail: "Assim como um estudante que lê muito antes de uma prova, a IA 'estuda' uma enorme quantidade de textos para conhecer o mundo.",
  },
  {
    n: 2,
    icon: "🔍",
    title: "Padrões",
    text: "Identificação de como as palavras e frases se conectam.",
    detail: "A IA percebe que certas palavras costumam aparecer juntas e aprende a estrutura da linguagem, como quem aprende as regras de um jogo.",
  },
  {
    n: 3,
    icon: "✍️",
    title: "Respostas",
    text: "Criação de textos com base nesses padrões aprendidos.",
    detail: "Com tudo o que aprendeu, a IA consegue montar respostas novas, palavra por palavra, escolhendo a que faz mais sentido em cada momento.",
  },
];

const helps = [
  {
    icon: "💬",
    title: "Responder a dúvidas",
    text: "Pergunte sobre qualquer assunto — da escola ao trabalho — e receba uma resposta direta e clara.",
  },
  {
    icon: "📝",
    title: "Escrever textos e resumos",
    text: "Redações, e-mails, resumos de textos longos e ideias criativas, tudo em poucos segundos.",
  },
  {
    icon: "💡",
    title: "Explicar assuntos difíceis de forma simples",
    text: "Temas complicados viram explicações fáceis de entender, com exemplos do dia a dia.",
  },
];

function IaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main>
        <ProcessSection />
        <AnalogySection />
        <HelpSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl">
          <span className="text-2xl">🏆</span>
          <span className="text-gradient-gold tracking-wider">COPA HISTÓRICA</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#processo" className="hidden sm:inline hover:text-primary transition">O Processo</a>
          <a href="#ajuda" className="hidden sm:inline hover:text-primary transition">Como Ajudar</a>
          <Link to="/" className="hover:text-primary transition">← Voltar à Copa</Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:pt-28 sm:pb-28">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Inteligência Artificial
        </div>
        <div className="text-6xl mb-4">🤖</div>
        <h1 className="font-display text-6xl sm:text-8xl leading-none">
          <span className="block text-foreground">O PROCESSO DE</span>
          <span className="block text-gradient-gold">APRENDIZADO DA IA</span>
        </h1>
        <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Como uma Inteligência Artificial aprende? Ela não decora — ela estuda dados,
          encontra padrões e cria respostas. Entenda cada etapa de forma simples.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#processo" className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:scale-105">
            Ver o processo
          </a>
          <a href="#ajuda" className="rounded-full border border-border bg-card/50 px-8 py-3 font-semibold transition hover:border-primary/60">
            Como pode me ajudar
          </a>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="processo" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader eyebrow="Passo a passo" title="COMO A IA APRENDE" sub="Três etapas simples explicam todo o aprendizado de uma Inteligência Artificial." />
      <div className="grid gap-5 md:grid-cols-3 relative">
        {steps.map((s, i) => (
          <div key={s.n} className="relative">
            <article className="card-trophy card-trophy-hover rounded-2xl p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{s.icon}</span>
                <span className="font-display text-5xl text-gradient-gold leading-none">0{s.n}</span>
              </div>
              <h3 className="font-display text-3xl tracking-wide text-foreground mb-2">{s.title.toUpperCase()}</h3>
              <p className="font-semibold text-primary mb-3">{s.text}</p>
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-3 mt-auto">
                {s.detail}
              </p>
            </article>
            {i < steps.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 text-primary text-2xl font-black">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function AnalogySection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <div className="card-trophy rounded-2xl p-8 sm:p-10 text-center">
        <div className="text-4xl mb-4">🎓</div>
        <h2 className="font-display text-3xl sm:text-4xl text-gradient-gold mb-4">UMA ANALOGIA SIMPLES</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Pense na IA como um estudante muito dedicado: ele lê milhares de livros <strong className="text-foreground">(dados)</strong>,
          percebe como as ideias se repetem e se conectam <strong className="text-foreground">(padrões)</strong> e, na hora da prova,
          escreve as próprias respostas usando tudo o que aprendeu <strong className="text-foreground">(respostas)</strong>.
          Quanto mais ele estuda, melhores ficam suas respostas.
        </p>
      </div>
    </section>
  );
}

function HelpSection() {
  return (
    <section id="ajuda" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader eyebrow="Na prática" title="COMO POSSO TE AJUDAR" sub="O que uma IA como eu pode fazer por você no dia a dia." />
      <div className="grid gap-5 sm:grid-cols-3">
        {helps.map((h) => (
          <article key={h.title} className="card-trophy card-trophy-hover rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">{h.icon}</div>
            <h3 className="font-bold text-lg text-foreground mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
          </article>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/" className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:scale-105 inline-block">
          🏆 Voltar para a História da Copa
        </Link>
      </div>
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
    <footer className="border-t border-border mt-10 py-10 px-4">
      <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
        <div className="font-display text-2xl text-gradient-gold mb-2">COMO A IA APRENDE</div>
        <p>Dados → Padrões → Respostas. Simples assim. 🤖✨</p>
      </div>
    </footer>
  );
}
