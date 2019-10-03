---
id: add-channel-custom
title: Canal Customizado
---

O canal customizado permite que você possa integrar sua plataforma de comunicação com o Kinbox, onde ela seria representada por um canal de comunicação diferente dos canais padrões que o Kinbox já disponibiliza (WhatsApp, E-mail, Telegram, Facebook, etc). Com um canal customizado é possível que um usuário do seu sistema possa trocar mensagens com um operador no Kinbox via integração REST. 

>Considere que qualquer usuário logado no Kinbox é um Operador.<br>
>Considere que cada pessoa atendida por um Operador (de cada conversa) é um Cliente.

## Criando um canal customizado
Para que os seus Clientes na sua plataforma e os seus Operadores no Kinbox possam trocar mensagens, antes de tudo é necessário criar um canal customizado através da sua Dashboard no Kinbox. Para acessar a área onde você pode criar o novo canal customizado acesse: “Configurações -> Canais”, clique no botão “Novo”, clique na opção “Customizado” e preencha os campos que estiverem vazios no formulário.

- **Nome**: Nome do canal customizado para que seja possível identificá-lo dentro da sua Dashboard.
- **Endpoint para receber mensagens**: URL para a qual a sua plataforma deverá realizar requisições POST para entregar as novas mensagens dos clientes da sua plataforma para os operadores no Kinbox.
- **Endpoint para enviar mensagens**: URL para a qual o Kinbox realizará requisições POST para entregar as novas mensagens dos operadores quando se comunicarem com clientes desse canal.

Após preencher o formulário clique em “Salvar".

##  Envio e recebimento de mensagem
Caso sua empresa já disponibilize um canal de comunicação com seus clientes, como por exemplo um chat em um aplicativo mobile, é possível fazer com que as mensagens dos seus clientes que chegam ao seu sistema sejam encaminhadas para o Kinbox, onde será gerada uma conversa, caso já não exista uma para aquele cliente, permitindo que um operador possa realizar o atendimento como se a conversa viesse de um canal padrão qualquer do Kinbox (como do WhatsApp, por exemplo).

## Enviando mensagens da sua plataforma para o Kinbox
Quando novas mensagens dos seus clientes chegarem na sua plataforma você pode encaminhá-las para o Kinbox realizando uma requisição POST com payload no formato JSON para a URL definida em “**Endpoint para receber mensagens**” do canal customizado.

Parâmetros esperados:

|     Chave      |Descrição                          
|----------------|------------------------------------------------------------------------------------------------------------------------------|
|sender          |Propriedade que identifica um cliente na sua plataforma (ex.: IDUsuario, CPF, etc)                                            |
|content         |É o conteúdo em texto da mensagem enviada pelo cliente                                                                        |
|type            |É o tipo da mensagem. Veja a seguir os tipos possíveis.                                                                       |
|contactInfo: { <br> name,<br> avatar,<br> email<br>}  |JSON que contém informações adicionais sobre o Cliente. As informações enviadas pelo contactInfo serão registradas para aquele Cliente no banco de dados do Kinbox.<br> Informações que podem ser passadas pelo contactInfo:<br><br> email: E-mail do Cliente <br>name: Nome do cliente<br> avatar: Imagem do cliente                                                                |

Headers esperados:

|     Chave      |Descrição                          
|----------------|----------------------------------------------------------------------------|
|x-api-token     |[“Kinbox Token”](/docs/guides/api-key) do seu workspace)                                            |

Tipos possíveis:

O valor do “**content**” será sempre do tipo texto/string, mas o seu valor pode ter diferentes significados. Basicamente os 2 significados possíveis são: texto e url.

|     Chave      |Descrição                          
|----------------|----------------------------|
|text            |Texto simples               |
|image           |URL de uma imagem           |
|file            |URL de um arquivo qualquer  |
|video           |URL de um vídeo             |

A diferença básica entre o tipo “text” e os demais tipos é que os demais são visualmente tratados de uma forma especial dentro de uma conversa no Kinbox, por exemplo quando for um type “image” será gerado um preview da imagem, quando for do tipo “video” será gerado um preview do vídeo.

![](../../img/video_example.png)
![](../../img/image_example.png)

Caso a sua plataforma sempre passe o tipo como “text” não haverá nenhum tipo de problema, apenas não serão executados os recursos visuais descritos acima dentro da conversa
![](../../img/file_example.png)

## Recebendo mensagens dos operadores do Kinbox na sua plataforma
Quando os operadores enviam mensagens para clientes do seu canal customizado o Kinbox irá encaminhá-las para a sua plataforma através da realização de requisição POST com payload no formato JSON para a URL definida em “**Endpoint para enviar mensagens**” do canal customizado.

Parâmetros enviados:

|     Chave      |Descrição                          
|--------------|---------------------------------------------------------------------------------------------------------------------------------|
|recipient     |Propriedade que identifica um cliente na sua plataforma (ex.: IDUsuario, CPF). Deverá ser igual ao parâmetro “sender” do item 2.1|
|content       |É o conteúdo em texto da mensagem que deseja enviada pelo operador do Kinbox                                                     |
|operator: {<br> email<br> } |JSON que contém informações do operador no Kinbox que está enviando a mensagem. Atualmente a informação enviada nesse JSON é o e-mail do operador cadastrado no Kinbox. Obs.: Você pode identificar um mesmo operador na sua plataforma e no Kinbox caso o e-mail seja o mesmo nas duas plataformas.                                                                                                               |
|timestamp     |Informação randômica usada para aumentar a força da assinatura da requisição.                                                    |

Headers enviados:

|     Chave      |Descrição                          
|----------------|----------------------------------------------------------------------------|
|x-hub-signature     |Assinatura do payload da requisição)                                    |

## Validando a assinatura da requisição
A validação do da assinatura da requisição serve para verificar se realmente ele foi enviado pelo Kinbox, e é de grande importância a sua utilização para que a troca de mensagens ocorra de forma segura.

Para fazer a validação, são necessárias duas informações: 
- Valor do header x-hub-signature. Vamos chamar esse valor de "assinatura da requisição";
- Corpo da requisição (no mesmo formato mostrado na seção anterior). É o “body” completo da requisição POST.

Com esses dois valores, basta realizar o HMAC-SHA256 do corpo da requisição utilizando a sua "[**API Secret**](/docs/guides/api-key)" e comparar o resultado com a assinatura da requisição. Se os valores forem iguais, excelente. Caso contrário, não foi o Kinbox que enviou essa requisição e ela pode ser descartada.

Exemplo de validação com NodeJS:

```javascript
const hmacSHA256 = require('crypto-js/hmca-sha256')
const Base64 = require('crypto-js/enc-base-64')

const generateRequestSignature = async({ body, api_secret }) => {
    try {
        body.timestamp = typeof body.timestamp === 'string' ? parseInt(body.timestamp, 10) : body.timestamp

        if (typeof body.timestamp !== 'number') throw new Error('timestamp is required')
        if (!api_secret) throw new Error('api_secret is required')

        const rawBody = typeof body !== 'string' ? JSON.stringify(body) : body

        const hash = Base64.stringify(hmacSHA256(rawBody, api_secret))

        return hash
    } catch (error) {
        throw error
    }
}

const isValidSignature = async ({ body, headers }) => {
    try {
        const hash =  await generateRequestSignature({ body, api_secret: 'Sua_API_Secret_aqui' })

        return headers['x-hub-signature'] === hash
    } catch (error) {
        return false
    }
}

const isValid =  isValidSignature({ body, headers })

if (isValid) {
    console.log('Assinatura validada')
}
```