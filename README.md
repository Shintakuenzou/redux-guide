# Redux-guide
<p align="center">
 <a href="#Objetivo" style="color:white;">Objetivo</a> • 
 <a href="#Redux" style="color:white;">Sobre Redux</a> •
</p>

<div>

# **Objetivo**

<p>O objetivo deste repositório do GitHub é fornecer uma coleção de anotações detalhadas e informativas sobre o Redux e Redux Toolki, uma biblioteca popular de gerenciamento de estado em aplicações JavaScript. 
O repositório inclui uma variedade de tópicos relacionados ao Redux e Redux Toolki ,como conceitos básicos, estrutura de diretórios, fluxo de dados, ações, reducers, middlewares, selectors e muito mais.

O objetivo principal é fornecer aos desenvolvedores uma fonte centralizada de informações para ajudá-los a entender e utilizar o Redux de forma mais eficiente e eficaz em seus projetos.

</p>

</div>

<div>

# **Instalação do Redux**

Para instalar a versão estável **Redux Core**:

```node
# npm
npm install redux

#yarn
yarn add redux
```

# **Pacotes Complementares**

Caso faça alguma ligação com o React Js e das ferramentas de desenvolvedor use isso:

```node
npm install react-redux
npm install --save-dev @redux-devtools/core
```

# **Usar o Redux no React**

A maneira mais recomendada para criar um aplicativo React usando o Redux é:

```node
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```
# **Aviso!**
Na versão atual do Redux hoje, ao em vez de usar o **createStore** Redux recomenda usar o método **configureStore** do pacote @reduxjs/toolkit, que substitui createStore.
Na documentação oficial do site <a href="https://redux.js.org/introduction/why-rtk-is-redux-today">(aqui)</a> diz que o Redux Toolkit é uma abordagem recomendada para escrever lógica Redux hoje, incluindo configuração de armazenamento, redutores, busca de dados e muito mais.
O **configureStore** do Redux Toolkit é uma versão aprimorada do **createStore** que simplifica a configuração e ajuda a evitar erros comuns.

Na documentação diz que não deve usar o pacote redux core sozinho hoje, exceto para fins de aprendizado. A documentação diz que método createStore do pacote principal do redux não será removido, mas recomenda fortemente que todos os usuários a migrar para usar o Redux Toolkit para todo o código Redux.

Mas caso ainda queira usar o **createStore** sem esse aviso de descontinuação do seu vsCode, use a importação **legacy_createStore** em vez disso!
```javascript
import { legacy_createStore as createStore} from 'redux'
```

# **Redux**

<p>Redux é uma biblioteca para gerenciamento de estado em aplicações JavaScript. Ele é amplamente utilizado com o framework React, mas pode ser utilizado em conjunto com outras bibliotecas ou frameworks.

O Redux funciona seguindo o padrão arquitetural Flux, que é uma maneira de gerenciar o fluxo de dados em uma aplicação. Ele possui três principais componentes: **_a store, actions e reducers._**</p>

## **Store**

<p>A store é um objeto que contém todo o estado da aplicação. O estado é imutável, ou seja, não pode ser alterado diretamente. Em vez disso, a store deve ser atualizada por meio de actions.</p>

```javascript
import { createStore } from "redux";

const store = createStore(reducer);
```

<p>O primeiro parâmetro da função createStore é um reducer, que é uma função responsável por atualizar o estado do store. O reducer recebe duas informações: o estado atual e a ação que foi disparada. Com base na ação, o reducer atualiza o estado e retorna o novo estado.</p>

## **Actions**

<p>A action é um objeto JavaScript que descreve uma mudança que deve ser realizada no estado da aplicação no Redux. Ela é a única fonte de informação para os reducers, que são responsáveis por atualizar o estado da aplicação.

Em geral, uma action é composta de duas propriedades obrigatórias

**type**: uma string que indica o tipo da ação que está sendo executada. O tipo é usado pelos reducers para determinar como atualizar o estado da aplicação.

**payload (opcional)**: um objeto que contém os dados necessários para realizar a ação. O payload pode conter qualquer tipo de dado, como strings, números, objetos ou arrays.

As actions são geralmente criadas em funções chamadas de action creators. Um action creator é uma função que retorna um objeto de ação. Ele é usado para simplificar a criação de actions complexas e para manter a consistência do código ao longo do projeto.

As actions são despachadas pelos componentes do React que utilizam o Redux para gerenciar o estado da aplicação. Quando uma action é despachada, ela é enviada para todos os reducers registrados no store. Cada reducer verifica se a action é relevante para ele e atualiza o estado da aplicação com base nas informações contidas na action.

</p>

### Exemplo:

```javascript
// actions.js

// Definindo as constantes das actions
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

// Action creator para adicionar um novo to-do
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

// Action creator para marcar um to-do como concluído
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// Action creator para definir o filtro atual
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
```

## **Reducer**

<p>Os reducers são funções puras que recebem o estado atual da store e uma action, e retornam o novo estado da store. Eles são responsáveis por atualizar o estado da store de acordo com as actions recebidas.</p>
<p>Segue um exemplo básico de um reducer para gerenciar um estado simples que contém um contador:</p>

```javascript
const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
```

<p>Neste exemplo, initialState é o estado inicial da aplicação, que contém uma propriedade count igual a zero. Em seguida, definimos a função counterReducer, que recebe o estado atual e uma ação e retorna o novo estado.

Dentro da função counterReducer, usamos um switch para verificar o tipo da ação e retornar o novo estado apropriado para cada tipo de ação.

- No caso de uma ação **-INCREMENT-**, incrementamos o valor do contador em 1.

- No caso de uma ação **-DECREMENT-**, decrementamos o valor do contador em 1.

- E no caso de uma ação **-RESET-**, definimos o valor do contador de volta para zero.

Se a ação não corresponder a nenhum dos tipos de ação definidos no switch, a função retorna o estado atual sem fazer alterações.

É importante lembrar que um reducer deve ser uma função pura, o que significa que ele não deve modificar o estado atual diretamente. Em vez disso, ele deve sempre retornar um novo estado que reflete a mudança descrita na ação.</p>

<p>O Redux oferece diversas vantagens, como a possibilidade de dividir a aplicação em pequenos e independentes componentes, facilitando a manutenção e o desenvolvimento de novas funcionalidades. Além disso, ele oferece um controle maior sobre o estado da aplicação, tornando-a mais previsível e fácil de depurar.</p>

# **Exemplo de uso do Redux com React:**

```javascript
import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Define a função reducer
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Cria a store
const store = createStore(reducer);

// Define as actions
const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };

// Define o componente de contador
function Counter(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

// Conecta o componente ao estado da store
const ConnectedCounter = connect(
  state => ({ count: state.count }),
  dispatch => ({
    increment: () => dispatch(incrementAction),
    decrement: () => dispatch(decrementAction),
  })
)(Counter);

// Renderiza o componente dentro do Provider
ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('root')
);
```
## **Explicando o exemplo:**
<p>Neste exemplo, o Redux é utilizado em conjunto com o framework React para gerenciar o estado de um componente de Contador. O componente é conectado à store por meio da função connect, que mapeia o estado da store e as ações disponíveis para as props do componente. Quando um botão é clicado, a action correspondente é disparada e a store é atualizada, o que faz com que o componente seja renderizado novamente com o novo estado.</p>
<p>A função connect é uma função do pacote react-redux que permite conectar um componente React a uma store Redux. Ela recebe dois parâmetros: mapStateToProps e mapDispatchToProps.</p>

- **mapStateToProps** é uma função que mapeia o estado da store para as props do componente. Ela recebe o estado atual da store como parâmetro e deve retornar um objeto que será mesclado com as props do componente, ou seja, retorna quais propriedades quer daquele estado.
- **mapDispatchToProps** é uma função que mapeia as ações disponíveis para as props do componente. Ela recebe a função dispatch da store como parâmetro e deve retornar um objeto que contém as ações disponíveis para o componente.
<p>No exemplo fornecido no documento, a função connect é utilizada para conectar o componente Counter à store Redux. A função mapStateToProps mapeia o estado da store para a prop count do componente, enquanto a função mapDispatchToProps mapeia as ações increment e decrement para as props onClick dos botões.</p>