import './App.css'

import Swiggy_header from './Components/Swiggy_header'
import Swiggy_Body from './Components/Swiggy_Body'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import About from './Components/About'
import Cart from './Components/Cart'
import Error from './Components/Error'
import RestMenu from './Components/RestMenu'
import { Provider } from 'react-redux'
import AppStore from '../../Utilities/AppStore'





function App() {
  return (

    <Provider store={AppStore}>
      <div>
        <Swiggy_header />
        <Outlet />
      </div>
    </Provider>
  )
}

const Apparouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Swiggy_Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/Cart",
        element: <Cart />
      },
      {
        path: "/restaurants/:resID",
        element: <RestMenu />
      },
    ],

    errorElement: <Error />,
  },
])

export default Apparouter







