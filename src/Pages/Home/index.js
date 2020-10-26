import React from "react";

export class Home extends React.Component {
    state = {
        name: ""
    }

    componentDidMount() {
        fetch('/home').then(res => res.text()).then(data => {
            this.setState({name: data })
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <>
            <h1> HI {this.state.name}</h1>
            </>
        )
    }
}