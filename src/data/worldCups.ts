export type WorldCup = {
  year: number;
  host: string;
  hostFlag: string;
  champion: string;
  championFlag: string;
  runnerUp: string;
  runnerUpFlag: string;
  score: string;
  venue: string;
  fact: string;
};

export const worldCups: WorldCup[] = [
  { year: 1930, host: "Uruguai", hostFlag: "🇺🇾", champion: "Uruguai", championFlag: "🇺🇾", runnerUp: "Argentina", runnerUpFlag: "🇦🇷", score: "4 x 2", venue: "Montevidéu", fact: "A primeira Copa do Mundo da história, com apenas 13 seleções convidadas." },
  { year: 1934, host: "Itália", hostFlag: "🇮🇹", champion: "Itália", championFlag: "🇮🇹", runnerUp: "Tchecoslováquia", runnerUpFlag: "🇨🇿", score: "2 x 1", venue: "Roma", fact: "Primeira Copa decidida na prorrogação." },
  { year: 1938, host: "França", hostFlag: "🇫🇷", champion: "Itália", championFlag: "🇮🇹", runnerUp: "Hungria", runnerUpFlag: "🇭🇺", score: "4 x 2", venue: "Paris", fact: "Itália bicampeã. Última Copa antes da Segunda Guerra Mundial." },
  { year: 1950, host: "Brasil", hostFlag: "🇧🇷", champion: "Uruguai", championFlag: "🇺🇾", runnerUp: "Brasil", runnerUpFlag: "🇧🇷", score: "2 x 1", venue: "Maracanã, Rio de Janeiro", fact: "O \"Maracanazo\" — a maior tragédia do futebol brasileiro." },
  { year: 1954, host: "Suíça", hostFlag: "🇨🇭", champion: "Alemanha Ocidental", championFlag: "🇩🇪", runnerUp: "Hungria", runnerUpFlag: "🇭🇺", score: "3 x 2", venue: "Berna", fact: "O \"Milagre de Berna\" — a Alemanha derrotou a invencível Hungria de Puskás." },
  { year: 1958, host: "Suécia", hostFlag: "🇸🇪", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Suécia", runnerUpFlag: "🇸🇪", score: "5 x 2", venue: "Estocolmo", fact: "Estreia de Pelé com 17 anos. Primeiro título brasileiro." },
  { year: 1962, host: "Chile", hostFlag: "🇨🇱", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Tchecoslováquia", runnerUpFlag: "🇨🇿", score: "3 x 1", venue: "Santiago", fact: "Garrincha brilhou após a lesão de Pelé. Bicampeonato brasileiro." },
  { year: 1966, host: "Inglaterra", hostFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", champion: "Inglaterra", championFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", runnerUp: "Alemanha Ocidental", runnerUpFlag: "🇩🇪", score: "4 x 2", venue: "Wembley, Londres", fact: "Único título mundial dos inventores do futebol." },
  { year: 1970, host: "México", hostFlag: "🇲🇽", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Itália", runnerUpFlag: "🇮🇹", score: "4 x 1", venue: "Cidade do México", fact: "Tricampeonato. A seleção considerada a melhor de todos os tempos." },
  { year: 1974, host: "Alemanha Ocidental", hostFlag: "🇩🇪", champion: "Alemanha Ocidental", championFlag: "🇩🇪", runnerUp: "Holanda", runnerUpFlag: "🇳🇱", score: "2 x 1", venue: "Munique", fact: "Beckenbauer levantou a nova taça FIFA. Cruyff e o futebol total foram vice." },
  { year: 1978, host: "Argentina", hostFlag: "🇦🇷", champion: "Argentina", championFlag: "🇦🇷", runnerUp: "Holanda", runnerUpFlag: "🇳🇱", score: "3 x 1", venue: "Buenos Aires", fact: "Primeiro título argentino, em casa, com Kempes brilhando." },
  { year: 1982, host: "Espanha", hostFlag: "🇪🇸", champion: "Itália", championFlag: "🇮🇹", runnerUp: "Alemanha Ocidental", runnerUpFlag: "🇩🇪", score: "3 x 1", venue: "Madri", fact: "Paolo Rossi artilheiro. Tri italiano. Brasil de Zico eliminado pela Itália." },
  { year: 1986, host: "México", hostFlag: "🇲🇽", champion: "Argentina", championFlag: "🇦🇷", runnerUp: "Alemanha Ocidental", runnerUpFlag: "🇩🇪", score: "3 x 2", venue: "Cidade do México", fact: "A Copa de Maradona — \"Mão de Deus\" e o gol do século contra a Inglaterra." },
  { year: 1990, host: "Itália", hostFlag: "🇮🇹", champion: "Alemanha Ocidental", championFlag: "🇩🇪", runnerUp: "Argentina", runnerUpFlag: "🇦🇷", score: "1 x 0", venue: "Roma", fact: "Último título antes da reunificação alemã. Gol de pênalti de Brehme." },
  { year: 1994, host: "Estados Unidos", hostFlag: "🇺🇸", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Itália", runnerUpFlag: "🇮🇹", score: "0 x 0 (3x2 pên.)", venue: "Pasadena", fact: "Tetracampeonato após 24 anos. Romário e Bebeto, Baggio perdeu o pênalti decisivo." },
  { year: 1998, host: "França", hostFlag: "🇫🇷", champion: "França", championFlag: "🇫🇷", runnerUp: "Brasil", runnerUpFlag: "🇧🇷", score: "3 x 0", venue: "Saint-Denis", fact: "Primeiro título francês. Zidane decisivo. Mistério em torno de Ronaldo no jogo final." },
  { year: 2002, host: "Coreia do Sul / Japão", hostFlag: "🇰🇷", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Alemanha", runnerUpFlag: "🇩🇪", score: "2 x 0", venue: "Yokohama", fact: "Pentacampeonato. Ronaldo Fenômeno artilheiro com 8 gols." },
  { year: 2006, host: "Alemanha", hostFlag: "🇩🇪", champion: "Itália", championFlag: "🇮🇹", runnerUp: "França", runnerUpFlag: "🇫🇷", score: "1 x 1 (5x3 pên.)", venue: "Berlim", fact: "Tetra italiano. A cabeçada de Zidane em Materazzi marcou a história." },
  { year: 2010, host: "África do Sul", hostFlag: "🇿🇦", champion: "Espanha", championFlag: "🇪🇸", runnerUp: "Holanda", runnerUpFlag: "🇳🇱", score: "1 x 0", venue: "Joanesburgo", fact: "Primeira Copa na África e primeiro título espanhol. Gol de Iniesta na prorrogação." },
  { year: 2014, host: "Brasil", hostFlag: "🇧🇷", champion: "Alemanha", championFlag: "🇩🇪", runnerUp: "Argentina", runnerUpFlag: "🇦🇷", score: "1 x 0", venue: "Maracanã, Rio de Janeiro", fact: "Tetra alemão. O 7 a 1 contra o Brasil entrou para a história." },
  { year: 2018, host: "Rússia", hostFlag: "🇷🇺", champion: "França", championFlag: "🇫🇷", runnerUp: "Croácia", runnerUpFlag: "🇭🇷", score: "4 x 2", venue: "Moscou", fact: "Bi francês com geração de Mbappé, Griezmann e Pogba." },
  { year: 2022, host: "Catar", hostFlag: "🇶🇦", champion: "Argentina", championFlag: "🇦🇷", runnerUp: "França", runnerUpFlag: "🇫🇷", score: "3 x 3 (4x2 pên.)", venue: "Lusail", fact: "A consagração de Messi. A final considerada a melhor da história das Copas." },
];

export const titleCount = [
  { country: "Brasil", flag: "🇧🇷", titles: 5, years: "1958, 1962, 1970, 1994, 2002" },
  { country: "Alemanha", flag: "🇩🇪", titles: 4, years: "1954, 1974, 1990, 2014" },
  { country: "Itália", flag: "🇮🇹", titles: 4, years: "1934, 1938, 1982, 2006" },
  { country: "Argentina", flag: "🇦🇷", titles: 3, years: "1978, 1986, 2022" },
  { country: "França", flag: "🇫🇷", titles: 2, years: "1998, 2018" },
  { country: "Uruguai", flag: "🇺🇾", titles: 2, years: "1930, 1950" },
  { country: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", titles: 1, years: "1966" },
  { country: "Espanha", flag: "🇪🇸", titles: 1, years: "2010" },
];
