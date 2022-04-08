import { SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORS } from "./details.actions";
import { CLEAR_DETAILS } from "../countries/countries.actions";

const initialState = {
	currentCountry: "",
	status: "idle",
	error: null,
	neighbors: []
}

export const detailsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return {
				...state,
				error: null,
				status: 'loading'
			}
		
		case CLEAR_DETAILS:
			return initialState
		
		case SET_ERROR:
			return {
				...state,
				error: payload,
				status: 'rejected'
			}
		
		case SET_NEIGHBORS:
			return {
				...state,
				neighbors: payload
			}
		
		case SET_COUNTRY:
			return {
				...state,
				currentCountry: payload,
				status: 'received'
			}
		
		default:
			return state
	}
}
