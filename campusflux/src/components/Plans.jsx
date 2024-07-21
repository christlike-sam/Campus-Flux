import "../css/plans.css"
export default function Plans(){
    return(
        <div className="body" id="home">
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
                </div>
            )
            }