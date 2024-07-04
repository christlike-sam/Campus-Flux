import "../css/Header.css"
import logo from './cflogowhite.png';
export default function Header(){
  return (
    <div className="header">
          <img src={logo} alt="Campus Flux Logo" />
          <h1>Campus Flux</h1>
    </div>
  );
}
