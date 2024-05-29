//NextJS
'use server';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'


import Route from '@/app/_configuration/routes';
import { createClient } from '@/utils/supabase/server';


const signInAction = async (formData: FormData) => {
	const supabase = createClient();

	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	const data = {
		email: email,
		password: password,
	}

	const { error } = await supabase.auth.signInWithPassword(data);

	if( error ){
		console.info( 'Sign in error: ', error.code, error.message );
		redirect(Route.ERROR);
	}

	revalidatePath(Route.HOME, 'layout')
  redirect(Route.HOME)
};


export default signInAction;
