# VanDog - FATEC
O projeto é um trabalho desenvolvido para Fatec, tecnologo de Desenvolvimento de Jogos Digitais. O intuito era utilizar as tecnologias HTML, CSS e Javascript. Porem, por estar estudando há algum tempo com a Rocketseat, resolvi ir um pouco além e reunir todos os conceitos de Front-End aprendidos até o momento e desenvolver o site utilzando React com Typescript.

## O Projeto
O projeto é algo simples, e é apenas uma camada de front conversando com uma API fake(json server), a ideia era construir uma especie de e-commerce com produtos de pets. O layout não é la aquelas coisas, porem, o foco foi nas funcionalidades. É possivel realizar pesquisas, procurar por categorias, adicionar aos favoritos, adicionar ao carrinho, loading, paginação, passagem de parametros atravez de url, e várias outras coisas.

## Tecnologias
A ferramenta que mais quero citar aqui é o Context do React, é simplesmente extraordinario a simplicidade que se tem em frente a arquitetura Flux(Redux), não há necessidade de todos aqueles conceitos mirabolantes, e as coisas ficam muito mais claras.
Notei que não foi preciso utilizar o history para histórico de navegação, o próprio React Router Dom deu conta do recado, os hooks implementados por eles tambem foi muito util, porem a cada pagina navegavel, o usuario não é levada ao topo da pagina, ficando perdido pela página. Há um tutorial disponivel na pagina deles para criar um componente que leva ao topo da pagina, porem não funcionou, se voce tiver uma solução, por favor, entre em contato comigo.
Typescript é algo de outro mundo kkk, estou aos poucos entendendo como funciona e é muito interessante.

## Instalação

Após fazer o download do repositório e descompactar em uma pasta, abra dois terminais no diretório escolhido, em um deles execute o seguinte comando:

```sh
$ yarn
$ yarn start
```

OBS: para executar os passos acima, certifique de ter instalado em seu computador o node e o yarn. Se caso aparecer o seguinte erro:

> yarn : O arquivo C:\Users\Jonatas\AppData\Roaming\npm\yarn.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em 
https://go.microsoft.com/fwlink/?LinkID=135170.

Execute o seguinte comando no prompt de comando como Administrador:

```sh
$  Set-ExecutionPolicy Unrestricted
```
Reinicie o terminal e execute o yarn novamente.

O comando acima vai instalar as dependencias do projeto e, após um tempo, abrir o projeto no navegador. No segundo terminal, basta executar o seguinte comando:

```sh
$ npm install -g json-server
$ json-server --watch server.json -p 3333
```

Pronto, já pode testar o app, o comando acima instala o json server e executa ele na porta 3333.

## Prints

<p align="center">
  <img src="/assets/print1.png" alt="home" title="home"  width="70%">
  <img src="/assets/print2.png" alt="produto" title="produto"  width="70%">
  <img src="/assets/print3.png" alt="carrinho" title="carrinho"  width="70%">
  <img src="/assets/print4.png" alt="categoria" title="categoria"  width="70%">
  <img src="/assets/print5.png" alt="pesquisa" title="pesquisa"  width="70%">
</p>
