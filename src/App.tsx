import { Provider } from 'react-redux'

import Catalog from './components/Catalog'

import store from './store'
import Cart from './components/Cart'

export default function App(){
  return(
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  )
}