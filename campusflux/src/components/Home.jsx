import "../css/Home.css"
import About from "./About"
import Animation from "./Animation"
import Newform from "./Newform"

export default function Home(){
  return (
    <div>
    <div className="body">
                    <div className="plans">
                <div className="freeplan">
                  <h1>Free Plan</h1>
                  <ul>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Withdrawals</li>
                  <li>Earn through Refferals</li>
                  <li>Eligible for Gifts</li>
                  <li>Tasks available 24hrs</li>
                  </ul>
                  <input type="submit" value="Start Free Plan" className="btn" />
                  
                </div>
                <div className="premiumplan">
                  <h1>Premium Plan</h1> 
                  <ul>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Withdrawals</li>
                  <li>Earn through Refferals</li>
                  <li>Eligible for Gifts</li>
                  <li>Tasks available 24hrs</li>
                  </ul>
                  <input type="submit" value="Get Premium Plan" className="btn" />
                </div>
                </div>
                <About />
                
    </div>
    {/* <Newform/> */}
    </div>
  )
}
