import React, { useState } from 'react';
import './Translation.css'

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    const emailAddresses = ['mahnoorsajid1111@gmail.com', 'aleenasarfraz5@gmail.com','syedahafsa851@gmail.com'];
    const emailSubject = 'Feedback For Shamail e Tirmidhi in Urdu';
    const mailtoUrl = `mailto:${emailAddresses.join(',')}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(feedback)}`;
    window.location.href = mailtoUrl;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit();

    // Reset the feedback input field
    setFeedback('');
  };
  return (
    <div className="feedback-component" >
      <h3>Feedback for Shamail e Tirmidhi in Urdu</h3>
      <p>Share Your Insightful Feedback and Help us Enhance the Shamail e Tirmidhi in Urdu Experience!</p>
      <form onSubmit={handleFormSubmit}>
      <div style={styles.container}>
      <textarea
        placeholder="Please enter your feedback"
        value={feedback}
        onChange={handleFeedbackChange}
        required
        style={styles.textarea}
      ></textarea>
    </div>
        <center><button type="submit">Submit Feedback</button></center>
      </form>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textarea: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 600 ,
    height: 250,
    padding: 10,
    marginBottom: '20px'
  },
};
export default FeedbackComponent;
