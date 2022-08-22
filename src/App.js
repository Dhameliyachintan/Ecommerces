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
import PublicRoute from './container/Route/PublicRoute';
import PrivateRoute from './container/Route/PrivateRoute';
import Login from './container/Login';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';




function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <ThemeProvider>
            <Header />
            <Switch>
              <PublicRoute exact path={"/"} component={Home} />
              <PublicRoute exact path={"/About"} component={About} />
              <PublicRoute exact path={"/Blog"} component={Blog} />
              <PublicRoute exact path={"/Shope"} component={Shope} />
              <PublicRoute exact path={"/Cardpage"} component={Cardpage} />
              <PrivateRoute exact path={"/Product"} component={Product} />
              <PublicRoute restricted={false} exact path={"/Login"} component={Login} />
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
        </Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
