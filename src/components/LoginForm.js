import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Header } from './common';

class LoginForm extends Component {
  onEmailChange(text) {

  }

  render() {
    return (
      <Card>
        <Header headerText="Authentication">
          Login Form
        </Header>
        <CardSection>
          <Input
            label="Email"
            placeHolder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeHolder="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
