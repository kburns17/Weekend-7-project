import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import Add from '../Add/Add';
import Display from '../Display/Display';
import Bookmarks from '../Bookmarks/Bookmarks';
import CustomNavbar from '../CustomNavbar/CustomNavbar';

class Nav extends Component {
    render(){
        return(
            <Router>
              <div>
               <CustomNavbar />
               <Route path="/add" component={Add}/>
               <Route path="/display" component={Display}/>
               <Route path="/bookmarks" component={Bookmarks}/>
              </div>
            </Router>
        )
    }
}


export default Nav;