import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const mapStateToProps = reduxState => ({
    reduxState
    });

class CustomNavbar extends Component {

    render(){
        return(
            <div>
                <Navbar default collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      Reflection Board Home
                    {/* <a href="#home">React-Bootstrap</a> */}
                    </Navbar.Brand>
                  </Navbar.Header>
                 <Nav pullRight>
                    <NavItem eventKey={1} href="/add">
                    Add Reflection
                    </NavItem>
                    <NavItem eventKey={2} href="/display">
                    View Reflections
                    </NavItem>
                 </Nav>
                </Navbar>
            </div>
        )
    }

}

export default connect(mapStateToProps)(CustomNavbar);

