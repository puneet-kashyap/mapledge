import React from 'react';
import { shallow, configure } from 'enzyme';
import Footer from './Footer';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import assets from '../../assets/constants';

configure({ adapter: new Adapter() });
const wrapper = shallow(<Footer />);

it('Footer component renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Footer />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should display all the contacts info', () => {
  wrapper.find('.name').forEach((node, index) => {
    expect(node.text()).toBe(assets.contacts[index].name);
  });
  wrapper.find('.phone').forEach((node, index) => {
    expect(node.text()).toBe(assets.contacts[index].phone);
  });
  wrapper.find('.email').forEach((node, index) => {
    expect(node.text()).toBe(assets.contacts[index].email);
  });
});

it('should display sub footer', () => {
  expect(wrapper.find('.footer-below').text()).toContain(assets.companyName)
})
