import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import About from './container/About/About';
import Blog from './container/Blog/Blog';
import Shope from './container/Shope/Shope';
import Products from './component/Slider/Products';
import Shoes from './component/Slider/Shoes';
import Customer from './component/Slider/Custmoer';
import Images from './component/Slider/Images';
// import Avater from './compnonent/Slider/Avater';
import Team from './component/Slider/Team';
import Logo from './component/Slider/Logo';
import Cardpage from './container/Cardpage/Cardpage';
import Product from './container/Product';
import { ThemeProvider } from './context/ThemeContext';
// import { ThemeProvider } from './container/context/ThemeContext';




function App() {
  return (
    <div className="App">
      <ThemeProvider>

        <Header />
        <Switch>
          <Route exact path={"/Home"} component={Home} />
          <Route exact path={"/About"} component={About} />
          <Route exact path={"/Blog"} component={Blog} />
          <Route exact path={"/Shope"} component={Shope} />
          <Route exact path={"/Cardpage"} component={Cardpage} />
          <Route exact path={"/Product"} component={Product} />
          {/* <Products /> */}
          {/* <Shoes /> */}
          {/* <Customer /> */}
          {/* <Avater /> */}
          {/* <Logo/> */}
          {/* <Images /> */}
          {/* <Team /> */}
        </Switch>
        <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;
