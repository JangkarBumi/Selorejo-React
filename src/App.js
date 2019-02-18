import React from "react";
import "./App.css";
import "./main";
import Homepage from "./Homepage/Homepage";
import Shop from "./Shop/shop";
import Product from "./Product";
import Fabric from "./Fabric/fabric";
import Partners from "./Partners";
import Journal from "./Journal/journal";
import Articles from "./Articles";
import About from "./About";
import notFound from "./notFound/notFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/product" component={Product} />
        <Route path="/fabric" component={Fabric} />
        <Route path="/partners" component={Partners} />
        <Route path="/journal" component={Journal} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route component={notFound} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
