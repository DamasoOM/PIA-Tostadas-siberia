//NextJS
import { redirect } from 'next/navigation'


//ReactJS
import { ReactNode } from "react";


import Route from "@/app/_configuration/routes";


//Supabase
import serverClient from "@/utils/supabase/server";


//Types
type LayoutProps = {
	readonly children: ReactNode;
};


//Main component content
const Layout = async ({children}: LayoutProps): Promise<JSX.Element> => {

	const { data, error } = await serverClient.auth.getUser();

	if( error || !data?.user ){
		redirect(Route.HOME);
	}

	//Main component render
	return (
		<>
			{children}
		</>
	);
};


export default Layout; //Export main component
