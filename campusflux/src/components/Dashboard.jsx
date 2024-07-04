import "../css/Dashboard.css"

export default function Dashboard(){
    return(
                <div className="dashboard">
           {/* <h1 className="h1">CHRISTLIKE SAM</h1>  */}
           
                <div className="dash">
             <h1> Panel </h1>       
          
           <div className="items">My Earnings<br/> $3500<br/>No Of Referees<br/>73<br/>Subscription<br/>Premium Plan</div>
        
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