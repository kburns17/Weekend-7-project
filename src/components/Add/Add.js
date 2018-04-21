import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState
});

class Add extends Component {


    render(){
        return(
            <div>
                <h2>Add Reflection</h2>
            </div>
        )
    }


}





export default connect(mapStateToProps)(Add);