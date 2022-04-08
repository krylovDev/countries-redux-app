import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	selectCountriesInfo,
	selectVisibleCountries
} from "../store/countries/countries.selectors";
import { loadCountries } from "../store/countries/countries.actions";
import { selectControls } from "../store/controls/controls.selectors";

export const HomePage = () => {
	const navigate = useNavigate();
	
	const dispatch = useDispatch()
	const { search, region } = useSelector(selectControls)
	const countries = useSelector((state) =>
		(selectVisibleCountries(state, { search, region })))
	const { status, error, qty } = useSelector(selectCountriesInfo)
	
	useEffect(() => {
		if (!qty) {
			dispatch(loadCountries())
		}
	}, [qty, dispatch])
	
	return (
		<>
			<Controls/>
			
			{ error && <h2 style={ { color: "red" } }>Невозможно получить данные</h2> }
			{ status === 'loading' && <h2 style={ { textAlign: "center" } }>Идёт загрузка...</h2> }
			{ status === 'received' && (
				<List>
					{ countries.map(({ flags, name, population, region, capital }) => {
						const countryInfo = {
							img: flags.png,
							name: name,
							info: [
								{
									title: 'Population',
									description: population.toLocaleString(),
								},
								{
									title: 'Region',
									description: region,
								},
								{
									title: 'Capital',
									description: capital,
								},
							],
						};
						
						return (
							<Card
								key={ name }
								onClick={ () => navigate(`/country/${ name }`) }
								{ ...countryInfo }
							/>
						);
					}) }
				</List>
			) }
		</>
	);
};
