import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import withHeader from './withHeader';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const DashboardWithHeader = withHeader(Dashboard);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <DashboardWithHeader />
      )}
    </div>
  );
};

export default App;
