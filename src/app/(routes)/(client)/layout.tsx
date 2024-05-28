//ReactJS
import { ReactNode } from 'react';


//Types
type LayoutProps = {
	readonly children: ReactNode;
};


//Main component content
const Layout = ({children}: LayoutProps): JSX.Element => {


	//Main component render
	return (
		<>
			{children}
		</>
	);
};


export default Layout; //Export main component
