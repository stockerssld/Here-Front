import React, { Component } from 'react';
import { Column, Container, Hero, Title } from 'rbx'
import Panels from '../../components/Panel';

export default function Admin(props) {
    return (
        <>
            <Hero>
                <Hero.Body>
                    <Column.Group>
                        <Column size="one-quarter">
                            <Panels />
                        </Column>
                        <Column>
                            {props.children}
                        </Column>
                    </Column.Group>
                </Hero.Body>
            </Hero>


        </>
    )
}