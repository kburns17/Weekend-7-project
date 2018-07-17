import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

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
                        <button onClick={()=>this.deleteReflection(bookmark)}>Delete</button>
                        <button onClick={()=>this.bookmarkReflection(bookmark)}>UnBookmark</button>
                    </Panel>
                    </div>)
        })
        return(
            <div>
                {JSON.stringify(this.props.reduxState.bookmarkReducer, null, 2)}
                <h2><strong>Memorable Reflections</ strong></h2>
                <div>{bookmarkArray}</div>
            </div>
            )
    }

}



export default connect(mapStateToProps)(Bookmarks);