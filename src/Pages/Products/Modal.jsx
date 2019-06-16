import React from 'react'
import { Modal, Button } from 'antd';

export default class Modals extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
render(props){
    return( <div>
                <Button style={{border:'none'}} onClick={this.showModal}>

        {this.props.children}
        </Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.props.author}</p>
          <p>{this.props.img}</p>
          <p>Some contents...</p>
        </Modal>
      </div>)
}}