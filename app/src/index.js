import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let time=new Date().getHours();
let greetings='';

if(time>=5 && time<=11)
{
  greetings='Good Morning';

}
else if(time>=12 && time<=15)
{
  greetings = 'Good Afternoon';
}
else if(time>=16 &&time<=19)
{
  greetings='Good Evening';
}
else
{
  greetings='Good Night';
}

ReactDOM.render(
  
  
  <React.Fragment>
   <div className='heu'>
  
 
  <h1>{`${greetings} `} </h1>
  </div>

  <App></App>


    
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
