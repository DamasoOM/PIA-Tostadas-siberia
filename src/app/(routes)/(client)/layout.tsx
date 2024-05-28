//ReactJS
import { ReactNode } from 'react';


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
		<>
			<Header />
			<Navbar />
			{children}
		</>
	);
};


export default Layout; //Export main component
