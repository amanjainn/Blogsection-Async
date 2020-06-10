import React, { Component } from 'react'
import Postlist from './PostList'

export default class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Postlist/>
            </div>
        )
    }
}
