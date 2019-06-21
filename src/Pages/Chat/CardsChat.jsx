

// import React, { Component } from 'react'
// import randomColor from 'randomcolor'
// import { Form, Button } from 'antd';
// import Personas from './utils'

// import { Container, Row, Col } from 'reactstrap';

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// export default class CardsChat extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: '',
//       messages: []
//     };
//   }

//   componentDidMount() {
//     var self = this;
//     this.sendable = true;
//     var url = "192.168.0.103:3000"
//     var server = new WebSocket("ws://" + url);
//     // let user = localStorage.getItem('user') || `${prompt("What is your name, sir?").replace(/\:|\@/g, "")}`;
//     let user = localStorage.getItem('user') || `${prompt("What is your name, sir?").replace(/\:|\@/g, "")}@${randomColor({ luminosity: 'dark' })}@${random(1000, 2000)}`;

//     localStorage.setItem('user', user);
//     server.onmessage = function (event) {
//       const messages = JSON.parse(event.data);
//       self.setState({ messages: messages });
//       window.scrollTo(0, document.body.scrollHeight);
//       self.refs.message.focus();

//     };

//     server.onopen = function () {
//       server.send(`${user}: joined the room.`);
//     };

//     server.onclose = function () {
//       server.send(`${user}: left the room.`);
//     };

//     this.server = server;
//     this.user = user;
//     this.refs.message.focus();
//   }


//   sendMessage = () => {
//     if (!this.sendable) {
//       return false;
//     }
//     var self = this;
//     setTimeout(function () {
//       self.sendable = true;
//     }, 100);
//     this.server.send(this.user + ":" + this.refs.message.value);
//     this.refs.message.value = '';
//     this.sendable = false;
//   }

//   sendMessageWithEnte = (e) => {
//     if (e.keyCode == 13) {
//       this.sendMessage();
//     }
//   }
//   render() {
//     return (
//       <div>
//         {
//           // console.log(Personas.Personas[this.props.match.url.substring(6)].mensajes)
//         }
//         {/* {console.log(this.props.match.url.substring(6))} */}
//         <Form onSubmit={this.sendMessage} className="login-form">
//           <div id="Send">
//             <ul id="messages" style={{ 'overflow-y': 'scroll' }} >

//               {Personas.Personas[this.props.match.url.substring(6)].mensajes.map((Info) => {
//                 return (<>
//                   <div class={!Info.visto ? "alert alert-warning" : Info.ID!=1?"alert alert-primary" :"alert  alert-dark"} role="alert" style={{"text-align": "none"}}>
//                     <div>
//                     {Info.ID!=1 ? <img src={Personas.Personas[this.props.match.url.substring(6)].avatar}/>: null} {Info.mensaje} 
//                     </div>
//                   {Info.ID==1 ? <img src={Personas.admin[0].img}/>: null}
//                   {console.log(Personas.Personas[this.props.match.url.substring(6)].avatar)}

//                   </div>
//                 </>)
//               })}

//             </ul>
//             <input type="text" ref="message" />
//             <Button type="primary" htmlType="submit" className="login-form-button">
//               Enviar
//                     </Button>
//           </div>
//         </Form>
//         );
//       </div>
//     )
//   }
// }





import React, { Component } from 'react'
// import randomColor from 'randomcolor'
import { Form, Button } from 'antd';
import Personas from './utils'

import { Container } from 'reactstrap';


// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
export default class CardsChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: []
    };
  }

  render() {
    const {messages}=this.state

    return (
      <div>
        {console.log(messages)}
        {
          // console.log(Personas.Personas[this.props.match.url.substring(6)].mensajes)
        }
        {/* {console.log(this.props.match.url.substring(6))} */}
        <Form onSubmit={this.sendMessage} className="login-form">
          <div id="Send">
            <ul id="messages" style={{ 'overflow-y': 'scroll' }} >
            <Container>
              {Personas.Personas[this.props.match.url.substring(6)].mensajes.map((Info) => {
                return (<>
                  {/* eslint-disable-next-line */}
                  <div class={!Info.visto ? "alert alert-warning" : Info.ID!=1?"alert alert-primary" :"alert  alert-dark"} role="alert" style={{"text-align": "none"}}>
                    
                     {/* eslint-disable-next-line */}
                    {Info.ID!=1 ?<div style={{textAlign:"left", paddingLeft:"2%"}}> <img src={Personas.Personas[this.props.match.url.substring(6)].avatar} style={{paddingRight:"2%"}}/>{Info.mensaje}</div>: null}  
                     {/* eslint-disable-next-line */}
                  {Info.ID==1 ? <div style={{textAlign:"right", paddingRight:"2%"}}> {Info.mensaje}<img src={Personas.admin[0].img} style={{paddingLeft:"2%"}}/></div>: null}
                  {console.log(Personas.Personas[this.props.match.url.substring(6)].avatar)}

                  </div>
                </>)
              })}
            </Container>






            </ul>

            <input type="text" ref="message" />
            <Button type="primary" htmlType="submit" className="login-form-button">
              Enviar
                    </Button>
          </div>
        </Form>
        
        {console.log(Pru)}
      </div>
    )
  }
}

const Pru=[
   ["josre@#618702@1665: joined the room.", "josre@#618702@1665: joined the room.", "josre@#618702@1665: joined the room.", "josre@#618702@1665: joined the room.", "josre@#618702@1665: joined the room."]
]