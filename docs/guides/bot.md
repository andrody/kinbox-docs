---
id: bot
title: Bot
---

Deixe seu bot ter o primeiro contato e coletar informações dos seus usuários, ajudando sua equipe a focar em conversas que realmente precisam de sua atenção. Um bot pode automatizar o atendimento de todos os seus canais customizados, incluindo o seu [Canal Customizado](/docs/guides/add-channel-custom).

A maior vantagem do bot é sua resposta instântanea, como ele seu cliente é atendido na hora aumentado o bem estar no processo de atendimento, alé disso o bot pode coletar informações do seu cliente como **CPF**, **Nome**, **Idade** ou **o que você quiser**, isso aumenta a produtividade dos agentes adiantando esse passo no atendimento, também é possível dentro do fluxo do bot fazer com que ele encaminhe mensagens a agentes especializados no atendimento de um determinado cliente, tudo isso por meio de menus de escolha.
<!-- ![](../../img/plugin/add-plugin.PNG) -->

Bots podem ser ativados dependendo de condições, como se é um contato novo ou já existente.

## Criando um bot

- Clique em Configurações -> Bot -> Novo (Canto superior esquerdo)

### Criando um Caminho
Um caminho representa um fluxo de atendimento, nele você vai adicionar as ações e direções que esse caminho pode levar, você pode ter mais de um caminho e fazer com que um leve a outro dentro do fluxo.

- Clique em "Caminhos" no meu a esquerda
- Nomei o caminho, ex. "Atendimento de triagem"
- Clique no caminho que acabou de criar e em seguida no "+"

![](../../img/bot/actions.png)

- Escolha uma ação (detalhes sobre ações serão explicados mais abaixo)
- Você pode ligar ações clicando no "+" e adicionando outra ação

![](../../img/bot/actions_link.png)

Dessa forma, você cria um fluxo de ações que vão conduzir o atendimento do seu cliente de forma rápida e eficiente.

## Ações

### Mensagens
A ação de mensagem exibe uma simples mensagem de texto, geralmente é usada para informações a acerca dos próximos passos ou para avisar a próxima ação.

### Entrada de dados
A ação de entrada de dados permite que o bot colete informações dos seus clientes.
- Informe o texto, ex. "Qual o seu nome?"
- Escolha uma das respostas: padrão, comuns ou personalizada
    
Ao escolher o tipo de resposta, você verá dois campos, **Nome da propriedade** e **Código da propriedade**, o primeiro é um "nome" que representa um "label" e o segundo um valor, com isso você pode construir frases usando esse valor, por exemplo, após a ação de pegar o nome, na próxima ação de texto você pode escrever "Obrigado **{{name}}** por escolher o kinbox, agradecemos seu contato e estamos sempre a disposição", sendo **{{name}}** o nome do cliente que coletado em um fluxo passado.

A ação de entrada de dados oferece algumas validações então você pode deixar uma frase em caso de erro no fornecimento da informação por parte do cliente.

![](../../img/bot/actions_input.png)

### Atendimento
A ação de atendimento encaminha o fluxo da conversa para dois pontos:
- Um grupo, [saiba mais sobre grupos clicando aqui](/docs/guides/groups)
- Um agente, [saiba mais sobre agentes clicando aqui](/docs/guides/agents)

Esse tipo de ação geralmente é usado para **encerrar o fluxo do bot**, onde a conversa é encaminha para pessoas atenderem.

### Menu
Um menu oferece a seu cliente opções de escolha, você pode definir várias opções e essas opções podem levar a submenus, ou seja, o menu ramifica seu atendimento direcionando seu cliente para o caminho que ele escolher. Menus direcionam o fluxo de conversa para outros **[Caminhos](/docs/guides/bot#criando-um-caminho)**, então se você deseja um menu, primeiro crie os caminhos necessários.

![](../../img/bot/actions_menu.png)

### Ir para
Essa ação direciona o fluxo de uma conversa para outro **[Caminho](/docs/guides/bot#criando-um-caminho)**.

### Integração
Essa ação executa um `script`, esse `script` pode usar as informações coletadas para enviá-las para sua api por exemplo.

### Finalizar conversa
A ação de finalização de conversa, marca a conversa como **finalizada** e encerra o atendimento, muitas vezes o bot consegue interagir com seu cliente e resolve o seu problema, uma vez que isso aconteça a ação de finalizar conversa é necessária para fins de controle de atendimento e relatórios.

## Configurações do bot
Você pode configurar o bot para:
- Atender [canais específicos](/docs/into/geting-started-channels)
- Atender em [Horários específicos](/docs/guides/business-hours)
- Marcar se ele atende apenas novos clientes

## Exportar o bot
Para fins de backup, o seu bot pode ser **exportado**, alem disso, você pode a qualquer momento importá-lo novamente.

Uma vez que você criou seu bot clique em **Salvar**.
>Na lista de bots você pode rapidamente desativar/ativar um bot.

>A importação de um bot não sobrescreve outro, um novo é criado.