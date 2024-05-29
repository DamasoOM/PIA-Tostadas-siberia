//NextJS
'use server';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'


import serverClient from '@/utils/supabase/server';
import Route from '@/app/_configuration/routes';


const signInAction = async (formData: FormData) => {
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	const data = {
		email: email,
		password: password,
	}

	const { error } = await serverClient.auth.signInWithPassword(data);

	if( error ){
		redirect(Route.ERROR);
	}

	revalidatePath(Route.HOME, 'layout')
  redirect(Route.HOME)
};


export default signInAction;
