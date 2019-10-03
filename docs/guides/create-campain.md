---
id: create-campain
title: Campanhas de mensagens
---

O kinbox dá suporte a **campanhas**, ou seja, se você quer atingir uma massa grande de pessoas para atrair sua atenção para um produto, serviço ou avisos é muito simples basta cadastrar uma nova campanha.
> Atualmente somente temos suporte para campanhas pelo WhatsApp, em breve teremos para outros canais de atendimento, [Clique aqui para ver como adicionar um canal WhatsApp a sua plataforma](/docs/guides/add-channel-whatsapp).

## Criando uma nova camapanha
- Vá para menu superior esquerdo e clique em **Campanhas** como na imagem abaixo.

![menu de campanhas](../../img/campain/menu_campanha.png)

- Clique em "Novo" no canto superior esquerdo.

<!-- ![botão de novo](../../img/campain/btn_novo_campanha.png) -->

- Em seguida escolha a plataforma a qual deseja fazer campanha.

> Recomendamos que o número usado em uma campanha seja diferente de um número de atendimento da empresa, pois o disparo em massa de mensagens pode banir seu número mais facilmente.

- Nesse momento escolha o nome da sua campanha, por exemplo: "Promoção de Natal" e então selecione um arquivo com os números dos telefones dos seus contatos, o arquivo pode ter o formato **.xlsx**, **.csv**, **.txt** ou **.xml**, você pode baixar esses arquivos de exemplo e seguir o modelo.

    - [Arquivo_de_exemplo.xlsx](../../img/campain/contatos-test.xlsx)
    - [Arquivo_de_exemplo.csv](../../img/campain/contatos-test.csv)
    - [Arquivo_de_exemplo.xml](../../img/campain/contatos-test.csv)

- Após isso escolha o canal de envio e escreva o texto da mensagem, você pode inserir imagens ou arquivos como anéxos também.

- Nessa útima etapa, selecione a data de início da campanha e em seguida, de forma opcional, selecione as configurações de tempo.
    - **Tamanho do Lote**: São blocos de números que são extraídos dos arquivos e processados para envio de mensagens.
    - **Tempo de espera entre lotes (segundos)**: De quanto em quanto tempo um lote será processado.
    - **Tempo de espera mínimo entre mensagens (segundos)**: Tempo de envio mínimo entre uma mensagem e outra.
    - **Tempo de espera máximo entre mensagens (segundos)**: Tempo de envio máximo entre uma mensagem e outra.
>O tempo de espera mínimo e máximo simula o envio natural de mensagens, ou seja as mensagens não são envidas a cada x segundos e sim entre um intervalo de tempo mínimo e máximo.

>Diminuir os tempos nas configurações avançadas pode fazer sua campanha rodar mais rápido, mas aumenta a probabilidade de seu número ser banido pelo WhatsApp.

- Por fim clique em **Criar campanha**

## Acompanhando uma campanha

Uma vez criada a campanha ela é listada na página principal da campanha, lá você pode acompanhar o progresso de envio das mensagens e algumas informações como a data de início, quantidade de mensagens enviadas e status do processamento da sua campanha.
![lista de campanhas](../../img/campain/lista_campanha.PNG)
>Temos suporte a várias campanhas ao mesmo tempo, então você pode criar várias campanhas com datas diferentes e assuntos diferentes que iremos processar e enviar as mensagens nos períodos selecionados por você.

Ao selecionar uma campanha você verá as informações da mesma com a opção de editar o nome da campanha ou até mesmo excluir essa campanha a qualquer momento do progresso dela.