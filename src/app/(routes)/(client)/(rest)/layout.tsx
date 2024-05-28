//ReactJS
import { ReactNode } from 'react';


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';


//Components
import Header from './_components/Header';
import Navbar from './_components/Navbar';


//Types
type LayoutProps = {
	readonly children: ReactNode;
};


//Main component content
const Layout = ({children}: LayoutProps): JSX.Element => {
	//Main component render
	return (
		<Box display='flex' >
			<CssBaseline />
			<Header />
			<Navbar />
			<Box
				component='main'
				flexGrow={1}
				p={3}
			>
				<Toolbar sx={{ height: 84, }} />
				{children}
			</Box>
		</Box>
	);
};


export default Layout; //Export main component
