//NextJS
'use server';
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'


import Route from "../_configuration/routes";
import { createClient } from "@/utils/supabase/server";


const signUpAction = async (formData: FormData) => {

	const supabase = createClient();

	const name = formData.get('name') as string;
	const lastName = formData.get('lastname') as string;
	const telephone = formData.get('telephone') as string;
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;
	const confirmPassword = formData.get('confirm-password') as string;

	const { error } = await supabase.auth.signUp({
		email: email,
		password: password,
	});

	
	if(error){
		console.info( 'Sign up error: ', error.code, error.message );
		redirect(Route.ERROR);
	}


	revalidatePath(Route.HOME, 'layout')
	redirect(Route.HOME);
};


export default signUpAction;
