//NextJS
'use client';


//ReactJS
import { useState } from 'react';


//MATERIAL DESIGN
//Components
import TextField from '@mui/material/TextField';


//Types
type PasswordTextFieldProps = {
	name?: string;
	label?: string;
};


//Main component content
const PasswordTextField = ({name, label}: PasswordTextFieldProps): JSX.Element => {

	const [ visible, setVisible ] = useState<boolean>(false);


	//Main component render
	return (
		<TextField
			required
			name={name || 'name'}
			label={label || 'Contraseña'}
			type='password'
		/>
	);
};


export default PasswordTextField; //Export main component
