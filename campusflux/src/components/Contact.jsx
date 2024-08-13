import styles from "../css/Contact.module.css"
export default function Contact(){
    return (
        <div className={styles.contact }>
        <div className={styles.box}>
            <div className={styles.leftbox}>
            <h1>Contact Us!</h1>
            </div>
            <div className={styles.rightbox}>
                <ul>
                    <li>Kenya:+254 712 345678</li>
                    <li>UK:+44 7911 123456.</li>
                    <li>US:+1 (510) 294-8375</li>
                </ul>
            </div>
            </div>
            <p> We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, we're always available to listen. Your thoughts and inquiries are important to us, and we value the opportunity to connect with you.

Please feel free to reach out to us directly through the contact information provided below. Whether you prefer to call or email, we're here to assist you in any way we can. We strive to respond to all messages promptly, and we're committed to ensuring that your experience with us is as smooth and pleasant as possible.

If you have a specific question or concern, don't hesitate to reach out. Our team is ready and willing to provide the support you need, whether it's answering a question, resolving an issue, or simply providing more information about our services. Your satisfaction is our priority, and we're dedicated to making sure you have all the information you need.</p>
        </div>
    )
}