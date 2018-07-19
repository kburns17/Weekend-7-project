import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

const mapStateToProps = reduxState => ({
reduxState
});

class Bookmarks extends Component {


    //GETS all boomarked reflections on page load
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_BOOKMARKED'
        })
    }

    render(){
        let bookmarkArray = this.props.reduxState.bookmarkReducer.map((bookmark)=>{
        return(<div key={bookmark.id}>
                    <Panel className="displayItem">
                        <h3>{bookmark.topic}</h3>
                        <p>{bookmark.description}</p>
                        <p>{bookmark.date}</p>          
                    </Panel>
                </div>)
        })
        return(
            <div>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h3><strong>Memorable Reflections</strong></h3>
                </Col>
             <Grid>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={4}>
                        {/* {JSON.stringify(this.props.reduxState.bookmarkReducer, null, 2)} */}
                        <div className="displayWrapper">{bookmarkArray}</div>
                    </Col>
                </Row>
             </Grid>
            </div>
            )
    }

}



export default connect(mapStateToProps)(Bookmarks);