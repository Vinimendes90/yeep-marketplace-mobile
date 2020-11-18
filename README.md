# Yeep Marketplace - API 🏪

## Rodando o projeto

> Baixe ou clone este repositório.

> Configure o react-native (https://react-native.rocketseat.dev/)

> Acesse a raiz do projeto por um console e faça este passo:

- `npm i` ou `yarn install` para instalar as dependências do projeto.
- Execute o código `npm run android` ou `yarn android`.
- Para saber mais sobre o funcionamento do boilerplate acesse: https://thecodingmachine.github.io/react-native-boilerplate/.

## Informações sobre o projeto: 📃

O Handshake é um marketplace focado na relação entre o cliente e o vendedor.

##### Conexão com a API:
- Para alterar a url da API acesse a pasta `src/Config`.
- A Conexão com o axios está dentro da pasta `src/Services`.

##### Textos
- Os textos estão dentro de`src/Translations/resources`.
- Textos não devem ser colocados direto no container ou componente, qualquer texto que for adicionado ao app, deve ser incluido nos arquivos de cada idioma.
- Sempre verifique se a chave do texto não está sendo utilizada.

##### Formulários e validação de formulários
- o app utiliza o `formik` para criação de formulário juntamente com o `yup` para validar os dados.

##### Estilização
- A estilização é feita com o `styled-components`.
- Cada container e componente deve ter seu próprio arquivo de estilização.

##### Tema
- Novas cores, tamanho de fontes, imagens e coisas do tipo devem ser colocadas dentro da pasta `Theme`.

##### Navegação
- Para criar rotas e telas é uitlizado o `react navigation` na sua versão 5.0.

##### Debug
- É uma boa dica instalar o flipper para debugar o app (https://thecodingmachine.github.io/react-native-boilerplate/docs/UsingFlipper)
