//NextJS
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


import { supabase } from '@/utils/supabase';
import Route from '@/app/_configuration/routes';


//MATERIAL DESIGN
//Components
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
//Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


//Types
import type { Tables } from '@/app/_types/supabase';
type AddressListItemButtonProps = Tables<'addresses'>;


//Main component content
const AddressListItemButton = (props: AddressListItemButtonProps): JSX.Element => {
	
	const router = useRouter();
	const primaryText = `${props.street}, #${props.number}, ${props.colony}`;
	const secondaryText = `${props.city}${props.state ? `, ${props.state}` : ''}`;

	const onDeleteHandler = async () => {
		const deleteQuery = supabase
			.from('addresses')
			.delete()
			.eq('id', props.id);

		const { error } = await deleteQuery;

		if( error ){
			throw new Error(error.message, {
				cause: error.details,
			});
		}

		router.push(Route.MY_ACCOUNT_ADDRESSES);
	};

	const secondaryAction = (
		<Stack direction='row' >
			<IconButton color='primary' LinkComponent={Link} href={`${Route.MY_ACCOUNT_ADDRESSES}/${props.id}`} >
				<EditIcon />
			</IconButton>
			<IconButton color='error' onClick={onDeleteHandler} >
				<DeleteIcon />
			</IconButton>
		</Stack>
	);


	//Main component render
	return (
		<ListItem
			secondaryAction={secondaryAction}
		>
			<ListItemText
				primary={primaryText}
				secondary={secondaryText}
			/>
		</ListItem>
	);
};


export default AddressListItemButton; //Export main component
