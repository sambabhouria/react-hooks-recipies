# React Hooks Todo App

## Reference

https://fr.reactjs.org/docs/hooks-reference.html

- **Zero-dependency**
- **No** class components
- Uses `Context` to share a **global state**
- Uses `useReducer` to manage **state actions**
- `useState` to create local state
- Decoupled state logic (Actions)
- Testable components (Uses Jest + Enzyme for tests)
- Custom Hooks for **persisting state**.

## Summary

### 1. **Context**:

https://fr.reactjs.org/docs/context.html
class App extends React.Component {
render() {
return <Toolbar theme="dark" />;
}
}

function Toolbar(props) {
// Le composant Toolbar doit prendre une prop supplémentaire `theme` et la
// passer au ThemedButton. Ça peut devenir pénible si chaque bouton de l’appli
// a besoin de connaître le thème parce qu’il faudra le faire passer à travers
// tous les composants.
return (

<div>
<ThemedButton theme={props.theme} />
</div>
);
}

class ThemedButton extends React.Component {
render() {
return <Button theme={this.props.theme} />;
}
}
En utilisant le Contexte, nous pouvons éviter de passer les props à travers des éléments intermédiaires :

// Le Contexte nous permet de transmettre une prop profondément dans l’arbre des
// composants sans la faire passer explicitement à travers tous les composants.
// Crée un contexte pour le thème (avec “light” comme valeur par défaut).
const ThemeContext = React.createContext('light');

class App extends React.Component {
render() {
// Utilise un Provider pour passer le thème plus bas dans l’arbre.
// N’importe quel composant peut le lire, quelle que soit sa profondeur.
// Dans cet exemple, nous passons “dark” comme valeur actuelle.
return (
<ThemeContext.Provider value="dark">
<Toolbar />
</ThemeContext.Provider>
);
}
}

// Un composant au milieu n’a plus à transmettre explicitement le thème
function Toolbar(props) {
return (

<div>
<ThemedButton />
</div>
);
}

class ThemedButton extends React.Component {
// Définit un contextType pour lire le contexte de thème actuel. React va
// trouver le Provider de thème ancêtre le plus proche et utiliser sa valeur.
// Dans cet exemple, le thème actuel est “dark”.
static contextType = ThemeContext;
render() {
return <Button theme={this.context} />;
}
}

useState
useEffect
useContext
useReducer

```jsx
function App() {
  // create a global store to store the state
  const globalStore = useContext(Store);

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = useReducer(reducer, globalStore);

  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <TodoList />
      <TodoForm />
    </Store.Provider>
  );
}
```

### 2. **The Reducer**:

The second approach was to seperate the main logic, just as the **actions** of Redux. But these are fully functional, every function returns whole state.

```js
// Reducer is the classical reducer that we know from Redux.
// used by `useReducer`
export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "COMPLETE":
      return {
        ...state,
        todos: state.todos.filter(t => t !== action.payload),
      };
    default:
      return state;
  }
}
```

### 3. **State and Dispatcher**

I reach out **state and dispathcer** of context using `useContext` and I can reach to the `actions`.

```js
import React, { useContext } from "react";
import Store from "../context";

export default function TodoForm() {
  const { state, dispatch } = useContext(Store);
  // use `state.todos` to get todos
  // use `dispatch({ type: 'ADD_TODO', payload: 'Buy milk' })`
```

### 4. **Persistence with custom hooks**:

I created custom hooks to persist state on `localStorage`

```js
import { useEffect } from "react";

// Accepts `useContext` as first parameter and returns cached context.
export function usePersistedContext(context, key = "state") {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}

// Accepts `useReducer` as first parameter and returns cached reducer.
export function usePersistedReducer([state, dispatch], key = "state") {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}
```

The `App` function will be:

```js
function App () {
  const globalStore = usePersistedContext(useContext(Store));

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(useReducer(reducer, globalStore));
```
