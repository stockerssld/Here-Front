import { Drawer, Button } from 'antd';
import React, { Components } from 'react'
import { Box, Column, Title } from 'rbx'
import { Typography, Divider } from 'antd';
import { NumberInput, Input, Tag, previewImage } from 'zent'
import { Link } from 'react-router-dom'

const { Paragraph } = Typography;


export default class Drawers extends React.Component {

  state = { visible: false, cantidad: 0, precioUnitario: 0, total: 0, imgArr: [] };



  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  handlePreview = (e) => {
    previewImage({
      images: this.imgArr,
      index: this.imgArr.indexOf(e.target.src),
      parentComponent: this,
      showRotateBtn: false,
      scaleRatio: 3
    });
  }
  onChange(ev) {
    this.setState({ cantidad: ev.target.value });
    this.setState({ total: ev.target.value * this.precioUnitario })
  }

  render(props) {
    this.imgArr = [this.props.img]
    this.precioUnitario = this.props.price
    // console.log(this.precioUnitario)
    // console.log(this.state.cantidad)
    // console.log(this.state.total)
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Ver producto
        </Button>

        <Drawer
          placement="right"
          closable={false}
          width={"75%"}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Paragraph style={{ textAlign: "center" }}>
            <Title size={4}>
              {this.props.name}
            </Title>
          </Paragraph>
          <Divider />
          <Column.Group>
            <Column>
              {/* <ReactImageZoom  /> */}
              <img src={this.props.img} style={{ width: "40rem", height: "20rem" }} onClick={this.handlePreview} />
              <Box>
                <Column.Group>
                  <Column>
                    <center>
                      Cantidad:
            <NumberInput value={0} showCounter placeholder="please enter number" onChange={this.onChange.bind(this)} />
                    </center>
                  </Column>
                  <Column>
                    Precio:<br />
                    <div class="tags are-medium">
                      <Tag className="tag is-success large">
                        $ {this.state.total}
                      </Tag>
                    </div>
                  </Column>
                </Column.Group>
              </Box>
            </Column>
            <Column>
              <Box>
                <Paragraph style={{ textAlign: "justify", width: "100%", height: "auto" }} >
                  <h5>
                    Categoria: {this.props.category_id}
                  </h5>
                  <br />
                  {this.props.description}
                </Paragraph>
              </Box>
            </Column>
          </Column.Group>
          <Column.Group>
            <Column><center>
              <Link to="/Payment_types">
                <Button block onClick={this.onClose} type="primary">
                  Agregar al carrito
            </Button>
              </Link>
            </center>
            </Column>
            <Column>
              <center>
                <Button
                  block
                  type="danger"
                  style={{
                    marginRight: 8,
                    background: "rgb(247, 19, 19)",
                    color: "#fff"
                  }}
                  onClick={this.onClose}
                >
                  Cancelar
          </Button>
              </center>
            </Column>
          </Column.Group>
        </Drawer>
      </div>
    );
  }
}