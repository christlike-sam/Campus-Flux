import React from 'react';
import styles from '../css/DashStyles.module.css';

export default function Dmain() {
  return (
    <div className={styles.dmain}>
      <ul className={styles.bodybox}>
        <li>
          Subscription <br /> <span className={styles.highlight}>Premium</span>
        </li>
        <li>
          Pending <br /> <span className={styles.highlight}>$67500.00</span>
        </li>
        <li>
          Earnings <br /> <span className={styles.highlight}>$9909.87</span>
        </li>
        <li>
          Commissions <br /> <span className={styles.highlight}>$7870.00</span>
        </li>
      </ul>

      <div className={styles.activity}>
        <h2>Referral Code</h2>
        <p>
          <b className={styles.code}>A001</b> - Share this code with your friends to earn!
        </p>
        <h2>My Referrals</h2>
        <p>You haven't referred anyone yet</p>
      </div>

      <h3>Start Earning</h3>
      <p>
        Refer your friends now!<br /> There's no limit to how much you can earn.
      </p>
    </div>
  );
}
