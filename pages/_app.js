import App, { Container } from 'next/app';
import React from 'react';
import { UserContext } from '../contexts/UserContext';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = {
    token: null
  };

  setToken = token => {
    this.setState({ token });
  };

  clearToken = () => {
    this.setState({ token: null });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserContext.Provider
        value={{
          token: this.state.token,
          setToken: this.setToken,
          clearToken: this.clearToken
        }}
      >
        <Container>
          <Component {...pageProps} />
        </Container>
      </UserContext.Provider>
    );
  }
}
