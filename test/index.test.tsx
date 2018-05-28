import * as React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import sinon from 'sinon';
import App from './App';

const expect = chai.expect;
Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('render <App /> component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h1').text()).to.equal('toogle state:close');
    expect(wrapper.find('button').text()).to.equal('open');
  });

  it('<App /> button simulates click events', () => {
    const wrapper = mount(<App />);
    const onButtonClick = sinon.spy();

    wrapper.find('button').simulate('click');

    expect(wrapper.find('h1').text()).to.equal('toogle state:open');
    expect(wrapper.find('button').text()).to.equal('close');
  });
});
