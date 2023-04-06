import React, {
    Component
} from 'react'

export default class Counter extends Component {

    /**
     * Constructor Method for Implemeting State 
     * Other values
     */
    constructor() {
        super();
        this.state = {
            counter: 0
        }
       // this.increment =  this.increment.bind(this)
    }

    /**
     * Increment Method
     */
    increment = ()=>{
        
        this.setState({
            counter: this.state.counter + 1
        });
    }

    /**
     * Decrement Method
     */
    decrement() {
        
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <h1>Counter value is : { this.state.counter }</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={()=>this.decrement()}>Decrement</button>
            </div>
        );
    }
}