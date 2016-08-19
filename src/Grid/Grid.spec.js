import React from 'react';
import Immutable from 'immutable';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
	it('renders without exploding', () => {
		const wrapper = shallow(<Grid />);
		expect(wrapper.length).to.equal(1);
	});

	it('should have a rows Immutable List in state', () => {	
		const wrapper = shallow(<Grid />);
		
		expect(Immutable.List.isList(wrapper.state().rows)).to.equal(true);
	});	

	it('should have an "Add new row" button', () => {
		const wrapper = shallow(<Grid />);
		expect(wrapper.find('.add').length).to.equal(1);
	});

	it('should have a delete button on each row', () => {
		const wrapper = shallow(<Grid />);
		expect(wrapper.state().rows.size).to.equal(0);

		wrapper.find('.add').simulate('click');
		expect(wrapper.find('.row').childAt(1).hasClass('delete')).to.equal(true);	
	});
	
	it('should add a new row when plus button is clicked', () => {
		const wrapper = shallow(<Grid />);
		wrapper.find('.add').simulate('click');		

		expect(wrapper.state().rows.size).to.equal(1);
	});
	
	it('should remove row when delete button is clicked', () => {
		const wrapper = shallow(<Grid />);

		// add row so delete button is present
		wrapper.find('.add').simulate('click');
		// state now has 1
		expect(wrapper.state().rows.size).to.equal(1);

		// remove row
		wrapper.find('.row').childAt(1).simulate('click');
		// state is now empty
		expect(wrapper.state().rows.size).to.equal(0);
	});

	it('should keep count of number of rows', () => {
		const wrapper = shallow(<Grid />);
		wrapper.find('.add').simulate('click');

		expect(+wrapper.find('.row-count').text()).to.equal(wrapper.state().rows.size);
	});

	it('should remove all rews when "Delete all rows" button is clicked', () => {
		const wrapper = shallow(<Grid />);
		wrapper.find('.remove-all').simulate('click');

		expect(wrapper.state().rows.size).to.equal(0);
	});
})