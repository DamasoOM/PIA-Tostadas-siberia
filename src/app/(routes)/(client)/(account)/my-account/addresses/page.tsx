//NextJS
import Link from 'next/link';


import Route from '@/app/_configuration/routes';
import { createClient } from '@/utils/supabase/client';


//MATERIAL DESIGN
//components
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';


export const revalidate = 0;
export const dynamic = 'force-dynamic';


//Components
import AddressListItemButton from './_components/AddressListItemButton';


const getAddresses = async () => {
	const supabase = createClient();
	
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
				<Button LinkComponent={Link} href={Route.MY_ACCOUNT_NEW_ADDRESS} >
					Agregar dirección
				</Button>
				<Divider />
				{listItems.length === 0 ? (
					<Typography align='center' >
						Sin direcciones guardadas
					</Typography>
				) : (
					<List>
						{listItems}
					</List>
				)}
			</Stack>
		</Container>
	);
};


export default Page; //Export main component
