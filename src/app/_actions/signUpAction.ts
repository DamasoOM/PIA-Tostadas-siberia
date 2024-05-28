//NextJS
'use server';


const signUpAction = async (formData: FormData) => {
	console.info( 'Name: ', formData.get('name') );
	console.info( 'LastName: ', formData.get('lastname') );
	console.info( 'Phone: ', formData.get('phone') );
	console.info( 'Email: ', formData.get('email') );
	console.info( 'Password: ', formData.get('password') );
	console.info( 'ConfirmPassword: ', formData.get('confirmpassword') );

};


export default signUpAction;
