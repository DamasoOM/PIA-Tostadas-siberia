import { createClient } from '@/utils/supabase/client';


//MATERIAL DESIGN
//Components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


//Components
import DishCard from '../_components/DishCard';
import Cart from '@/app/(routes)/(client)/_components/Cart';


export const revalidate = 0;
export const dynamic = 'force-dynamic'


const getData = async (category: string) => {
	const supabase = createClient();
	
	const selectQuery = supabase
		.from('dishes')
		.select()
		.eq('category', category);

	
	const {data, error} = await selectQuery;
	
	
	if(error){
		throw new Error(error.message, {
			cause: error.details,
		});
	}
	
	return data;
}



//Main component content
const Page = async(): Promise<JSX.Element> => {
	
	const [ tostadas, tacos, consome, caldo, arroz, bebidas, combos ] = await Promise.all([
		getData('Tostadas'),
		getData('Tacos'),
		getData('Consomé'),
		getData('Caldo'),
		getData('Arroz'),
		getData('Bebidas'),
		getData('Combos'),
	]);
	
	
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
				}}
			>
				<Stack gap={4} >
					<Stack gap={1} >
						<Typography>
							TOSTADAS
						</Typography>
						<Stack gap={2} >
							{tostadas.map( (item, index) => (
								<DishCard key={`landing-dishes-dish-${item.category}-${index}`} {...item} />
							) )}
						</Stack>
					</Stack>

					<Stack gap={1} >
						<Typography>
							TACOS
						</Typography>
						<Stack gap={2} >
							{tacos.map( (item, index) => (
								<DishCard key={`landing-dishes-dish-${item.category}-${index}`} {...item} />
							) )}
						</Stack>
					</Stack>

					<Stack gap={1} >
						<Typography>
							CONSOMÉ
						</Typography>
						<Stack gap={2} >
							{consome.map( (item, index) => (
								<DishCard key={`landing-dishes-dish-${item.category}-${index}`} {...item} />
							) )}
						</Stack>
					</Stack>
					
					<Stack gap={1} >
						<Typography>
							CALDOS
						</Typography>
						<Stack gap={2} >
							{caldo.map( (item, index) => (
								<DishCard key={`landing-dishes-dish-${item.category}-${index}`} {...item} />
							) )}
						</Stack>
					</Stack>

					<Stack gap={1} >
						<Typography>
							ARROZ
						</Typography>
						<Stack gap={2} >
							{arroz.map( (item, index) => (
								<DishCard key={`landing-dishes-dish-${item.category}-${index}`} {...item} />
							) )}
						</Stack>
					</Stack>
					
					<Stack gap={1} >
						<Typography>
							BEBIDAS Y MÁS
						</Typography>
						<Stack gap={2} >
							{bebidas.map( (item, index) => (
								<DishCard key={`landing-dishes-dish-${item.category}-${index}`} {...item} />
							) )}
						</Stack>
					</Stack>

					<Stack gap={1} >
						<Typography>
							COMBOS
						</Typography>
						<Stack gap={2} >
							{combos.map( (item, index) => (
								<DishCard key={`landing-dishes-dish-${item.category}-${index}`} {...item} />
							) )}
						</Stack>
					</Stack>
				</Stack>
			</Container>
			<Container>
				<Cart/> {/* Renderiza la tarjeta aquí */}
			</Container>
		</>
	);
};


export default Page;
