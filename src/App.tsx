import * as React from 'react';
import {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import './App.css';
import Router from "./Router";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {userActions} from "./redux/user";
import * as jwtDecode from 'jwt-decode';

interface IState {
  isOpen: boolean;
}

interface IProps extends RouteComponentProps<{}> {
  user: any;
  login: () => any;
}

class App extends Component<IProps, IState> {
  public state = {
    isOpen: false,
  };
  constructor(props: IProps) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  public componentWillMount() {
    const token = localStorage.getItem('jwt');
    if (token && token !== 'undefined') {
      const tokenData: any = jwtDecode(token);
      if (tokenData.expiredIn < Date.now()) {
        this.props.login();
      }
    }
  }

  public render() {
    return (
      <div>
        <Navbar color="faded" light={true} expand="md">
          <NavbarBrand className="mr-auto" href="/">Managing nsl dictionary</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            {this.props.user.authorized
              ? (
              <Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink href="/manage/words">Add new word</NavLink>
                </NavItem>
              </Nav>)
              : (<Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </Nav>)}
          </Collapse>
        </Navbar>
        <Router/>
      </div>
    );
  }

  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default connect((state: any) => (({
  user: state.user
})), {
  login: userActions.login,
})(withRouter(App));
