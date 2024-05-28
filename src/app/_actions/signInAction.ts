//NextJS
'use server';


const signInAction = async (formData: FormData) => {
	console.info( 'Email: ', formData.get('email') );
	console.info( 'Password: ', formData.get('password') );
};


export default signInAction;
