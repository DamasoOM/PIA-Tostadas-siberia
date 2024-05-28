//NextJS
import { supabase } from '@/utils/supabase';

//ReactJS


//MATERIAL DESIGN
//Components
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


//components




//Main component content
const getData = async () => {
	const selectQuery = supabase
		.from('dishes')
		.select();

	const {data, error} = await selectQuery;

		
	if(error){
		throw new Error(error.message, {
			cause: error.details,
		});
	}

	return data;
}


const Page = async(): Promise<JSX.Element> => {

	// const dishes = await getData();


	//Main component render
	return (
		<>
			<Container
			maxWidth='sm'
			sx={{
				flexGrow: 1,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'left',
			}}>
				<Typography>
					TOSTADAS
				</Typography>
				<Card>
					<CardContent>
						
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						
					</CardContent>
				</Card>
				<Typography>
					TACOS
				</Typography>
				<Card>
					<CardContent>
						
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						
					</CardContent>
				</Card>
				<Typography>
					CONSOMÉ
				</Typography>
				<Typography>
					CALDO
				</Typography>
				<Typography>
					ARROZ
				</Typography>
				<Typography>
					BEBIDAS Y MÁS
				</Typography>
				<Typography>
					COMBOS
				</Typography>

			</Container>
		</>
	);
};


export default Page; //Export main component
