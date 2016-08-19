import React, { Component } from 'react';
import Immutable from 'immutable';
import {
	addToList, 
	removeFromListByIdx,
	removeAllFromList
} from '../utils/RIOTImmutable';
import './Grid.css';

export default class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: Immutable.List()
		}
		this.addRow = this.addRow.bind(this);
		this.removeAll = this.removeAll.bind(this);
	}

	addRow() {
		const newList = addToList(this.state.rows, "new element");
		this.setState({ rows: newList });
	}

	removeRow(idx) {
		const newList = removeFromListByIdx(this.state.rows, idx);
		this.setState({ rows: newList });
	}

	removeAll() {
		const newList = removeAllFromList();
		this.setState({ rows: newList });
	}

	render() {	
		const rows = this.state.rows.map((row, idx) => {
			return (
				<div key={idx} className="row">
					<span>{row}</span>
					<button className="delete" onClick={this.removeRow.bind(this, idx)}>delete</button>
				</div>
			);
		});

		return (
			<div className="content">
				<h2>Cool Grid</h2>
				<button className="add" onClick={this.addRow}> Add new row </button>
				<button className="remove-all" onClick={this.removeAll}> Delete all rows </button>
				<div className="table">
					{rows}
				</div>
				<div>
					Number of rows: <span className="row-count">{this.state.rows.size}</span>
				</div>
			</div>
		)
	}
}