import React, { useState } from 'react';
import '../css/wallet.css';

export default function Dwallet() {
  const [balance, setBalance] = useState(1000); // Example balance
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalMethod, setWithdrawalMethod] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  const handleWithdraw = () => {
    // Validate input fields
    if (!withdrawalAmount || !withdrawalMethod || !otp) {
      setError('Please fill in all fields.');
      return;
    }

    if (withdrawalAmount < 10) {
      setError('The minimum withdrawal amount is $10.');
      return;
    }

    if (withdrawalAmount > balance) {
      setError('Insufficient balance.');
      return;
    }

    // Process the withdrawal
    setBalance((prevBalance) => prevBalance - withdrawalAmount);
    setNotification('Withdrawal successful!');
    setError('');
    setWithdrawalAmount('');
    setWithdrawalMethod('');
    setOtp('');
  };

  return (
    <div className="wallet-page">
      <h2>Wallet</h2>
      <div className="balance-display">
        <p>Current Balance: ${balance.toFixed(2)}</p>
      </div>
      {error && <div className="error-message">{error}</div>}
      {notification && <div className="notification-message">{notification}</div>}
      <div className="withdrawal-section">
        <h3>Withdraw Funds</h3>
        <div className="form-group">
          <label>Amount ($)</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(parseFloat(e.target.value))}
            min="10"
          />
        </div>
        <div className="form-group">
          <label>Withdrawal Method</label>
          <select
            value={withdrawalMethod}
            onChange={(e) => setWithdrawalMethod(e.target.value)}
          >
            <option value="">Select Method</option>
            <option value="bank">Bank Transfer</option>
            <option value="paypal">PayPal</option>
            <option value="mobile">Mobile Money</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button className="withdraw-button" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>
    </div>
  );
}
