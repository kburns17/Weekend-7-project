import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        return(
            <div>
                <h2><strong>Memorable Reflections</ strong></h2>
            </div>
        )
    }

}



export default connect(mapStateToProps)(Bookmarks);