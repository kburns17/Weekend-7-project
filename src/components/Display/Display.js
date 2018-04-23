import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = reduxState => ({
    reduxState
});

class Display extends Component{
    // constructor(props) {
    // super(props)

    // // this.state = { reflections: [] };
    // }

    // Runs on start
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_REFLECTIONS'
        })
    } // end componentDidMount


deleteReflection = (reflection) => {
    console.log(this.state);
    this.props.dispatch({
        type: 'DELETE_REFLECTION'
        
    })  
}


    render(){
        let reflectionsArray = this.props.reduxState.reflectionReducer.map((reflection) => {
            return (<p key={reflection.id}>{reflection.topic} {reflection.description} 
                            {reflection.bookmarked} {reflection.date} <button onClick={this.deleteReflection}>Delete</button></p>)
        });

        return(
            <div>
                <h2>View Reflections</h2>
                    {reflectionsArray}
            {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
            </div>
        )
    }
}


export default connect(mapStateToProps)(Display);