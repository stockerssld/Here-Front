import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'
export default class Chat extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
            <Grid/>                
            </div>
        )
    }
}
