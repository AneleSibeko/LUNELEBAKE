import React from 'react';

const SignOut = () => {
  const handleSignOut = () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      // Clear user data
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');

      // Redirect to SignIn page
      window.location.href = '/signin';
    }
  };

  return (
    <div>
      <h1>Sign Out</h1>
      <p>Click the button below to sign out.</p>
      <button onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
