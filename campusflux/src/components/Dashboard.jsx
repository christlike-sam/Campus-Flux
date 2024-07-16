import { useBeforeUnload } from "react-router-dom"
import "../css/Dashboard.css"

export default function Dashboard(){
    return(
                <div className="dashboard">
           {/* <h1 className="h1">CHRISTLIKE SAM</h1>  */}
           
                <div className="dash">
             <h1> Panel </h1>       
          
           <div className="items" >
            <li><b>My Earnings</b></li>
            <li>$3500</li>
            <li><b>No Of Referees</b></li>
            <li>73</li>
            <li><b>Subscription</b></li>
            <li>Premium Plan</li>
            <input type="submit" value="Withdraw" className="btn solid" />
            </div>
        
        </div>
        <div className="dash">
           <h1>Tasks </h1>
           <div className="taskitems">
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
            <li>Task 4</li>
            <li>Task 5</li>
            </div>
        </div>
        </div>
    )
}