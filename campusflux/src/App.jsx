import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer"
import Home from "./components/Home";
import "./Index.css"
import Signup from "./components/Signup";
function App() {
  return (
    <div className="body">
      <Header />
      <Form/> 
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
