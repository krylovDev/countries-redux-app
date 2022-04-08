import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme.reducers";
import { countriesReducer } from "./countries/countries.reducers";
import { controlsReducer } from "./controls/controls.reducers";
import { detailsReducer } from "./details/details.reducers";

export const rootReducer = combineReducers({
	theme: themeReducer,
	countries: countriesReducer,
	controls: controlsReducer,
	details: detailsReducer
})
