import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';

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

import App from '../pages/index.js';

const app = shallow(<App />);

const text = app.find(Container);

console.log(text);

describe('With Enzyme', () => {
  it('App shows "Token"', () => {
    expect(app.getElements().find(<Text />)).toBe(true);
  });
});

describe('With Enzyme', () => {
  it('App shows "login" button', () => {
    expect(content.contains([<button>error</button>]));
  });
});

// uncomment for snapshot

// describe('With Snapshot Testing', () => {
//   it('App shows "Hello world!"', () => {
//     const component = renderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
