import React, { Component } from 'react';
import {Title,Column, Button, Icon} from 'rbx'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button2 from 'components/Util/Button';
import {Divider} from 'antd'
export default function Orders(){
    return(
        <>
        <Column.Group>
            <Column size="three-quarters">
                <Title as="p">Ordenes</Title>
            </Column>
            <Column>
                <Button2 className={'button is-success is-active'} text={'Nueva Orden'} icon={faPlus} url={"/admin/orders/new"}/>
            </Column>
        </Column.Group>
        <Divider/>
        </>
    )
}