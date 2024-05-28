//NextJS

//MATERIAL DESIGN
//components
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


//Components
import PasswordTextField from '@/app/_components/PasswordTextField';


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<Container maxWidth='md' >
			<Stack gap={2} >
				<Typography
					variant='h5'
					component='p'
					align='center'
				>
					Información
				</Typography>
				<Stack gap={1} >
					<TextField
						required
						name='name'
						label='Nombre(s)'
					/>
					<TextField
						required
						name='last-name'
						label='Apellido(s)'
					/>
					<TextField
						required
						name='telephone'
						label='Número de teléfono'
						type='tel'
					/>
					<TextField
						required
						name='email'
						label='Correo electrónico'
						type='email'
					/>
					<PasswordTextField />
					<PasswordTextField
						name='confirm-password'
						label='Confirmar contraseña'
					/>
				</Stack>
				<Stack direction='row' gap={5} justifyContent='space-evenly' >
					<Button variant='contained' >
						Cancelar
					</Button>
					<Button variant='contained' >
						Guardar
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
};


export default Page; //Export main component
