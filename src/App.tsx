import * as React from 'react';
import {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import './App.css';
import {Manager} from './components/Manager';

interface IState {
  isOpen: boolean;
  manager: boolean;
}

class App extends Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
      manager: false,
    };
    this.openManager = this.openManager.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  public render() {
    return (
      <div>
        <Navbar color="faded" light={true} expand="md">
          <NavbarBrand className="mr-auto">Managing nsl dictionary</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink onClick={this.openManager}>Add new word</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.manager ? <Manager/> : null}
      </div>
    );
  }

  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  private openManager() {
    this.setState({
      manager: !this.state.manager,
    });
  }
}

export default App;
