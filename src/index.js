import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
import ava1 from "./image/ava1.png"
import ava2 from "./image/ava2.png"
import ava3 from "./image/ava3.png"
import avatar from "./image/whatisavatar.jpg"
import avatar1 from "./image/whatisavatar1.jpg"
import avatar2 from "./image/whatisavatar2.jpg"

function Hi(props) {
  return <div id="main">

  <p>
    <img className="prof" src={props.prof} />
    <strong>{props.name}!</strong>  

    <br />
    {props.date}
    </p>
    <p style={{color:"white"}}> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ... </p>
    <img className="img" src={props.img} />
  </div>;
}
ReactDOM.render(
  <div>
    <Hi prof={ava1} name="Ghost1" date="3/8/2021" img={avatar}/>
    <Hi prof={ava2} name="Ghost2" date="6/9/2021" img={avatar1} />
    <Hi prof={ava3} name="Ghost3" date="16/11/2021" img={avatar2} />
  </div>,
  document.querySelector('#root'));