// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    {/* // <Router> */}
      <Navbar title = "Textutils"></Navbar>
      <div className="container">
        {/* <Switch> */}
          {/* <Route exact path="/">
            <TextForm heading="Enter the text"></TextForm>
          </Route> */}
          {/* <Route exact path="/about"> */}
            {/* <About/>  */}
          {/* </Route> */}
          {/* <Route exact path="/text-form"> */}
            <TextForm heading="Enter the text"/>
          {/* </Route> */}
          
        {/* </Switch> */}
      </div>
      
    {/* // </Router> */}
    </>
  );
}

export default App;
