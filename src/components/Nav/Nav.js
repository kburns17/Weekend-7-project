import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Add from '../Add/Add';
import Display from '../Display/Display';


class Nav extends Component {
    render(){
        return(
            <Router>
                <div>
                 <nav>
                    <ul>
                     <li>
                      <Link to="/add">Add Reflection</Link>
                     </li>
                     <li>
                      <Link to="/display">View Reflections</Link>
                     </li>
                    </ul>
                 </nav>
               <Route path="/add" component={Add}/>
               <Route path="/display" component={Display}/>
              </div>
            </Router>
        )
    }
}


export default Nav;