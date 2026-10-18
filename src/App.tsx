// import Counter from "./Reducer/Counter"
// import NameList from "./Items/NameList"
// import Todo from "./Todo/Todo"
// import store from "./Redux/Store"
import { Provider } from "react-redux"
import productStore from "./Redux-Thunk/ProductRedux"
// import ReduxCounter from './Redux/ReduxCounter'

// import Parent from "./Immer/Sample"
import ProductList from "./Redux-Thunk/ProductList"

function App() {
  return (
    <>
      <h1>Hai this redux app</h1>
      {/* <Counter/> */}
      {/* <NameList/> */}
      {/* <Todo/> */}
      {/* <Provider store={store}>
      <ReduxCounter/>
      </Provider> */}

      <Provider store={productStore}>
        <ProductList/>
      </Provider>

      {/* <Parent/> */}
    </>
  )
}

export default App
