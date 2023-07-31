import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

// import { StateContextProvider } from './context';
import App from './App';
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // 0xaa36a7 -> sepolia chainID in Hex
  <ThirdwebProvider desiredChainId={ChainId.Sepolia}> 
    <Router>
      {/* <StateContextProvider> */}
        <App />
      {/* </StateContextProvider> */}
    </Router>
  </ThirdwebProvider> 
)