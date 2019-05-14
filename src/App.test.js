import React from 'react';
import Home from './components/home/Home';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';


it('Home component renders correctly', () => {
  const tree = renderer.create(<Router><Home/></Router>).toJSON();
  expect(tree).toMatchSnapshot();
})


