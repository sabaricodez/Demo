import React, { useState } from 'react';
import Counter from './Counter';
import Dropdown from './Dropdown';

const Dashboard = () => {
  const [counter, setCounter] = useState(0);

  const handleAction = (action) => {
    switch (action) {
      case 'plus':
        setCounter(counter + 1);
        break;
      case 'minus':
        setCounter(counter - 1);
        break;
      case 'reset':
        setCounter(0);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1,backgroundColor:'red',justifyContent:'center',alignItems:'center' ,display:'flex'}}>
        <Counter value={counter} />
      </div>
      <div style={{ flex: 1 ,backgroundColor:'blue',justifyContent:'center',alignItems:'center',display:'flex' }}>
        <Dropdown onActionSelect={handleAction} />
      </div>
    </div>
  );
};

export default Dashboard;
