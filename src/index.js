import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app/';
import './index.css';


class WhoAmI extends Component{
  constructor(props){
    super(props);
    this.state ={
      years:26,
    
    }
    this.nextYear = this.nextYear.bind(this);
    
    // this.nextYear =()=>{
    //   this.setState( state => ({
    //         years: ++state.years
    //       }))
    //     }
    // }
  }
  nextYear(){

    this.setState( state => ({
      years: ++state.years
    }))
  }
  render() {
    const {name,surname,link} = this.props;
    const {years} = this.state;
    return (
      <React.Fragment>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years = {years}</h1>
        <a href={link}>My profile</a>
      </React.Fragment>
    )
  }
}



const All = ()=>{
  return(
    <>
    <WhoAmI name ="John" surname="Smith" link ="facebook.com"/>
    <WhoAmI name ="Dorin" surname="Ghetus" link ="facebook.com"/>
    <WhoAmI name ="Alex" surname="Romero" link ="facebook.com"/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <All/>
);
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

