import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState
});

class Add extends Component {
    constructor(){
        super()
        this.state={
                topic: '', 
                description: ''
        }
    }


    handleNameChange = (propertyName) => {
        return (event) => {
            this.setState({
                ...this.state,
                [propertyName] : event.target.value,
        });
    }
}

// handles the click event for adding a reflection
    handleAddReflection = (event)=>{
        event.preventDefault();
        console.log('ADD clicked');
        this.props.dispatch({
            type: 'ADD_REFLECTION',
            payload: this.state
        })
       
    }
    

    render(){
        return(
            <div>
                <h2>Add Reflection</h2>
                <pre>{JSON.stringify(this.state.newReflection)}</pre>
                 <form onSubmit={this.handleAddReflection}>
                    Topic:
                    <br></br>
                        <input type="text" value={this.state.topic} onChange={this.handleNameChange('topic')} />
                    <br></br>
                    Reflection:
                    <br></br>
                        <input rows="10" cols="50" type="text" value={this.state.description} onChange={this.handleNameChange('description')} />
                    <br></br>
                        <input type="submit" value='Add Reflection'/>
                 </form>
            </div>
        )
    }

} 





export default connect(mapStateToProps)(Add);