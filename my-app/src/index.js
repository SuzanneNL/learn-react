import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyInfo() {
	return(
		<div>
			<h1>Name</h1>
			<p>Personal information</p>
      <ul>
        <li>Personal fact 1</li>
        <li>Personal fact 2</li>
        <li>Personal fact 3</li>
      </ul>
		</div>
	)
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
