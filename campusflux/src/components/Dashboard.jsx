import "../css/Dashboard.css"

export default function Dashboard(){
    return(
                <div className="dashboard">
           {/* <h1 className="h1">CHRISTLIKE SAM</h1>  */}
           
                <div className="dash">
             <h1> PANEL </h1>       
          
           <div className="items">My Earnings<br/>No Of Referees<br/>Subscription</div>
        
        </div>
        <div className="dash">
           <h1>TASKS </h1>
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