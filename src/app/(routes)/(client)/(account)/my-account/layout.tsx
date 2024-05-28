//NextJS
import Link from 'next/link';


//ReactJS
import { ReactNode } from 'react';


import Route from '@/app/_configuration/routes';


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';


//Components
import DrawerListItemButton from './_components/DrawerListItemButton';


//Types
type LayoutProps = {
	readonly children: ReactNode;
};


//Main component content
const Layout = ({children}: LayoutProps): JSX.Element => {

	const drawerWidth = 600;

	const listData = [
		{
			children: 'Información',
			href: Route.MY_ACCOUNT_INFORMATION,
		},
		{
			children: 'Direcciones',
			href: Route.MY_ACCOUNT_ADDRESSES,
		},
	];

	const listItems = listData.map( (data, index) => (
		<DrawerListItemButton key={`client-my-account-layout-drawer-list-item-${index}`} href={data.href} >
				{data.children}
		</DrawerListItemButton>
	) );


	//Main component render
	return (
		<>
			<Drawer
				variant='permanent'
				sx={{
					flexShrink: 0,
					width: drawerWidth,
				}}
			>
				<Toolbar
					sx={{
						height: 84,
					}}
				/>
				<Toolbar>
					<Typography variant='h6' >
						Mi cuenta
					</Typography>
				</Toolbar>
				<Divider />
				<Box sx={{ overflow: 'auto' }} >
					<List>
						{listItems}
					</List>
				</Box>
			</Drawer>
			{children}
		</>
	);
};


export default Layout; //Export main component
