import React from 'react'
import { Modal, Button } from 'antd';
import { Column, Title } from 'rbx'
import { Input } from 'reactstrap'
import { Link } from 'react-router-dom'

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
  render(props) {
    return (
      <div>
        <Button style={{ border: 'none' }} onClick={this.showModal}>
          {this.props.children}
        </Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Column.Group >
            <Column size={7}>
              <Title size={4}>{this.props.nombre_planta}</Title>
            </Column>
            <Column size={5}>
              <Input placeholder="Cantidad a comprar" min={0} max={100} type="number" step="1" />

            </Column>
          </Column.Group>
          <hr />
          <center>
            <img src={this.props.img} style={{ width: "18rem" }} />
          </center>
          <br />
          <center><h4>Precio: ${this.props.precio}</h4></center>
          <p>{this.props.descripcion}</p>
          <br />
          <hr />

          <Column.Group >
            <Column size={4}>
              
              <Button type="danger" block  onClick={this.handleCancel}>
                Cancelar
              </Button>
            </Column>
            <Column>
            </Column>
            <Column size={4}>
              <Link to="/Payment_types">
              <Button type="primary" block>
                Añadir a Carrito
              </Button>
              </Link>
            </Column>
          </Column.Group>

        </Modal>
      </div>
    )
  }
}