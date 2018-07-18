import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Add.css';

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

    

    // handles the change in state for a new reflection
    handleNameChange = (propertyName) => {
        return (event) => {
            this.setState({
                ...this.state,
                [propertyName] : event.target.value,
        });
    }
}

    // handles the click event for adding a reflection, then clears inputs
    handleAddReflection = (event)=>{
        event.preventDefault();
        console.log('ADD clicked');
        this.props.dispatch({
            type: 'ADD_REFLECTION',
            payload: this.state
        })
        this.setState({
            topic: '', 
            description: '',
        })
    }
    
    // renders the form to enter a reflection
    render(){
        return(
            <div>
                <h3><strong>Add New Reflection</ strong></h3>
                <div className="form">
                    <form onSubmit={this.handleAddReflection}>
                    <p>Topic: <input type="text" value={this.state.topic} onChange={this.handleNameChange('topic')}/></p>              
                    <p>Reflection: <input type="text" value={this.state.description} onChange={this.handleNameChange('description')}/></p>                  
                    <input type="submit" value='Add Reflection'/>
                    </form>              
                </div>
            </div>
        )
    }

} 





export default connect(mapStateToProps)(Add);