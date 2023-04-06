import React, { Component } from 'react'

export default class Calculator extends Component {

    constructor()
    {
        super();
        this.state = {
            datavalue : null,
            actionname: ''
        }
    }


    addition(param1, param2)
    {
        this.setState({
            datavalue: param1 + param2,
            actionname: 'Addition',
        });
    }

    subtraction(param1, param2)
    {
        this.setState({
            datavalue: param1 - param2,
            actionname: 'Subtraction',
        });
    }

    
    multiplication(param1, param2)
    {
        this.setState({
            datavalue: param1 * param2,
            actionname: 'Multiplication',
        });
    }

    
    division(param1, param2)
    {
        this.setState({
            datavalue: (param1 / param2).toFixed(2),
            actionname: 'Division',
        });
    }



    render() {
        return (
        <div>
            <h2>{ this.state.actionname+' Result'} is : { this.state.datavalue }</h2>
            <button onClick={()=>this.addition(1,3)}>Add</button>
            <button onClick={()=>this.subtraction(1,3)}>Subtruct</button>
            <button onClick={()=>this.multiplication(1,3)}>Multiplication</button>
            <button onClick={()=>this.division()}>Division</button>
        </div>
        )
    }
}
