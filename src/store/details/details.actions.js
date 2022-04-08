export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/SET_ERROR'
export const SET_COUNTRY = '@@details/SET_COUNTRY'
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS'

const setLoading = () => ({
	type: SET_LOADING
})

const setError = (err) => ({
	type: SET_ERROR,
	payload: err
})

const setCountry = (country) => ({
	type: SET_COUNTRY,
	payload: country
})

const setNeighbor = (countries) => ({
	type: SET_NEIGHBORS,
	payload: countries
})


export const loadCountryByName = (name) => (dispatch, _, { client, api }) => {
	dispatch(setLoading())
	client.get(api.searchByCountry(name))
		.then(({ data }) =>
			dispatch(setCountry(data[0])))
		.catch((err) => dispatch(setError(err)))
}

export const loadNeighborsByBorders = (borders) => (dispatch, _, { client, api }) => {
	client.get(api.filterByCode(borders))
		.then(({ data }) =>
			dispatch(setNeighbor(data.map(({ name }) => name))))
		.catch(console.error)
}
