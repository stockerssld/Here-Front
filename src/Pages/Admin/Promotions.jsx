import React, { Component } from 'react';
import {Title, Column} from 'rbx'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button2 from '../../components/Util/Button';
import {Divider} from 'antd'
export default function Promotions(){
    return(
        <>
        <Column.Group>
            <Column size="three-quarters">
                <Title as="p">Promociones</Title>
            </Column>
            <Column>
                <Button2 className={'button is-success is-active'} text={'Nueva Promoción'} icon={faPlus}/>
            </Column>
        </Column.Group>
        <Divider/>
        </>
    )
}