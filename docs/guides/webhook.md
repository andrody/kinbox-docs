---
id: webhook
title: Webhook
---

## O que é um Webhook?
É uma forma de recebimento de informações quando um evento acontece. Por isso, o webhook na prática, é a forma de receber informações entre dois sistemas de uma forma passiva.

O webhook (também conhecido como retorno de chamada web ou HTTP e, ainda, impulso API) é uma maneira prática para um app ou sistema fornecer a outras aplicações informações em tempo real. O webhook fornece dados para outros aplicativos. Eles são muito eficientes tanto para o prestador de serviço, como para o consumidor.

## Criando um Webhook
- Vá em Configurações -> Webhook
- Preencha com seu **EndPonit**
- Inscreva-se nos eventos que deseja
- Deixe um e-mail para o caso de falhas no envio das mensagens pelo endpoint

## Eventos
Ao configurar um **Endpoint** você pode se inscrever em eventos de:
- Novas mensagens
- Mudança de status em chats (Atribuído, Resolvido, Reaberto) 
- Atualização de usuário (Criação e atualização)

>Caso nossa tentativa de envio falhe eviaremos um e-mail com a descrição da falha e o log da mesma