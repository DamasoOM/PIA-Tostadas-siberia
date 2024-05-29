//NextJS
import { redirect } from 'next/navigation'


//ReactJS
import { ReactNode } from "react";


import Route from "@/app/_configuration/routes";


//Supabase
import { createClient } from "@/utils/supabase/server";


//Types
type LayoutProps = {
	readonly children: ReactNode;
};


//Main component content
const Layout = async ({children}: LayoutProps): Promise<JSX.Element> => {

	const supabase = createClient();

	const { data, error } = await supabase.auth.getUser();

	
	if( error || !data?.user ){
		console.info( error?.code );
		console.info( error?.message );
		console.info( error?.status );
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
