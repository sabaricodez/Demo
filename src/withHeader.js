import React from 'react';

const withHeader = (WrappedComponent) => {
  return (props) => (
    <div>
      <header>
        <h1>Welcome to the Dashboard</h1>
      </header>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withHeader;
