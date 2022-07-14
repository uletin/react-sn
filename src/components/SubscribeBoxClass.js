import React, { Component } from 'react'

export default class SubscribeBox extends Component {
    state = {
        subscripe : false,
        like : 0,
        dislike : 0
    }

    handleSubscribe = () => {
        this.setState({
            subscripe : !this.state.subscripe
        })
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}
