//NextJS
import signInAction from '@/app/_actions/signInAction';


//MATERIAL DESIGN
//Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


//Components
import PasswordTextField from '@/app/_components/PasswordTextField';


//Main component content
const SignInForm = (): JSX.Element => {
	//Main component render
	return (
		<Box component='form' action={signInAction} >
			<Stack gap={1} >
				<Typography variant='h5' >
					Iniciar sesión
				</Typography>
				<Stack gap={2} >
					<TextField
						required
						name='email'
						label='Correo electrónico'
						type='email'
					/>
					<PasswordTextField />
					<Button variant='contained' type='submit' >
						Entrar
					</Button>
				</Stack>
			</Stack>
		</Box>
	);
};


export default SignInForm; //Export main component
