import {Field, reduxForm} from "redux-form";
import * as React from "react";

const LoginForm = (props: any) => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
          />
        </div>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'login'
})(LoginForm);