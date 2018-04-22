import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState
});

class Add extends Component {




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
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                 <form onSubmit={this.handleAddReflection}>
                    <input type="text" placeholder="Topic" />
                    <input type="text" placeholder="Description"/>
                    <input type="submit" value='Add Reflection'/>
                 </form>
            </div>
        )
    }

} 





export default connect(mapStateToProps)(Add);