import "../css/Header.css"
import logo from './cflogowhite.png';
import Navbar from "./Navbar";
export default function Header(){
  return (
    <div className="header">
          <img src={logo} alt="Campus Flux Logo" />
          <h1>Campus Flux</h1>
          <Navbar/>
    </div>
  );
}
