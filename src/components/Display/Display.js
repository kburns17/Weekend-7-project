import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = reduxState => ({
    reduxState
});

class Display extends Component{
    constructor(props) {
    super(props)

    this.state = { reflections: [] };

}
    // Runs on start
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_REFLECTIONS'
        })
    } // end componentDidMount


    render(){
        return(
            <div>
                <h2>View Reflections</h2>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Display);