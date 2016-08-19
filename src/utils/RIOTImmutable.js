import Immutable from 'immutable';

export function addToList(List, element) {
	if(List === undefined || element === undefined) {
		throw new Error("List or element parameters are missing. Check the RIOTImmutable addToList method." );
	}
	return List.push(element);
}

export function removeFromListByIdx(List, idx) {
	if(List === undefined || idx === undefined) {
		throw new Error("List or idx parameters are missing. Check the RIOTImmutable removeFromListByIdx method." );
	}
	return List.delete(idx);
}

export function removeAllFromList() {
	return Immutable.List();	
}