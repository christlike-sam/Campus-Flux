import "../css/Home.css"
export default function Home(){

  return (
    <div>
                    <div className="plans">
                {/* <img src="https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img> */}
                {/* <h1 className="home-text">START EARNING NOW!</h1>
                <ul className="abt-text">We are flexible - You work at your convenience from any place using your device.<br /> 
                Quick Payouts - Quickly and conveniently withdraw profits to your M-Pesa.<br />
                Reliability - We are the top remote job company in Africa.</ul> */}
                <div className="freeplan">
                  <h1>Free Plan</h1>
                  <ul>
                  <li>Unlimited Tasks</li>
                  <li>Unlimited Withdrawals</li>
                  <li>Earn through Refferals</li>
                  <li>Eligible for Gifts</li>
                  <li>Task 5</li>
                  <input type="submit" value="Start Free Plan" className="btn" />
                  </ul>
                </div>
                <div className="premiumplan">
                  <h1>Premium Plan</h1> 
                  <ul>
                  <li>Task 1</li>
                  <li>Task 2</li>
                  <li>Task 3</li>
                  <li>Task 4</li>
                  <li>Task 5</li>
                  <input type="submit" value="Get Premium Plan" className="btn" />
                  </ul>
                </div>
                </div>
    </div>
  )
}