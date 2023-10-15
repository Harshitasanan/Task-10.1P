import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Email sent successfully');
      } else {
        setMessage('Failed to send email');
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error('An error occurred', error);
    }
  };

  return (
    <div>
      <h1>React Email Sender</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Email</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
