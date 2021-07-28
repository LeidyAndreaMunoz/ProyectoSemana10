import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/global.css';
/* import Homepage from './views/Homepage'; */
/* import Registerpage from './views/Registerpage/index'; */
/* import Loginpage from './views/Loginpage/index'; */
import Contactpage from './views/Contactpage/index';

function App() {
  return (
    <div className="App">
      <Contactpage/>
      {/* <Loginpage/> */}
      {/* <Registerpage/> */}
      {/* <Header /> */}
      {/* <Homepage /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
