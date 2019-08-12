import React, { Component } from 'react';
import {Title, Column} from 'rbx'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button2 from '../../components/Util/Button';
import {Divider} from 'antd'
export default function Users(){
    return(
        <>
        <Column.Group>
            <Column size="three-quarters">
                <Title as="p">Usuarios</Title>
            </Column>
            <Column>
                <Button2 className={'button is-success is-active'} text={'Nuevo Usuario'} icon={faPlus}/>
            </Column>
        </Column.Group>
        <Divider/>
        </>
    )
}