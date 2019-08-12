import React, { Component } from 'react';
import {Steps, Button, message} from 'antd';
import Continue from '../../Pages/Register/Continue';
import First from '../../Pages/Register/First';
const { Step } = Steps;


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  

  render(props) {
    const steps = [
      {
        title: '1',
        content: <First handleSubmitFirst={this.props.handleSubmitFirst} handleChangeFirst={this.props.handleChangeFirst} values={this.props.values} onChanges={() => this.next()}/>
      },
      {
        title: '2',
        content: <Continue handleSubmitContinue={this.props.handleSubmitContinue} handleChangeFirst={this.props.handleChangeFirst} values={this.props.values} />
      },
    ];
    
    const { current } = this.state;
    // console.log(this.props.handleSubmitFirst)
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {/* {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )} */}
          {/* {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )} */}
        </div>
      </div>
    );
  }
}

export default index;