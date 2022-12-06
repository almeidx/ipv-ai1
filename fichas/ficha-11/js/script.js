const news = [
  // https://www.abola.pt/nnh/2022-12-06/portugal-a-mensagem-de-ronaldo-a-poucas-horas-do-jogo-com-a-suica/967457
  [
    "A mensagem de Ronaldo a poucas horas do jogo com a Suíça",
    "A poucas horas de Portugal entrar em campo para defrontar a Suíça (19 horas), em jogo dos quartos de final do Mundial, Cristiano Ronaldo, que tem estado no olho do furação pela reação à substituição frente à Coreia do Sul, da qual Fernando Santos não gostou «mesmo nada», fez uma publicação nas redes sociais, sem tocar na polémica.",
    "«Hoje é por Portugal! Pelos portugueses! Por nós e pelos nossos! Hoje é por todos os sonhos que carregamos em cada um de nós! Vamos com tudo!», escreveu.",
  ],
  [
    "A mensagem de Ronaldo a poucas horas do jogo com a Suíça",
    "A poucas horas de Portugal entrar em campo para defrontar a Suíça (19 horas), em jogo dos quartos de final do Mundial, Cristiano Ronaldo, que tem estado no olho do furação pela reação à substituição frente à Coreia do Sul, da qual Fernando Santos não gostou «mesmo nada», fez uma publicação nas redes sociais, sem tocar na polémica.",
    "«Hoje é por Portugal! Pelos portugueses! Por nós e pelos nossos! Hoje é por todos os sonhos que carregamos em cada um de nós! Vamos com tudo!», escreveu.",
  ],
  [
    "A mensagem de Ronaldo a poucas horas do jogo com a Suíça",
    "A poucas horas de Portugal entrar em campo para defrontar a Suíça (19 horas), em jogo dos quartos de final do Mundial, Cristiano Ronaldo, que tem estado no olho do furação pela reação à substituição frente à Coreia do Sul, da qual Fernando Santos não gostou «mesmo nada», fez uma publicação nas redes sociais, sem tocar na polémica.",
    "«Hoje é por Portugal! Pelos portugueses! Por nós e pelos nossos! Hoje é por todos os sonhos que carregamos em cada um de nós! Vamos com tudo!», escreveu.",
  ],
];

class NewInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "article",
      null,
      React.createElement("h1", null, this.props.title),
      React.createElement("p", null, this.props.lead),
      React.createElement("p", null, this.props.text)
    );
  }
}

ReactDOM.render(
  React.createElement(
    "main",
    null,
    news.map(([title, lead, text]) =>
      React.createElement(NewInfo, { title, lead, text })
    )
  ),
  document.body
);
