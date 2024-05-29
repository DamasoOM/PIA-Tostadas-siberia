//NextJS
import Link from 'next/link';


import createAddress from '@/app/_actions/createAddress';
import Route from '@/app/_configuration/routes';


//MATERIAL DESIGN
//components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


//Main component content
const Page = (): JSX.Element => {

	const textFieldsData = [
		{
			name: 'alias',
			label: 'Alias',
		},
		{
			name: 'street',
			label: 'Calle',
		},
		{
			name: 'between-streets',
			label: 'Entre calles',
		},
		{
			name: 'number',
			label: 'Número exterior',
		},
		{
			name: 'indoor-number',
			label: 'Número interior',
		},
		{
			name: 'colony',
			label: 'Colonia',
		},
		{
			name: 'city',
			label: 'Municipio',
		},
		{
			name: 'state',
			label: 'Estado',
		},
		{
			name: 'posta-code',
			label: 'Código postal',
		},
		{
			name: 'references',
			label: 'Referencias',
		},
	];


	//Main component render
	return (
		<Container maxWidth='md' >
			<Box component='form' action={createAddress} >
				<Stack gap={2} >
					<Typography
						variant='h5'
						component='p'
						align='center'
					>
						Nueva dirección
					</Typography>
					<Stack gap={1} >
						{textFieldsData.map( (data) => (
							<TextField
								{...data}
								required
								key={`addresses-new-addres-${data.name}-field`}
							/>
						) )}
					</Stack>
					<Stack direction='row' gap={5} justifyContent='space-evenly' >
						<Button variant='contained' LinkComponent={Link} href={Route.MY_ACCOUNT_ADDRESSES} >
							Cancelar
						</Button>
						<Button variant='contained' type='submit' >
							Guardar
						</Button>
					</Stack>
				</Stack>
			</Box>
		</Container>
	);
};


export default Page; //Export main component
