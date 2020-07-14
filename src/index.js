import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log('store', store);
// console.log('STATE', store.getState());

ReactDOM.render(<App store={store} />, document.getElementById('root'));


