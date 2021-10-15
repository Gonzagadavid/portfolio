const trybeProjects = {
  titleCourse: 'Projetos Trybe',
  projects: [
    {
      title: 'MongoDB Commerce',
      tec: 'mongo',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática utilizar o método updateOne, updateMany e os operadores $set, $mul, $inc, $min, $max , $currentDat, $expr, $mod, operadores para arrays como $addToSet, $each, $slice, $sort, $all, $elemMatch e $size, e para textos como $regex e $text',
      path: 'https://github.com/Gonzagadavid/mongodb-commerce',
    },
    {
      title: 'MongoDB Data Flights',
      tec: 'mongo',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática buscar, filtrar, inserir e deletar dados de um banco no MongoDB',
      path: 'https://github.com/Gonzagadavid/mongodb-dataflights',
    },
    {
      title: 'MySQL One For All',
      tec: 'mysql',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática modelar um banco de dados, identificar entidades , atributos e relacionamentos, aplicar a 1ª, 2ª e 3ª Forma Normal, criar e alterar tabelas, criar VIEWS e TRIGGERS',
      path: 'https://github.com/Gonzagadavid/mysql-one-for-all',
    },
    {
      title: 'MySQL Vocabulary Booster',
      tec: 'mysql',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática criar condicionais usando IF e CASE, manipular strings, utilizar as funções de agregação AVG, MIN, MAX, SUM e COUNT, utilizar GROUP BY e HAVING, INNER JOIN, LEFT JOIN, RIGHT JOIN, SELF JOIN e subqueries, montar STORED PROCEDURES e STORED FUNCTIONS',
      path: 'https://github.com/Gonzagadavid/mysql-vocabulary-booster',
    },
    {
      title: 'MySQL All For One',
      tec: 'mysql',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática enteder banco de dados, criar querys para consultas, inserir atualizar e deletar dados',
      path: 'https://github.com/Gonzagadavid/mysql-all-for-one',
    },
    {
      title: 'Recipes App',
      tec: 'react reactRouter redux testingLibrary css',
      description: 'Projeto de avaliação feito em equipe durante o curso da Trybe, buscando colocar em prática trabalhar em equipe utilizado métodos agéis. Criar store, reducers, actions e dispatchers no Redux em aplicações React, também conectar o Redux aos componentes utilizando actions assincronas e desenvolvimento de testes',
      path: 'https://github.com/Gonzagadavid/project-recipes-app',
    },
    {
      title: 'Starwars Planets Search',
      tec: 'react',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática utilizar Context API do React para gerenciar os estado, utilizar os hooks: useState, useContex, useEffect e também criar hooks customizados',
      path: 'https://github.com/Gonzagadavid/starwars-planets-search',
    },
    {
      title: 'Trivia Game',
      tec: 'react reactRouter redux css',
      description: 'Projeto de avaliação feito em equipe durante o curso da Trybe, buscando colocar em prática trabalhar em equipe utilizado métodos agéis. Criar store, reducers, actions e dispatchers no Redux em aplicações React, também conectar o Redux aos componentes utilizando actions assincronas',
      path: 'https://github.com/Gonzagadavid/trivia-game',
    },
    {
      title: 'Project Trybe Wallet',
      tec: 'react reactRouter redux',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática criar store, reducers, actions e dispatchers no Redux em aplicações React, também conectar o Redux aos componentes utilizando actions assincronas',
      path: 'https://github.com/Gonzagadavid/project-trybewallet',
    },
    {
      title: 'React Testing Library',
      tec: 'react reactRouter testingLibrary',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática utilizar os seletores, simular eventos e Testar fluxos lógicos assíncronos com a React-Testing-Library. Criar mocks de APIs utilizando fetch e testar inputs',
      path: 'https://github.com/Gonzagadavid/react-testing-library',
    },
    {
      title: 'Online Store',
      tec: 'react reactRouter',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática trabalho em equipe, utilizando métodos ágeis: Scrum e Kanban.',
      path: 'https://github.com/Gonzagadavid/online-store',
    },
    {
      title: 'Movie Card Library CRUD',
      tec: 'react reactRouter',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática a utilização dos metodos componentDidMount, shouldComponentUpdate, componentDidUpdate e componentWillUnmount, também utilizar props.children e desenvolver rotas com react-router-dom.',
      path: 'https://github.com/Gonzagadavid/movie-card-library-crud',
    },
    {
      title: 'Movie Card Library Stateful',
      tec: 'react',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o desenvolvimento de componentes controlado, iniciar um componente com estado inicial pré-definido e trasmitir informções do componente pai para o componente filho.',
      path: 'https://github.com/Gonzagadavid/movie-cards-library-stateful',
    },
    {
      title: 'Movie Card Library',
      tec: 'react',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática a preparação do ambiente de desenvolvimento ReactJS, criar corretamente componentes e utilizar propTypes.',
      path: 'https://github.com/Gonzagadavid/movie-cards-library',
    },
    {
      title: 'Project Jest',
      tec: 'js jest',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática escrever testes para funções assíncronas, aplicar os seus conhecimentos acerca de testes utilizando o Jest, "Mockar" funções, "Mockar" APIs.',
      path: 'https://github.com/Gonzagadavid/project-jest',
    },
    {
      title: 'Shopping Cart',
      tec: 'js html css',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado sobre requisições de API (utilizando a API do mercado livre), também utilizar o LocalStoreage para armazenar itens do carrinho de compra, para que assim os mesmo possam ser renderizado na tela novamente depois que o browser for fechado.',
      path: 'https://github.com/Gonzagadavid/shopping-cart',
    },
    {
      title: 'Zoo Functions',
      tec: 'js',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de escrever código legível, conciso e expressivo utilizando as novas funcionalidades do ES6, higher order functions e interpretação de testes unitarios.',
      path: 'https://github.com/Gonzagadavid/zoo-functions',
    },
    {
      title: 'Js Unite Tests',
      tec: 'js node',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de escrever testes e funções utilizando uma abordagem de desenvolvimento orientado a testes.',
      path: 'https://github.com/Gonzagadavid/js-unit-tests',
    },
    {
      title: 'Trybewarts Projec',
      tec: 'js html css',
      description: 'Projeto em dupla de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos de formulário, também desenvolver habilidades de trabalhar em equipe resolvendo conflitos no github.',
      path: 'https://github.com/Gonzagadavid/trybe-trybewarts-project',
    },
    {
      title: 'Color Guess',
      tec: 'js html css',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript. O recorde fica salvo no localStorage, uma tentativa por sequência de cor e pode diminuir e aumentar a dificuldade.',
      path: 'https://github.com/Gonzagadavid/color-guess',
    },
    {
      title: 'To Do List',
      tec: 'js html css',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript , também utilizar o LocalStoreage para armazenar dados, para que assim os mesmo possam ser renderizado na tela novamente depois que o browser for fechado.',
      path: 'https://github.com/Gonzagadavid/lista-de-tarefas',
    },
    {
      title: 'Meme Generator',
      tec: 'js html css',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript , e utilizar métodos do FileReader para renderizar uma imagem do computador do usuário na tela.',
      path: 'https://github.com/Gonzagadavid/meme-generator',
    },
    {
      title: 'Art Pixels',
      tec: 'js html css',
      description: 'Projeto de avaliação proposto durante o curso da trybe, após ser abordado conteúdos JavaScript sobre manipulação e criação de elementos do DOM.',
      path: 'https://github.com/Gonzagadavid/art-pixels',
    },
    {
      title: 'Letter Mistery',
      tec: 'js html css',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript.',
      path: 'https://github.com/Gonzagadavid/letter-mistery',
    },
    {
      title: 'Playground Functions',
      tec: 'js',
      description: 'Projeto de avaliação feito durante o curso da Trybe, buscando desenvolver funções conforme os requisitos',
      path: 'https://github.com/Gonzagadavid/trybe-playground-functions',
    },
    {
      title: 'Lessons Learned',
      tec: 'html css',
      description: 'Primeiro projeto de avaliação da trybe após os fundamentos de html e css.',
      path: 'https://github.com/Gonzagadavid/Lessons-Learned',
    },
    {
      title: 'Portfólio',
      tec: 'html css',
      description: 'Página de portfólio com html e css, obedecendo os requisitos proposto.',
      path: 'https://github.com/Gonzagadavid/Gonzagadavid.github.io',
    },
  ],
};

export default trybeProjects;
