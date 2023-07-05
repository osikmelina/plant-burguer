# Plant & Burguer

<div align="center"><img src="public/imagens/logo.png" alt="logo plant and burguer" width="200px";></div>

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Histórias de usuário](#2-histórias-de-usuário)
* [3. Detalhamento do projeto](#3-detalhamento-do-projeto)
* [4. Ferramentas utilizadas](#4-ferramentas-utilizadas)
* [5. Desenvolvedoras](#5-desenvolvedoras)


 ## 1. Resumo do projeto

Neste projeto foi desenvolvido uma interface para uma hamburgueria contendo diferentes telas destinadas ao atendimento, cozinha e administração. A aplicação foi desenvolvida utilizando o REACT e com consumo de uma API.


## 2. Histórias de usuário

#### [Historia de usuario 1] Garçom/Garçonete deve poder entrar no sistema, caso o admin já lhe tenha dado as credenciais
#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente
#### [História de usuário 3] Chefe de cozinha deve ver os pedidos
#### [Historia de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir
#### [Historia de usuário 5] Administrador(a) de loja deve administrar seus funcionários
#### [História de usuário 6] Administrador(a) de loja deve administrar os produtos


## 3. Detalhamento do projeto 
A aplicação contêm três tipos de rotas, uma para o atendimento, outra para a cozinha e outra para o administrador.

Para entrar e acessar qualquer uma das rotas clique em https://plant-burguer.vercel.app, e faça login com as credenciais abaixo:

| USUÁRIO                      |SENHA|
|------------------------------|:----:|
| atendimento@plantburguer.com | 123456 |
| cozinha@plantburguer.com     | 123456 |
| admin@plantburguer.com       | 123456 |


### Atendimento


Na rota do atendimento, o garçom/garçonete pode realizar um novo pedido e também acessar os pedidos que já estão prontos para serem servidos.
Ao acessar a rota "Novo Pedido" o atendente insere o nome do cliente e, em seguida, é redirecionado para o menu do cardápio. Ao selecionar os itens desejados no menu, eles são automaticamente adicionados ao resumo do pedido.
Após finalizar o pedido e ao clicar em "Enviar", os pedidos são imediatamente encaminhados à cozinha.

Na rota "Pedidos para servir" o atendente tem acesso aos pedidos que vem da cozinha e que já estão prontos para serem servidos, após serem entregues os pedidos podem ser marcados como finalizados, e podem ser visualizados na rota "Pedidos Entregues". 


### Cozinha
Na rota da cozinha, o cozinheiro/cozinheira recebe os pedidos que vem do atendimento. Após terminar o pedido e ao clicar em "Pronto" o pedido é enviado para a rota "Pedidos para servir" no atendimento. Além disso, na aba "Finalizados" o cozinheiro/cozinheira vai poder visualizar os pedidos que foram finalizados e quanto tempo levou o preparo.


### Administrador 
Nessa rota, é possível visualizar, cadastrar, editar e excluir produtos e funcionários.


## 4. Ferramentas utilizadas

<div align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" height="30px";/>
</div>   


## 5. Desenvolvedoras

Giselle Schwab Silva  [![Linkedin](https://i.stack.imgur.com/gVE0j.png)Linkedin](https://www.linkedin.com/in/giselle-schwab-silva-58930610a/)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png)GitHub](https://github.com/giselleschwab)

Melina Osik  [![Linkedin](https://i.stack.imgur.com/gVE0j.png)Linkedin](https://www.linkedin.com/in/melina-osik/)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png)GitHub](https://github.com/osikmelina)

Talita Martins  [![Linkedin](https://i.stack.imgur.com/gVE0j.png)Linkedin](https://www.linkedin.com/in/talitamsx/)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png)GitHub](https://github.com/talitamsx)

