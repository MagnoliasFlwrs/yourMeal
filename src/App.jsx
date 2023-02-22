import Catalog from "./components/catalog/Catalog"
import Container from "./components/container/Сontainer"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navigation from "./components/navigation/Navigation"
import { Provider } from "react-redux"
import { store } from "./store"

export const App = () => {


  return (
    <Provider store={store}>
      <Header/>
      <main>
        <Navigation/>
        <Catalog/>
        <section></section>
      </main>
      <Footer/>
    </Provider>
  )
}


