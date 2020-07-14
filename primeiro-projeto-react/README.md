## 🚀 Primeiro projeto react

Nessa etapa daremos início ao aprendizado do ReactJS, criando o primeiro projeto já utilizando TypeScript. Nesse ponto o dev já deve conhecer os conceitos de componente, estado e propriedades mas eles serão lembrados durante as aulas.

### 💭 Sobre:

Estrutura e padrões
4 aulas

Criando a aplicação
9 aulas

---

### 💪 Ferramentas utilizadas:

- [Create React App](https://github.com/facebook/create-react-app).
- [Eslint](https://eslint.org/)

---

### 🥁 Como rodar:

 `yarn start`

 `yarn test`


### 📝 Comandos utilizados na instalação:

create-react-app primeiro-projeto-react --template=typescript

#### Instalando a biblioteca eslint

yarn add eslint -D

#### Criando o arquivo eslint.json

yarn eslint --init
 - To check syntax, find problems, and enforce code style
 - JavaScript modules (import/export)
 - React
 - Does your project use TypeScript? (y/N) Y
 - Where does your code run?
    ❯◉ Browser
    ◯ Node
 - Use a popular style guide
 - Airbnb: https://github.com/airbnb/javascript
 - JSON
 - N
 - copiar a linha eslint-plugin-react@^7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 || ^1.7.0 @typescript-eslint/parser@latest
 - apagar "eslint@^5.16.0 || ^6.8.0" e "|| ^1.7.0 "

yarn add -D eslint-plugin-react@^7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 @typescript-eslint/parser@latest

#### Instalando a biblioteca
 - Vai adicionar a funcionalidade do react conseguir entender arquivos typescripts.

 yarn add -D eslint-import-resolver-typescript

#### Instalando a biblioteca prettier

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

#### Instalando a biblioteca react-router-dom e o @types
 - Trabalhar com rotas.

yarn add react-router-dom

yarn add @types/react-router-dom -D

#### Instalando a biblioteca styled-components e o @types

yarn add styled-components

yarn add @types/styled-components

#### Instalando a biblioteca polished

yarn add polished

#### Instalando a biblioteca react-icons

yarn add react-icons

#### Instalando a biblioteca axios

yarn add axios

