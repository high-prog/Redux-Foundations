import { useState } from 'react';

import './App.css';
import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';
import UserView from './features/users/UserView';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>WOW react</h1>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
