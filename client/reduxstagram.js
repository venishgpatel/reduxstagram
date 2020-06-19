import React from 'react';
import { render } from 'react-dom';

// Import components
import App from './components/app';

//import react router depedencies
import{ BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store, { history } from './store';

const AppRouter = () => {
  return(
    <Provider store={ store }>
      <BrowserRouter history={ history }>
        <App />
      </BrowserRouter>
    </Provider>
  )
} 

render(<AppRouter />, document.querySelector('#root'));