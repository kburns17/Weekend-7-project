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


    render(){
        console.log(this.props.reduxState)
        let reflectionsArray = this.props.reduxState.reflectionReducer.map((reflection) => {
            return (<p key={reflection.id}>{reflection.topic} {reflection.description} {reflection.bookmarked} {reflection.date}</p>)
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