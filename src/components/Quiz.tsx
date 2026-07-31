import { useMemo, useState } from "react";
import { worldCups } from "@/data/worldCups";

type Question = {
  q: string;
  options: string[];
  answer: number;
};

const questions: Question[] = [
  { q: "Em que país aconteceu a primeira Copa do Mundo, em 1930?", options: ["Brasil", "Uruguai", "Itália", "França"], answer: 1 },
  { q: "Qual seleção é a maior campeã da Copa do Mundo?", options: ["Alemanha", "Itália", "Brasil", "Argentina"], answer: 2 },
  { q: "Quem venceu a Copa de 1950, no Maracanã?", options: ["Brasil", "Uruguai", "Argentina", "Itália"], answer: 1 },
  { q: "Quem foi o campeão da Copa de 2022, no Catar?", options: ["França", "Brasil", "Argentina", "Croácia"], answer: 2 },
  { q: "Em que Copa Pelé estreou aos 17 anos?", options: ["1954", "1958", "1962", "1966"], answer: 1 },
  { q: "Qual a única Copa vencida pela Inglaterra?", options: ["1962", "1966", "1970", "1974"], answer: 1 },
  { q: "Quem venceu a Copa de 2026, nos EUA, Canadá e México?", options: ["Argentina", "Espanha", "Brasil", "França"], answer: 1 },
];

export function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const progress = useMemo(() => ((current + (finished ? 1 : 0)) / questions.length) * 100, [current, finished]);

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setFinished(true);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 900);
  }

  function reset() {
    setCurrent(0); setSelected(null); setScore(0); setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="card-trophy card-trophy-hover rounded-2xl p-8 text-center">
        <div className="text-6xl mb-3">{pct >= 80 ? "🏆" : pct >= 50 ? "⚽" : "🎯"}</div>
        <h3 className="text-3xl mb-2 text-gradient-gold">Resultado Final</h3>
        <p className="text-xl text-muted-foreground mb-1">Você acertou</p>
        <p className="text-5xl font-display text-primary mb-4">{score} / {questions.length}</p>
        <p className="text-muted-foreground mb-6">
          {pct >= 80 ? "Craque! Você é um verdadeiro especialista em Copas do Mundo." :
           pct >= 50 ? "Mandou bem! Mas dá pra melhorar nas próximas Copas." :
           "Hora de revisar a história das Copas. Role pra cima e estude!"}
        </p>
        <button onClick={reset} className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:scale-105">
          Jogar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="card-trophy rounded-2xl p-6 sm:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
          <span>Pergunta {current + 1} de {questions.length}</span>
          <span>Acertos: {score}</span>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <h3 className="text-2xl sm:text-3xl mb-6 leading-tight">{q.q}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {q.options.map((opt, i) => {
          const isCorrect = selected !== null && i === q.answer;
          const isWrong = selected === i && i !== q.answer;
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`text-left rounded-xl border px-4 py-3 transition-all ${
                isCorrect ? "border-primary bg-primary/20 text-primary" :
                isWrong ? "border-destructive bg-destructive/20" :
                "border-border bg-muted/40 hover:border-primary/60 hover:bg-muted"
              } disabled:cursor-not-allowed`}
            >
              <span className="font-semibold mr-2 text-muted-foreground">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Stat value="23" label="Edições" />
      <Stat value="96" label="Anos de história" />
      <Stat value="8" label="Seleções campeãs" />
      <Stat value="18" label="Países-sede" />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-trophy card-trophy-hover rounded-2xl p-6 text-center">
      <div className="font-display text-5xl text-gradient-gold">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function WorldCupCount() {
  return null;
}
export { worldCups };
