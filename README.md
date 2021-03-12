 <div align="center">
 <img  alt="Logo urban bistro" src="src/assets/logo.png" width=170 />
 </div>

## Índice

-   [1. Introdução](#1-introdução)
-   [2. Como utilizar](#2-como-utilizar)
-   [3. Sobre a aplicação](#3-sobre-a-aplicação)
-   [4. Histórias de usuários](#4-histórias-de-usuários)
    -   [Funcionalidades](#funcionalidades)
-   [5. Processo de criação](#5-processo-de-criação)
    -   [Organização](#organização)
    -   [Identidade visual ](#identidade-visual)
    -   [Paleta de cores](#paleta-de-cores)
    -   [Logo](#logo)
    -   [Wireframe de média fidelidade](#wireframe-de-média-fidelidade)
    -   [Wireframe de alta fidelidade](#wireframe-de-alta-fidelidade)
    -   [Testes de usabilidade](#testes-de-usabilidade)
-   [6. Desenvolvimento](#6-desenvolvimento)
-   [7. Desenvolvedora](#7-desenvolvedora)

---

## 1. Introdução

<p align="justify">
O objetivo do projeto era desenvolver uma aplicação para gerenciamento de pedidos, e sincronizar as informações de comandas entre cozinha e salão.
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
Ao receber o projeto toda a organização de tarefas e processos foram realizadas no <a href="https://trello.com/pt-BR">Trello </a>utilizando o sistema <b>kanban</b> e <b>metodologia ágil</b>. Depois de toda a organização feita, foram definidos os <b>critérios de aceitação e definição de pronto</b>, tempo de realização de cada tarefa e o que seria entregue em cada sprint. <b>Trabalhar integralmente uma história de usuário</b> antes de passar para a próxima, dessa forma ao final de cada sprint o cliente tem acesso ao que está sendo desenvolvido.
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
<a href="https://mockflow.com/">mockflow</a>.

</p>

<img src="" width=170>
<img src="" width=170>
<img src="" width=170>
<img src="" width=170>
<img src="" width=170>
<img src="" width=170>
<img src="" width=170>

#### :bulb: Wireframe de alta fidelidade

<p align="justify">
 Vários detalhes foram pensados para entregar uma aplicação que fosse intuitiva e para melhorar ainda mais a experiência na utilização, nas comandas estão etiquetas sinalizando o status dos pedidos e utilizando o farol como referência foram escolhidas as cores vermelha, laranja e verde.

Para desenvolver o wireframe de alta fidelidade foi utilizada a ferramenta
<a href="https://www.figma.com/">figma</a>.

</p></br>

![wireframe de alta fidelidade](src/assets/assets-readme/wireframe-alta-fidelidade.png)

#### :art: Identidade visual

<p align="justify">
Depois de definir o nome do restaurante que seria o cliente no qual a aplicação seria desenvolvida e algumas pesquisas no google, encontrei um restaurante com o mesmo nome que está localizado na Europa. O perfil era parecido com o que tinha em mente, e o mesmo serviu de inspiração para a paleta de cores e fonte da logo. Se tiver interesse, você pode acessar o site deles <a href="http://urbanbistro.sk/">clicando aqui!</a>
</p>

<div align="center">
<img alt='Fachada urban bistro'src="src/assets/assets-readme/real-urban-bistro.png" width=300>
</div>

#### :art: Paleta de cores

<p align="justify">
A paleta de cores foi desenvolvida utilizando o <a href="https://color.adobe.com/">Adobe Color</a>, pensando em tons mais quentes e sofisticados, que estivessem de acordo com o tema, proporcionasse harmonia visual e fosse confortável aos olhos dos usuários.
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
"Não é o ângulo reto que me atrai, nem a linha reta, dura, inflexível criada pelo homem. O que me atrai é a curva livre e sensual, a curva que encontro no curso sinuoso dos nossos rios, nas nuvens do céu, no corpo da mulher preferida. De curvas é feito todo o universo, o universo curvo de Einstein".
</i> Assim já dizia o renomado arquiteto Oscar Niemeyer.
</p>

#### :mag_right: Testes de usabilidade

## 6. Desenvolvimento

:gear: Para esse projeto foram usados:

-   HTML5
-   CSS3
-   JSX
-   ReactJS
-   ESLint

## 7. Desenvolvedora

:woman_technologist: [Caroline Costa](https://github.com/CarolineSCosta)

<p align="center">
Esse projeto foi desenvolvido no <a href="https://www.laboratoria.la/br">Bootcamp da Laboratória Brasil</a>
</p>
