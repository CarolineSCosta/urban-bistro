 <div align="center">
 <img  alt="Logo urban bistro" src="src/assets/logo.png" width=170 />
 </div>

## Índice

-   [1. Introdução](#1-introdução)
-   [2. Como utilizar](#2-como-utilizar)
-   [3. Sobre a aplicação](#3-sobre-a-aplicação)
-   [4. Histórias de usuários](#4-histórias-de-usuários)
    -   [Funcionalidades](#gear-funcionalidades)
-   [5. Processo de criação](#5-processo-de-criação)
    -   [Organização](#date-organização)
    -   [Fluxograma](#bulb-fluxograma)
    -   [Wireframe de média fidelidade](#bulb-wireframe-de-média-fidelidade)
    -   [Wireframe de alta fidelidade](#bulb-wireframe-de-alta-fidelidade)
    -   [Identidade visual ](#art-identidade-visual)
    -   [Paleta de cores](#art-paleta-de-cores)
    -   [Logo](#art-logo)
    -   [Testes de usabilidade](#mag_right-testes-de-usabilidade)
-   [6. Desenvolvimento](#6-desenvolvimento)
-   [7. Desenvolvedora](#7-desenvolvedora)

---

## 1. Introdução

<p align="justify">
O objetivo do projeto era desenvolver uma aplicação <i>SPA</i>(Single-Page Application) para gerenciamento de pedidos, e sincronizar as informações de comandas entre cozinha e salão. Foi desenhada e desenvolvida pensando na usabilidade em tablet.
</p>

<p align="center">
 <img src="https://media.tenor.com/images/0c9e10f9c9a80515b78023e5719415a5/tenor.gif" width=300 frameBorder="0"></img>
</p>

## 2. Como utilizar

✨ Acessar a aplicação [urban bistro](https://urban-bistro.vercel.app/) ✨

É possível acessar a aplicação com **usuário de teste**:

-   Acesso **salão**:

    -   **Email**: salao@urbanbistro.com
    -   **Senha**: teste12345

-   Acesso **cozinha**:

    -   **Email**: cozinha@urbanbistro.com
    -   **Senha**: teste12345

    ![Gif da aplicação urban bistro](src/assets/assets-readme/urban-bistro.gif)

## 3. Sobre a aplicação

<p align="justify">
O restaurante 24 horas <b>urban bistro</b> está crescendo e precisa de uma aplicação que a interface permita os atendentes realizar pedidos utilizando um tablet e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente. E que permita que os cozinheiros vejam os pedidos dos clientes, marcar e notificar os atendentes que o pedido está pronto para ser entregue.
</p>

## 4. Histórias de usuários

O cliente informou quais eram as histórias de usuário:

-   **HU 01**

    :writing_hand: "Eu como **funcionário** do restaurante quero entrar na plataforma e ver apenas a tela importante para o meu trabalho".

-   **HU 02**

    :writing_hand: "Eu como **atendente** quero anotar pedidos, saber o valor de cada produto e enviar o pedido para a cozinha para ser preparado".

-   **HU 03**

    :writing_hand: "Eu como **chefe de cozinha** quero ver os pedidos dos clientes, marcar e notificar os atendentes que o pedido está pronto para ser entregue".

-   **HU 04**

    :writing_hand: "Eu como **atendente** quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes".

#### :gear: Funcionalidades

De acordo com as necessidades dos usuários, foram definidas quais funcionalidades deveriam ser implementadas:

-   **HU 01**

    :white_check_mark: Criar login e senha.

    :white_check_mark: Registar tipo de usuário (cozinha / salão), login e senha.

    :white_check_mark: Entrar na tela correta para cada usuário.

-   **HU 02**

    :white_check_mark: Anotar o nome e mesa.

    :white_check_mark: Adicionar produtos aos pedidos.

    :white_check_mark: Excluir produtos.

    :white_check_mark: Ver resumo e o total da compra.

    :white_check_mark: Enviar o pedido para a cozinha.

-   **HU 03**

    :white_check_mark: Ver os pedidos à medida em que são feitos.

    :white_check_mark: Marcar os pedidos que foram preparados e estão prontos para serem servidos.

    :white_check_mark: Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

-   **HU 04**

    :white_check_mark: Ver a lista de pedidos prontos para servir.

    :white_check_mark: Marque os pedidos que foram entregues.

:exclamation: Ao encerrar o dia as comandas que foram sinalizadas como "entregue" não são exibidas na tela do atendente, porém os dados ficam armazenados para que o restaurante possa levantar estatísticas no futuro.

## 5. Processo de criação

#### :date: Organização

<p align="justify">
Ao receber o projeto toda a organização de tarefas e processos foram realizadas no <a href="https://trello.com/pt-BR" target="_blank">Trello </a>utilizando o sistema <b>kanban</b> e <b>metodologia ágil</b>. Depois de toda a organização feita, foram definidos os <b>critérios de aceitação e definição de pronto</b>, tempo de realização de cada tarefa e o que seria entregue em cada sprint. <b>Trabalhar integralmente uma história de usuário</b> antes de passar para a próxima, dessa forma ao final de cada sprint o cliente tem acesso ao que está sendo desenvolvido.
</p>

![print do trello](src/assets/assets-readme/trello.png)

#### :bulb: Fluxograma

<p align="justify">
Ao entender bem a necessidade do cliente, desenvolvi também fluxogramas para entender qual seria o fluxo do usuário dentro da plataforma.
</p>

Abaixo o fluxograma da tela de cadastro e acesso:

<div align="center">
  <img alt= "fluxograma cadastro e acesso" src="src/assets/assets-readme/fluxograma-login-signup.png" width=400>
</div>

#### :bulb: Wireframe de média fidelidade

<p align="justify">
Com base nesses dados levantados foi possível desenvolver wireframe de média fidelidade de todas as telas da aplicação tomando cuidado para que fosse uma plataforma tivesse uma experiência de usuário clara e objetiva.

Para desenvolver o wireframe de média fidelidade foi utilizada a ferramenta
<a href="https://mockflow.com/" target="_blank">Mockflow</a>.

</p>

<div align="center">
  <img alt="wireframe login" src="src/assets/assets-readme/login.png"   width=450></br>
  <img alt="wireframe cadastro" src="src/assets/assets-readme/cadastro.png"   width=450></br>
  <img alt="wireframe novo pedido" src="src/assets/assets-readme/novo-pedido.png" width=450></br>
  <img alt="wireframe menu" src="src/assets/assets-readme/pedido-menu.png"  width=450></br>
  <img alt="wireframe modal" src="src/assets/assets-readme/pedido-menu-modal.png" width=450></br>
  <img alt="wireframe comanda salão" src="src/assets/assets-readme/pedido-status-salao.png" width=450></br>
  <img alt="wireframe comanda cozinha" src="src/assets/assets-readme/pedido-status-cozinha.png" width=450></br>
</div>

#### :bulb: Wireframe de alta fidelidade

<p align="justify">
 Vários detalhes foram pensados para entregar uma aplicação que fosse intuitiva e para melhorar ainda mais a experiência na utilização, nas comandas estão etiquetas sinalizando o status dos pedidos e utilizando o farol como referência foram escolhidas as cores vermelha, laranja e verde.

Para desenvolver o wireframe de alta fidelidade foi utilizada a ferramenta
<a href="https://www.figma.com/" target="_blank">Figma</a>.

</p></br>

![wireframe de alta fidelidade](src/assets/assets-readme/wireframe-alta-fidelidade.png)

#### :art: Identidade visual

<p align="justify">
Depois de definir o nome do restaurante que seria o cliente no qual a aplicação seria desenvolvida e algumas pesquisas no google, encontrei um restaurante com o mesmo nome que está localizado na Europa. O perfil era parecido com o que tinha em mente, e o mesmo serviu de inspiração para a paleta de cores e fonte da logo. Se tiver interesse, você pode acessar o site deles <a href="http://urbanbistro.sk/" target="_blank">clicando aqui!</a>
</p>

<div align="center">
  <img alt='Fachada urban bistro'src="src/assets/assets-readme/real-urban-bistro.png" width=300>
</div>

#### :art: Paleta de cores

<p align="justify">
A paleta de cores foi desenvolvida utilizando o <a href="https://color.adobe.com/" target="_blank">Adobe Color</a>, pensando em tons mais quentes e sofisticados, que estivessem de acordo com o tema, proporcionasse harmonia visual e fosse confortável aos olhos dos usuários.
</p>

![paleta de cores](src/assets/assets-readme/paleta-de-cores.png)

#### :art: Logo

<p align="justify">
Para a logo foi pensada para que estivesse de acordo com o tema e que fosse capaz de representar a marca. As formas arredondadas acrescentam movimento ao design.
</p>

<div align="center">
 <img  alt="Logo urban bistro" src="src/assets/logo.png" width=170 />
</div></br>

<p align="justify">
  <i>
  "Não é o ângulo reto que me atrai, nem a linha reta, dura, inflexível   criada pelo homem. O que me atrai é a curva livre e sensual, a curva que  encontro no curso sinuoso dos nossos rios, nas nuvens do céu, no corpo da  mulher preferida. De curvas é feito todo o universo, o universo curvo de   Einstein".
  </i> Assim já dizia o renomado arquiteto Oscar Niemeyer.
</p>

#### :mag_right: Testes de usabilidade

Foram realizados testes com algumas das pessoas que se dispuseram testar a usabilidade durante o processo de desenvolvimento. Com isso foi possível levantar dados que ajudaram a melhorar a aplicação:

⚠️ Os usuários apontaram que não sentiam necessidade do ícone :heavy_plus_sign: no card dos produtos que fazem parte do menu pois já estava claro que ao clicar os itens seriam adicionados na comanda.

✔️ Como solução o ícone foi removido e o card ficou melhor e mais agradável visualmente.

⚠️ Os usuários não estavam satisfeitos com a paleta de cores que estava sendo utilizada inicialmente e apontaram que as cores escuras estavam afetando a utilização

✔️ Foi desenvolvida uma nova paleta de cores tomando cuidado para que não fosse escura e não sobrecarregasse o olhar do usuário.

![paleta de cores antiga](src/assets/assets-readme/paleta-antiga.png)

## 6. Desenvolvimento

:gear: Para esse projeto foram usados:

-   HTML5
-   CSS3
-   JavaScript(ES6+)
-   JSX
-   ReactJS
-   Vercel

## 7. Desenvolvedora

:mailbox: Entre em contado com a desenvolvedora **Caroline Costa**:

:pushpin: [GitHub](https://github.com/CarolineSCosta)

:pushpin: [LinkedIn](https://www.linkedin.com/in/carolinescosta/)

<p align="center">
 <img src="https://camo.githubusercontent.com/6f5e3ead776bc722fbfc3da2c8b1454a7a5f27a07b34c0ced075f90a6c25a3be/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313630302f302a4b32574c4d5445784c79696461374f522e676966" width=350 frameBorder="0"></img>
</p>

<p align="center">
Esse projeto foi desenvolvido no <a href="https://www.laboratoria.la/br" target="_blank">Bootcamp da Laboratória Brasil</a>
</p>
