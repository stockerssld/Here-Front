import React,{useState} from 'react'
import {Panel, Control, Icon,Input, Button, Checkbox} from 'rbx'
import {Link} from 'react-router-dom'
export default function Panels(){
    return(
        <Panel>
            <Panel.Heading><center>CacShop</center></Panel.Heading>
            <Link to="/admin/orders">
                <Panel.Block as="a" >
                    Ordenes
                </Panel.Block>
            </Link>
            <Link to="/admin/return">
                <Panel.Block as="a">
                    Devoluciones
                </Panel.Block>
            </Link>
            <Link to="/admin/category">
                <Panel.Block as="a">
                    Categorias
                </Panel.Block>
            </Link>
            <Link to="/admin/subcategory">
                <Panel.Block as="a">
                    SubCategorias
                </Panel.Block>
            </Link>
            <Link to="/admin/products">
                <Panel.Block as="a">
                    Productos
                </Panel.Block>
            </Link>
            <Link to="/admin/promotions">
                <Panel.Block as="a">
                    Promociones
                </Panel.Block>
            </Link>
            <Link to="/admin/users">
                <Panel.Block as="a">
                    Usuario
                </Panel.Block>
            </Link>
            <Link to="/admin/configurations">
                <Panel.Block>
                    Configuraciones
                </Panel.Block>
            </Link>            
        </Panel>
    )
}
