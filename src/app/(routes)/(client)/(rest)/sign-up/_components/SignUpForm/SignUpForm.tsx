//NextJS
import signUpAction from '@/app/_actions/signUpAction';


//Components
import PasswordTextField from '@/app/_components/PasswordTextField';


//MATERIAL DESIGN
//Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


//Main component content
const SignInForm = (): JSX.Element => {
	//Main component render
	return (
		<Box component='form' action={signUpAction} >
			<Stack gap={1} >
				<Typography variant='h5' >
					Iniciar sesión
				</Typography>
				<Stack gap={2} >
					<TextField
							required
							name='nombre'
							label='Nombre(s)'
							type='name'
						/>
					<TextField
							required
							name='apellido'
							label='Apellido(s)'
							type='name'
						/>
					<TextField
							required
							name='phone'
							label='Teléfono'
							type='name'
						/>
					<TextField
						required
						name='email'
						label='Correo electrónico'
						type='email'
					/>
					<PasswordTextField />
					<TextField
						required
						label='Confirmar contraseña'
					/>
					<Button variant='contained' type='submit' >
						Entrar
					</Button>
				</Stack>
			</Stack>
		</Box>
	);
};


export default SignInForm; //Export main component
