import Immutable from 'immutable';
import { expect } from 'chai';
import {
	addToList, 
	removeFromListByIdx,
	removeAllFromList
} from './RIOTImmutable';

describe('RIOTImmutable Utils', () => {
	
	it('runs without exploding', () => {
		expect(true).to.equal(true);
	});

	it('should add a new element to an Immutable List', () => {
		const List = Immutable.List();
		const newList = addToList(List, "new element");

		expect(() => addToList()).to.throw(Error);
		expect(newList.size).to.equal(1);
	});

	it('should remove an element from an Immutable List', () => {
		const List = Immutable.List([1, 2]);
		expect(List.size).to.equal(2);

		expect(() => removeFromListByIdx()).to.throw(Error);
	
		const newList = removeFromListByIdx(List, 0);
		expect(newList.size).to.equal(1);
		expect(newList.get(0)).to.equal(2);
	});

	it('should return an empty Immutable List', () => {
		const List = Immutable.List([1, 2]);
		expect(List.size).to.equal(2);

		const newList = removeAllFromList();
		expect(newList.size).to.equal(0);
	});
});