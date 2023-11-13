import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
} else {
  const errorMessage = document.createElement('div');
  errorMessage.textContent = 'Root element not found.';
  // Handle the case where 'rootElement' is null, perhaps by displaying an error message or taking an alternative action.
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((performanceEntry) => {
  console.log(performanceEntry);
});
