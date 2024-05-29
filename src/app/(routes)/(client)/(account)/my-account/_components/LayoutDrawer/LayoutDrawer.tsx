import Route from '@/app/_configuration/routes';


//MATERIAL DESIGN
//Components
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


//Components
import DrawerListItemButton from './_components/DrawerListItemButton';


//Main component content
const LayoutDrawer = (): JSX.Element => {

	const drawerWidth = 240;

	const itemsData = [
		{
			children: 'Información',
			href: Route.MY_ACCOUNT_INFORMATION,
		},
		{
			children: 'Direcciones',
			href: Route.MY_ACCOUNT_ADDRESSES,
		},
	];

	const listItems = itemsData.map( (item, index) => (
		<DrawerListItemButton href={item.href} key={`client-account-permanent-drawer-list-item-${index}`} >
			{item.children}
		</DrawerListItemButton>
	) );


	//Main component render
	return (
		<Drawer
			variant='permanent'
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
		>
			<Toolbar sx={{ height: 84, }} />
			<Toolbar sx={{ display: 'center', justifyContent: 'center' }} >
				<Typography
					align='center'
					variant='h5'
					component='p'
					fontWeight='bold'
				>
					Mi cuenta
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				{listItems}
			</List>
		</Drawer>
	);
};


export default LayoutDrawer; //Export main component
