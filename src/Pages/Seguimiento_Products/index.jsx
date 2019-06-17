
import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import Tus_Productos from './Tus_Productos';
import Verificacion_Datos from './Verificacion_Datos';
import Seguimiento_Producto from './Seguimiento_Producto';
import Compra_Realizada from './Compra_Realizada'
const { Step } = Steps;

const steps = [
  {
    title: 'Selección de Productos',
    content:<Tus_Productos/>,
  },
  {
    title: 'Verificación de Datos',
    content: <Verificacion_Datos/>,
  },
  {
    title: 'Seguimiento de Producto',
    content: <Seguimiento_Producto/>,
  },{
    title: 'Compra realizada',
    content: <Compra_Realizada/>,
  },
];

export default class Seguimiento_Products extends Component {
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
    
    
      render() {
        const { current } = this.state;
        return (
          <div >
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
            {current > 0 && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                  Next
                </Button>
              )}
              
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
              
            </div>
          </div>
        );
      }
    }
