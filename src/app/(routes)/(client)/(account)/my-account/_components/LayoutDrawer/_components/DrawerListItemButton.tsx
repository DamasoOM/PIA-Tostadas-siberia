//NextJS
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import Route from "@/app/_configuration/routes";


//MATERIAL DESIGN
//Components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


//Types
type DrawerListItemButtonProps = {
	readonly href: Route;
	readonly children: string;
};


//Main component content
const DrawerListItemButton = ({href, children}: DrawerListItemButtonProps): JSX.Element => {

	const pathname = usePathname();

	const selected = pathname === href;


	//Main component render
	return (
		<ListItem disablePadding >
			<ListItemButton
				LinkComponent={Link}
				href={href}
				selected={selected} 
			>
				<ListItemText>
					{children}
				</ListItemText>
			</ListItemButton>
		</ListItem>
	);
};


export default DrawerListItemButton; //Export main component
