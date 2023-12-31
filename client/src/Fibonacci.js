import React, { Component } from "react";
import axios from 'axios';

class Fibonacci extends Component{
    state={
        seeIndexes: [],
        values: {},
        index: ''
    };

    componentDidMount(){
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues(){
        const values = await axios.get('/api/values/current')
        this.setState({values: values.data})
    };

    async fetchIndexes(){
        const seeIndexes = await axios.get('/api/values/all');
        this.setState({
            seeIndexes: seeIndexes.data
        })
    }

    handleSubmit= async(event)=>{
        event.preventDefault();

        await axios.post('/api/values',{
            index: this.state.index
        });
        this.setState({index: ''})
    }

    renderSeenIndexes(){
        //return this.state.seeIndexes.map(({number})=> number).join(', ')
        return [1,2,3];
    }

    renderValues(){
        const entries = [];
        for(let key in this.state.values){
            entries.push(
                <div key={key}>
                    ** For index {key} Result is {this.state.values[key]}
                </div>
            )
        }

        return entries;
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter index:</label>
                    <input
                        value={this.state.index}
                        onChange={event =>this.setState({index: event.target.value})}
                    />
                    <button>submit</button>
                </form>
                <h3>Seen Indexes</h3>
                {this.renderSeenIndexes()}

                <h3>Calculated values:</h3>
                {this.renderValues()}
            </div>
        )
    }
}

export default Fibonacci;