import React from 'react';
import Immutable from 'immutable';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  let wrapper = null;

  beforeEach(() => {
    // Creates a new instance of Grid component before each test
    wrapper = shallow(<Grid />);    
  });

  it('renders without exploding', () => {
    expect(wrapper.length).to.equal(1);
  });

  describe('Component state', () => {
    it('should have a rows Immutable List in state', () => {  
      expect(Immutable.List.isList(wrapper.state().rows)).to.be.true;
    }); 

    it('should keep count of number of rows', () => {
      wrapper.find('.add').simulate('click');

      expect(+wrapper.find('.row-count').text()).to.equal(wrapper.state().rows.size);
    });
  });

  describe('Add row feature', () => {
    it('should have an "Add new row" button', () => {
      expect(wrapper.find('.add').length).to.equal(1);
    });
  
    it('should add a new row when plus button is clicked', () => {
      wrapper.find('.add').simulate('click');   

      expect(wrapper.state().rows.size).to.equal(1);
    });
  });

  describe('Remove row feature', () => {
    it('should have a delete button on each row', () => {
      expect(wrapper.state().rows.size).to.equal(0);

      wrapper.find('.add').simulate('click');
      expect(wrapper.find('.row').childAt(1).hasClass('delete')).to.be.true;  
    });
    
    it('should remove row when delete button is clicked', () => {
      // add row so delete button is present
      wrapper.find('.add').simulate('click');
      // state now has 1
      expect(wrapper.state().rows.size).to.equal(1);

      // remove row
      wrapper.find('.row').childAt(1).simulate('click');
      // state is now empty
      expect(wrapper.state().rows.size).to.equal(0);
    });

    it('should remove all rews when "Delete all rows" button is clicked', () => {
      wrapper.find('.remove-all').simulate('click');

      expect(wrapper.state().rows.size).to.equal(0);
    });
  });
})