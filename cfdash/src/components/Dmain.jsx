import '../css/styles.css'
export default function main(){
    return(
        <div className="dmain">
            <h1>Hello,</h1>
            <div>
                <ul>
                    <li>Progress <br/> $0.00</li>
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
        </div>
    )
}