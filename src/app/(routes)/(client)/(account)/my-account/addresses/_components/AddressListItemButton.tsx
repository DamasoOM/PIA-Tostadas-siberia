//MATERIAL DESIGN
//Components
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


//Types
import type { Tables } from '@/app/_types/supabase';
type AddressListItemButtonProps = Tables<'addresses'>;


//Main component content
const AddressListItemButton = (props: AddressListItemButtonProps): JSX.Element => {
	
	const primaryText = `${props.street}, #${props.number}, ${props.colony}`;
	const secondaryText = `${props.city}, ${props.state}`;

	//Main component render
	return (
		<ListItem>
			<ListItemText
				primary={primaryText}
				secondary={secondaryText}
			/>
		</ListItem>
	);
};


export default AddressListItemButton; //Export main component
