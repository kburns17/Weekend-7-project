import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Display.css';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
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
        return (<div key={reflection.id}>
                    <Panel className="displayItem">
                        <h3>{reflection.topic}</h3>
                        <p>{reflection.description}</p>
                        <p>{reflection.bookmarked}</p><p>{date}</p>          
                        <button onClick={()=>this.deleteReflection(reflection)}>Delete</button>
                        <button onClick={()=>this.bookmarkReflection(reflection)}>Bookmark</button>
                    </Panel></div>)
                });

        return(
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <h2><strong>View Reflections</strong></h2>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <div className="displayWrapper"> {reflectionsArray}</div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

// connect enables dispatch on props
export default connect(mapStateToProps)(Display);