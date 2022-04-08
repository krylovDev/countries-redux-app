export const selectCountriesInfo = ({ countries }) => ({
	status: countries.status,
	error: countries.error,
	qty: countries.list.length,
})

export const selectVisibleCountries = ({ countries }, { search = '', region = "" }) => {
	return countries.list.filter(
		country => (country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
		)
	)
}
