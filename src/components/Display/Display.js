import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Display.css';
import { Panel } from 'react-bootstrap';
import moment from 'moment';

const mapStateToProps = reduxState => ({
    reduxState
});

class Display extends Component{
    constructor(props) {
    super(props)

    }

    // Runs on start
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_REFLECTIONS'
        })
    } // end componentDidMount

    bookmarkReflection = (reflection) => {
    this.props.dispatch({
        type: 'BOOKMARK',
        payload: reflection
        })
    }


    deleteReflection = (reflection) => {
    this.props.dispatch({
        type: 'DELETE_REFLECTION',
        payload: reflection
        })  
    }


    render(){
        let date = moment(this.props.reduxState.reflectionReducer.date).format('MMMM Do YYYY');

        let reflectionsArray = this.props.reduxState.reflectionReducer.map((reflection) => {
            return (<Panel key={reflection.id}><h3>{reflection.topic}</h3> <div>{reflection.description} </div>
                            {reflection.bookmarked} {date} 
                            <div><button onClick={()=>this.deleteReflection(reflection)}>Delete</button></div>
                            <div><button onClick={()=>this.bookmarkReflection(reflection)}>Bookmark</button></div>
                            </Panel>)
                    });

            return(
                <div>
                    
                    <h2>View Reflections</h2>
                    <div className="displayItem"> {reflectionsArray}</div>
                </div>
            )
    }
}

// connect enables dispatch on props
export default connect(mapStateToProps)(Display);