import React from "react"
import './App.css';
import "./main"
import Homepage from "./Homepage";
import Shop from "./Shop"
import Product from "./Product"
import Fabric from "./Fabric"
import Partners from "./Partners";
import Journal from "./Journal";
import Articles from "./Articles"
import About from "./About"
import notFound from "./components/notFound"
import { BrowserRouter, Route , Switch} from "react-router-dom"

function App() {
    return (
       <BrowserRouter>
       <Switch>
       <Route path="/"  component={Homepage} exact />
       <Route path="/shop"  component={Shop} />
       <Route path="/product"  component={Product} />
       <Route path="/fabric"  component={Fabric} />
       <Route path="/partners"  component={Partners} />
       <Route path="/journal"  component={Journal} />
       <Route path="/articles"  component={Articles} />
       <Route path="/about"  component={About} />
       <Route component={notFound} exact />
       </Switch>
       </BrowserRouter>

    )
}

export default App