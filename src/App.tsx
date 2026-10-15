// import Counter from "./Reducer/Counter"
// import NameList from "./Items/NameList"
// import Todo from "./Todo/Todo"
import store from "./Redux/Store"
import { Provider } from "react-redux"
import ReduxCounter from './Redux/ReduxCounter'

function App() {
  return (
    <>
      <h1>Hai this redux app</h1>
      {/* <Counter/> */}
      {/* <NameList/> */}
      {/* <Todo/> */}
      <Provider store={store}>
      <ReduxCounter/>
      </Provider>
    </>
  )
}

export default App
