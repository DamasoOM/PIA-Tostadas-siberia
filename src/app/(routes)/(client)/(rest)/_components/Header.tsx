//NextJS
'use client';
import Image from 'next/image';
import Link from 'next/link';


import Route from '@/app/_configuration/routes';


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
import PersonIcon from '@mui/icons-material/Person';


//Styles
import { kPrimaryColor } from '@/app/_configuration/constants';
import { link } from 'fs';


//Main component content
const Header = (): JSX.Element => {
	//Main component render
	return (
		<AppBar
			position='fixed'
			elevation={1}
			sx={{
				backgroundColor: 'white',
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			<Toolbar>
				<Stack direction='row' alignItems='center' justifyContent='space-between' width='100%' >
					<Stack direction='row' alignItems='center' component={Link}
							href={Route.HOME} >
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
							<IconButton LinkComponent={Link} href={Route.MY_ACCOUNT_INFORMATION} >
								<PersonIcon />
							</IconButton>
							<Button
								variant='contained'
								LinkComponent={Link}
								href={Route.SIGN_IN}
							>
								Iniciar sesión
							</Button>
							<Button
								variant='contained'
								LinkComponent={Link}
								href={Route.SIGN_UP}
							>
								Registrarse
							</Button>
						</Stack>
						<IconButton LinkComponent={Link} href={Route.CHECKOUT} >
							<ShoppingCartOutlinedIcon />
						</IconButton>
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};


export default Header; //Export main component
