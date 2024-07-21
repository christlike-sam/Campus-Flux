import "../css/About.css"
import "../css/plans.css"
import Animation from"../components/Animation"
import Contact from "./Contact"
import Team from "./Team"
import Plans from "./Plans"
export default function About(){
    return(
        <div>
            <Animation />
            <div className="about">
                <div>
                    <h2>Welcome to Campus Flux!</h2>
                   <p>At Campus Flux, we're revolutionizing the way students and young professionals earn money online. Our platform is designed to provide flexible, accessible, and rewarding opportunities for anyone looking to supplement their income or gain valuable experience in the digital economy.</p> 
                </div>
                <div>
                    <h2>
                        Our Mission
                        </h2>
                        <p>Our mission is to empower our users by offering a variety of online tasks and referral programs that cater to diverse interests and skills. We believe in creating a dynamic and supportive community where members can thrive, learn, and grow together.</p>
                        </div>
                <div><h2>What We Offer</h2>
                <ul className="ul">
                    <li className="li">Task-Based Earnings: From completing surveys and writing reviews to testing new apps and websites, Campus Flux provides a wide range of online tasks that are both engaging and profitable.</li>
                    <li className="li">Referral Programs: Maximize your earnings by inviting friends to join Campus Flux. Our referral program rewards you for every friend who signs up and starts earning.</li>
                    <li className="li">Community Support: Join a vibrant community of like-minded individuals who share tips, offer support, and celebrate each other's successes.</li>
                    <li className="li">Flexible Opportunities: Work at your own pace and choose tasks that fit your schedule. Whether you have a few minutes or a few hours, Campus Flux has opportunities for you.</li>
                </ul>
                </div>
                <div><h2>Why Choose Campus Flux?</h2>
                <ul className="ul">
                    <li className="li">User-Friendly Platform: Our intuitive design makes it easy for you to find and complete tasks, track your earnings, and manage your referrals.</li>
                    <li className="li">
                    Trusted and Transparent: We value integrity and transparency. Our platform ensures that you get paid fairly for your efforts, with clear and timely payouts. 
                    </li>
                    <li className="li">
                    Continuous Improvement: We're always looking for ways to enhance your experience. Our team regularly updates the platform with new features and opportunities based on user feedback. 
                    </li>
                </ul>
                </div>
                <div>
                    <h2>
                    Join Us Today!  
                    </h2>
                    <p>Be a part of the Campus Flux community and start earning from the comfort of your home. Whether you're a student looking for extra cash or a professional seeking flexible work options, Campus Flux is here to help you succeed.</p>
                    
                </div>
                <div>
                <Contact />
                <Plans />  
                </div>
                <Team/>
                
                </div>
        </div>
    )
}