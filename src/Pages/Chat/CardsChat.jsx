

import React, { Component } from 'react'
import randomColor from 'randomcolor'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

// import  './beep.js'
function random(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
export default class CardsChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: []
        };
    }
    
    componentDidMount(){
        var self = this;
        this.sendable = true;
        var url="192.168.0.103:3000"
        var server = new WebSocket("ws://" + url);
        // let user = localStorage.getItem('user') || `${prompt("What is your name, sir?").replace(/\:|\@/g, "")}`;
        let user = localStorage.getItem('user') || `${prompt("What is your name, sir?").replace(/\:|\@/g, "")}@${randomColor({luminosity: 'dark'})}@${random(1000, 2000)}`;

        localStorage.setItem('user', user);
        server.onmessage = function(event) {
          const messages = JSON.parse(event.data);
          self.setState({messages: messages});
          window.scrollTo(0, document.body.scrollHeight);
          self.refs.message.focus();
        //   new Beep(random(18000, 22050)).play(
        //     messages[messages.length - 1].split(":")[0].split('@')[2],
        //     0.05,
        //     [Beep.utils.amplify(8000)]
        //   );
        };
    
        server.onopen = function() {
          server.send(`${user}: joined the room.`);
        };
    
        server.onclose = function() {
          server.send(`${user}: left the room.`);
        };
    
        this.server = server;
        this.user = user;
        this.refs.message.focus();
    }

    
    sendMessage=() =>{
        if (!this.sendable) {
          return false;
        }
        var self = this;
        setTimeout(function () {
          self.sendable = true; 
        }, 100);
        this.server.send(this.user + ":" + this.refs.message.value);
        this.refs.message.value = '';
        this.sendable = false;
    }

    sendMessageWithEnte=(e)=> {
        if (e.keyCode == 13) {
         this.sendMessage(); 
        }
      }
    render() {
        return (
            <div>
                 <Form onSubmit={this.sendMessage} className="login-form">
                <div id="Send">
                    <ul id="messages"></ul>
                    <input type="text" ref="message" />
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Enviar
                    </Button>
                </div>
                </Form>
      {/* ("div", null,
      React.createElement("ul", null, messages),
      React.createElement("input", { autofocus: true, placeholder: "write your message!", type: "text", ref: "message", onKeyUp: this.sendMessageWithEnter }),
      React.createElement("button", { type: "button", onClick: this.sendMessage }, "Send") */}
    );
            </div>
        )
    }
}
