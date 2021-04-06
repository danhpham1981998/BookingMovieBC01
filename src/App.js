import "./App.scss";
import { BrowserRouter, Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import Lifecycle from "./pages/LifeCycle/Lifecycle";
import UseStateHook from "./pages/Hooks/UseStateHook";
import BaiTapChonXe from "./pages/Hooks/BaiTapChonXe";
import UseEffectHome from "./pages/Hooks/UseEffectHome";
import ReduxHookHome from "./pages/Hooks/ReduxHookHome";
import Details from "./pages/Details/Details";
import HookUseCallBack from "./pages/Hooks/HookUseCallBack";
import HookUseMemo from "./pages/Hooks/HookUseMemo";
import HookUseRef from "./pages/Hooks/HookUseRef";
import ParentComponent from "./pages/HOC/ParentComponent";
import HomeTemplate from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import Checkout from "./pages/Checkout/Checkout";
//import history
import {createBrowserHistory} from 'history'
//Đối tượng giúp chuyển hướng trang bất kì file nào
export const history = createBrowserHistory();
// export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
    {/* <Header/> */}
      <Switch>
        <div className="App">
          <Loading/>
          {/* <Route exact path="/home" component={Home} /> */}
          <HomeTemplate exact path="/home/" Component={Home} />
          <AdminTemplate exact path="/login/" Component={Login}/>
          <HomeTemplate exact path="/contact" Component={Contact}/>
          <HomeTemplate exact path="/register" Component={Register}/>
          {/* <Route exact path="/lifecycle" component={Lifecycle} /> */}
          <HomeTemplate exact path="/lifecycle" render={(propsRoute) => {  // Tham số chứa các props của thẻ route
            return <div>
              <h3> Đây là Component LifeCylce</h3>
              <Lifecycle {...propsRoute}/>
            </div>
          }} />
          {/* Component hooks */}
          <HomeTemplate exact path="/usestatedemo" Component={UseStateHook}/>
          <HomeTemplate exact path= "/useffecthome" Component={UseEffectHome}/>
          <HomeTemplate exact path="/baitapchonxe" Component={BaiTapChonXe}/>
          <HomeTemplate exact path="/reduxhookhome" Component={ReduxHookHome}/>
          <HomeTemplate exact path="/details/:id" Component={Details}/>
          <HomeTemplate exact path="/checkout/:id" Component={Checkout} />
          {/* UseCallBack  */}
          <HomeTemplate exact path="/hookusecallback" Component={HookUseCallBack}/>
          {/* UseMemo */}
          <HomeTemplate exact path="/hookusememo" Component={HookUseMemo}/>
          {/* UseRef */}
          <HomeTemplate exact path="/hookuseref" Component={HookUseRef}/>
          {/* HOC */}
          <HomeTemplate exact path="/demoprops" Component={ParentComponent}/>
          {/* Route mặc định để dưới cuối cùng của ứng dụng */}
          <HomeTemplate exact path="/" Component={Home}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
