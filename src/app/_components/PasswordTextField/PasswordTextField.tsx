//NextJS
'use client';


//ReactJS
import { useState } from 'react';


//MATERIAL DESIGN
//Components
import TextField from '@mui/material/TextField';


//Main component content
const PasswordTextField = (): JSX.Element => {

	const [ visible, setVisible ] = useState<boolean>(false);


	//Main component render
	return (
		<TextField
			required
			name='password'
			label='Contraseña'
			type='password'
		/>
	);
};


export default PasswordTextField; //Export main component
