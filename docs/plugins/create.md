---
id: plugin-create
title: Criando Plugins
---

## Cadastrar novo
Para criar um novo plugin, vá para > Configurações > Plugins e clique em "Novo" ou "Adicionar Plugin":

![](https://i.imgur.com/QtSIcTO.png)

No campo **Endpoint** você deve apontar para o html do seu plugin, que deve ser hospedado em seu próprio servidor ou como no exemplo, no github.

> Seu plugin deve ser hospedado em um domínio HTTPS. Você pode usar [https://ngrok.com/](https://ngrok.com/) se você quiser rapidamente montar um servidor de desenvolvimento local em HTTPS.

Nós provemos um pequeno plugin de exemplo que mostra algumas coisas básicas que você pode fazer usando nossa API de JavaScript. Você pode conferir o código em [https://github.com/andrody/kinbox-plugin-demo](https://github.com/andrody/kinbox-plugin-demo). Se você quiser testar diretamente, você pode setar a URL do plugin para ser `https://andrody.github.io/kinbox-plugin-demo/plugin.html` para ver o que um plugin básico pode fazer.

## Segurança
Para evitar comprometer seus dados. Toda vez que o SDK do plugin é carregado, Kinbox irá checar se a URL atual do plugin confere com o salvo nas configurações. Caso negativo, nenhum dado será enviado. É por isso que recomendamos que faça seu plugin como "single page applications"

> Se seu plugin redireciona para uma URL não registrada, Kinbox irá parar de enviar dados.

## Autenticação
No seu lado, pode ser do seu interesse garantir que seu plugin foi de fato requisitado pelo Kinbox, principalmente se ele mostra informações confidenciais.

O Kinbox fornece um modo simples de verificar que seu plugin foi requisitado pelo Kinbox. Nas configurações do seu plugin você irá ver um "secret" de autenticação. Esse secret vai ser passado como um parâmetro de query com o nome de `auth_secret` quando requisitar seu plugin.

## Recebendo eventos do Kinbox
Toda vez que a conversa atual muda (por exemplo, quando você clica em uma nova conversa na lista), um evento é enviado para nossa biblioteca.

O objeto de dados enviado para os callbacks do evento contém 4 campos:

 - `contact` O contato da conversa
 - `conversation` O objeto da conversa
 - `user` O Agente que está atendendo a conversa

Os eventos são:
```
Kinbox.on('conversation', function (data) {
    // chamado quando uma conversa é carregada
});

Kinbox.on('no_conversation', function () {
    // chamado quando nenhuma uma conversa é selecionada
});

```

O objeto `contact` se parece com: 

    {
    	"id":  "25",
    	"properties:  [],
    	"name":  "Fulano",
    	"avatar":  null,
    	"email":  "fulano@email.com"
    	"phone":  "5585997282828
    }

O objeto `conversation` se parece com: 

    {
    	"id":  "955",
    	"identifier":  null,
    	"assignee": { id:  "850" },
    	"group": { id:  "475" },
    	"channel_type": "45",
    	"link":  "https://www.kinbox.com.br/inbox/all/174",
    	"tags": null
    }

## Controlando o Kinbox
A biblioteca javascript expõe varias funções de ajuda para enviar comandos ao app. 
[Em breve]
