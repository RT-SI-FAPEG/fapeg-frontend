# Observatório FAPEG - Frontend

## Sobre o projeto

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 14.0.3, e angular na versão 14.0.0

## Como executar este projeto

* Instalar as dependências com `npm i / npm install` ou `yarn / yarn install`

* Scripts da aplicação:
    - `npm run dev` ou `yarn dev` para executar o projeto em ambiente de testes, navagando até a url `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.
    - `npm run build` ou `yarn build` para executar o build da aplicação;
    - `npm run start` ou `yarn start` para executar a aplicação em ambiente de produção;
    - `npm run test` ou `yarn test` para executar os testes da aplicação;


## Sobre a arquitetura do projeto

A arquitetura do projeto é bem simples, utilizando uma estruturação de pastas ocorre dentro da pasta src de forma básica:
 - `components`: Contém os componentes utilizados pela aplicação.
 - `layouts`: Contém os layouts utilizados pela aplicação(contém o main latoyout da aplicação)
 - `models`: Contém os modelos/entidades que são utilizados/compartilhados pela aplicação.
 - `pages`: Contém as páginas da aplicação.
 - `services`: Contém os services da aplicação, que em suma vão comunicar com a api ou com algum serviço externo caso necessário.

## Arquivo `environments`

A pasta 'environments' que fica dentro de 'src' contém as variáveis de ambiente necessárias para rodar a aplicação, tanto em ambiente de teste como também em produção.
