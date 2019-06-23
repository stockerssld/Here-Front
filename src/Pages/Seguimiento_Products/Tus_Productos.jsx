import React, { Component } from 'react'
import {Button} from 'zent'

export default class Tus_Productos extends Component {
    render() {
        return (
            <div className="container">
                Selecciones sus productos que va a comprar
                <br/>
                <Button type="success">
                Buscar mas productos
                </Button>       
            </div>
        )
    }
}
