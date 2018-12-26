import * as types from './../constants/ActionTypes';
const uuidv1 = require('uuid/v1');

var data = JSON.parse(localStorage.getItem('arrayProducts'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LIST_ALL:
			return state;
		default: return state;
	}
}

export default myReducer;