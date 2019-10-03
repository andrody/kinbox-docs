---
id: api-key
title: Chaves de API
---
As API Keys servem para permitir que sua plataforma (caso sua empresa tenha uma) e o Kinbox possam trocar informações de forma segura. É necessário ter privilégio de Admin ou Proprietário para acessar essa informação. É possível acessar suas API KEYs pelo menu: “Configurações -> API”. Cada Workspace tem suas próprias keys.
As suas API KEYs devem ser mantidas de forma segura, pense nelas como uma senha, não devem ser compartilhadas com outras pessoas além das que realmente precisam utilizá-las, como os programadores da sua plataforma.


## API Secret
Essa string é usada para assinar as requisições que são enviadas do Kinbox para a sua plataforma assim como as requisições enviadas para suas URLs de webhook. Com ela é possível garantir se a origem da requisição é mesmo o Kinbox.


## Kinbox Token 
Essa string é utilizada como um Token que deve ser enviado junto com cada requisição da sua plataforma para o Kinbox para que seja possível identificá-la.