import React from 'react';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

const Content = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  padding: 20px;
`;

const Text = styled.h1`
  color: Black;
  font-size: 50px;

  &.small {
    font-size: 20px;
  }
`;

const SideNav = styled.div`
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s;

  &.show {
    width: 30%;
  }

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    cursor: pointer;
  }

  a:hover {
    color: #f1f1f1;
  }

  a.closebtn {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
`;

export default class Index extends React.Component {
  state = {
    isDrawerOpen: false
  };
  toogleDrawer = () => {
    console.log('lul');
    this.setState(prevState => {
      return { isDrawerOpen: !prevState.isDrawerOpen };
    });
  };
  render() {
    return (
      <Container>
        <Content>
          <button onClick={this.toogleDrawer}>Open Nav</button>
          <SideNav className={this.state.isDrawerOpen ? 'show' : ''}>
            <a onClick={this.toogleDrawer} className="closebtn">
              &times;
            </a>
            <a>LOL</a>
          </SideNav>
          <Text>Token</Text>
          <UserContext.Consumer>
            {context => {
              return (
                <React.Fragment>
                  <Text className="small">{context.token}</Text>
                  <button
                    onClick={() => {
                      if (context.token) context.clearToken();
                      else context.setToken('new token');
                    }}
                  >
                    {context.token ? 'logout' : 'login'}
                  </button>
                </React.Fragment>
              );
            }}
          </UserContext.Consumer>
        </Content>
      </Container>
    );
  }
}
