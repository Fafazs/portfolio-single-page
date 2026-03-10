export type ProjectMetadata = {
  name?: string
  image?: string
  description?: string
}

export const projectsMetadata: Record<string, ProjectMetadata> = {
   1042121299: {
    name: 'Portfolio2025.2',
    image: "",
    description: "Primeira versão do meu portfólio, desenvolvido com javascript, HTML e CSS puros."
  },

  1086750837: {
    name: 'entregavel4ADS',
    image: "",
    description: "Aplicação educacional que reúne algoritmos desenvolvidos em JavaScript e Java, executados em um backend Node.js. O projeto inclui uma interface web em HTML, CSS e JavaScript para interação com os algoritmos e testes automatizados com Jest para garantir a corretude das implementações."
  },
   1072254578: {
    name: 'projetoVortex',
    image: "",
    description: "Sistema de autenticação e recomendação de usuários desenvolvido como desafio técnico para uma vaga. A aplicação implementa cadastro e login de usuários com criptografia de credenciais, autenticação baseada em JWT, persistência de sessão utilizando localStorage e armazenamento de dados no Amazon DynamoDB. O sistema também inclui um mecanismo de ranking por recomendações, onde cada usuário possui um link único que pode ser compartilhado com outros usuários para gerar indicações e pontuação no ranking. A interface foi construída com HTML, CSS e JavaScript, consumindo as rotas do backend responsável pela lógica de autenticação, gerenciamento de usuários e integração com o banco de dados na AWS."
  },
   978627632: {
    name: 'GodotGame2D',
    image: "",
    description: "Jogo 2D de plataforma desenvolvido como projeto de avaliação utilizando a engine Godot, com o objetivo de aprimorar habilidades em desenvolvimento de jogos. No jogo, o jogador deve explorar as fases coletando moedas, derrotando inimigos ao pular sobre eles e encontrar chaves necessárias para desbloquear novas áreas e avançar pelos níveis até concluir o game.ame que fiz como projeto de avaliação pensando melhorar minhas habilidades de desenvolvimento de jogos, utilizando a engine Godot, é um game 2D de plataforma, onde o jogador deve coletar moedas e pisar em inimigos pelo seu caminho, sempre buscando chaves para passar de fases e finalizar o game!"
  },
   987970992: {
    name: 'Beecrowd',
    image: "",
    description: "Repositório com soluções para desafios de programação da plataforma Beecrowd, desenvolvido para praticar lógica, estruturas de dados e resolução de problemas utilizando diferentes linguagens e técnicas de programação. Mas atualmente focado principalmente em Javascript e Java."
  },
   990247434: {
    name: 'ProjetoEstacionamento',
    image: "",
    description: "Sistema de gerenciamento de estacionamento desenvolvido como projeto de avaliação, utilizando HTML, CSS e JavaScript. A aplicação permite registrar a entrada e saída de veículos, identificar a origem da placa por estado, calcular automaticamente o tempo de permanência e o valor a pagar conforme o período estacionado. O sistema também mantém um histórico de saídas de veículos e utiliza localStorage para persistência dos dados no navegador, além de apresentar uma interface visual das vagas do estacionamento, com identificação dos veículos e autenticação de saída por meio de tickets únicos."
  },
}