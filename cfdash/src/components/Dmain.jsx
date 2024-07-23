import '../css/styles.css'
import Dheader from './Dheader'
export default function Dmain(){
    return(
        <div className="dmain">
            <div >
            <h1>Hello,</h1>
                <Dheader />
                </div>
                <ul>
                    <li>Subscription <br/> Premium</li>
                    <li>Pending <br/> $0.00</li>
                    <li>Earnings <br/> $0.00</li>
                    <li>Commisions <br/> $0.00</li>
                </ul>
                <div className='activity'>
                    <h2>Activity</h2>
                    <h3>My Referrals</h3>
                    <p>You haven't reffered anyone yet</p>
                </div>
                <div >
                    <h3>Start Earning</h3>
                    <p>Reffer your Friends now!<br />There's no limit to how much you can earn</p>
                </div>
        </div>
    )
}