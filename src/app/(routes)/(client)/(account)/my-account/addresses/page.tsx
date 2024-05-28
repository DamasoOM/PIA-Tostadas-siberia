import { supabase } from '@/utils/supabase';


//MATERIAL DESIGN
//components
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';


//Components
import AddressListItemButton from './_components/AddressListItemButton';


const getAddresses = async () => {
	const selectQuery = supabase
		.from('addresses')
		.select();

	const { data, error } = await selectQuery;


	if(error){
		throw new Error(error.message, {
			cause: error.details,
		});
	}


	return data;
};


//Main component content
const Page = async (): Promise<JSX.Element> => {

	const addresses = await getAddresses();


	const listItems = addresses.map( (address, index) => (
		<AddressListItemButton {...address} key={`my-account-addresses-address-list-item-${index}`} />
	) );


	//Main component render
	return (
		<Container maxWidth='md' >
			<Stack gap={2} >
				<Typography
					variant='h5'
					component='p'
					align='center'
				>
					Direcciones
				</Typography>
				<Button>
					Agregar dirección
				</Button>
				<Divider />
				<List>

				</List>
			</Stack>
		</Container>
	);
};


export default Page; //Export main component
