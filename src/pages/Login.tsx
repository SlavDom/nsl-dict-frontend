import * as React from 'react';
import {Component} from "react";
import LoginForm from "../components/LoginForm";
import config from "../lib/config";
import {connect} from "react-redux";
import {userActions} from "../redux/user";
import {RouteComponentProps} from "react-router";

interface IProps extends RouteComponentProps<{}> {
  login: () => any;
}

class Login extends Component<IProps> {
  public state = {
    errors: void 0 as string,
  };
  constructor(props: IProps) {
    super(props);
    this.login = this.login.bind(this);
  }
  public login(data: any) {
    fetch(`${config.localServer}/auth/login`, {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: 'post',
      mode: 'no-cors',
    }).then((res: any) => {
      // tslint:disable-next-line no-console
      console.log(res.body);
      localStorage.setItem("jwt", res.token);
      this.props.login();
      this.props.history.push("/");
    }).catch(() => this.setState({ errors: true }));
  }
  public render() {
    return (
      <div>
        <h3>Authorization form</h3>
        <LoginForm onSubmit={this.login}/>
        {this.state.errors && <p>Credentials are not valid.</p>}
      </div>
    );
  }
}

export default connect((state: any) => ({
  user: state.user,
}), {
  login: userActions.login,
})(Login);