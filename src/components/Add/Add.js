import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

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
                {/* <pre>{JSON.stringify(this.state.newReflection)}</pre> */}
                 <form onSubmit={this.handleAddReflection}>
                 <p>Topic: <input type="text" value={this.state.topic} onChange={this.handleNameChange('topic')}/></p>              
                 <p>Reflection: <input type="text" value={this.state.description} onChange={this.handleNameChange('description')}/></p>                  
                 <input type="submit" value='Add Reflection'/>
                 </form>
            </div>
        )
    }

} 





export default connect(mapStateToProps)(Add);