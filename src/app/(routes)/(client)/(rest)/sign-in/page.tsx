//NextJS
import Link from 'next/link';


import Route from '@/app/_configuration/routes';


//MATERIAL DESIGN
//Components
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


//Components
import SignInForm from './_components/SignInForm';


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<Container
			maxWidth='sm'
			sx={{
				flexGrow: 1,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<Stack gap={2} >
				<SignInForm />
				<Box display='flex' >
					<Button LinkComponent={Link} href={Route.SIGN_UP} >
						Crear una cuenta
					</Button>
				</Box>
			</Stack>
		</Container>
	);
};


export default Page; //Export main component
