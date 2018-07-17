import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Add from '../Add/Add';
import Display from '../Display/Display';
import CustomNavbar from '../CustomNavbar/CustomNavbar';

class Nav extends Component {
    render(){
        return(
            <Router>
                <div>
               <CustomNavbar />
               <Route path="/add" component={Add}/>
               <Route path="/display" component={Display}/>
              </div>
            </Router>
        )
    }
}


export default Nav;