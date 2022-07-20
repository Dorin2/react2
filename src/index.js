import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const Header = () =>{
  return <h2> Hello </h2>
}

const Field = () =>{
  return <input type= "text" placeholder="Type here"/>
}

const Btn = () =>{
  const text = "Log in";
  
  return  <button>{text}</button>
}

const App = () =>{
  return (
    <div>
    <Header/>
    <Field/>
    <Btn/>
    <div>sasd</div>
    </div>
    
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

// ReactDOM.render(<App/>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

