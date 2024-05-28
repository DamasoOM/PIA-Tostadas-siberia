//NextJS
import Image from 'next/image';


//MATERIAL DESIGN
//Components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//Icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


//Styles
import { kPrimaryColor } from '@/app/_configuration/constants';


//Main component content
const Page = (): JSX.Element => {


	//Main component render
	return (
		<>
			<AppBar
				sx={{
					backgroundColor: 'white',
				}}
			>
				<Toolbar>
					<Stack direction='row' alignItems='center' justifyContent='space-between' width='100%' >
						<Stack direction='row' alignItems='center' >
							<Image
								src='/assets/logo.png'
								alt='Logo'
								width={775}
								height={461}
								style={{
									width: 775/5.5,
									height: 461/5.5,
								}}
							/>
							<Typography
								variant='h1'
								fontSize={25}
								fontWeight='bold'
								fontStyle='italic'
								color={kPrimaryColor}
							>
								TOSTADAS EL CERRO
							</Typography>
						</Stack>
						<Stack direction='row' alignItems='center' gap={2.5} >
							<Stack direction='row' alignItems='center' gap={4} >
								<Button variant='contained'>
									Iniciar sesión
								</Button>
								<Button variant='contained' >
									Registrarse
								</Button>
							</Stack>
							<IconButton>
								<ShoppingCartOutlinedIcon />
							</IconButton>
						</Stack>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	);
};


export default Page; //Export main component
