//ReactJS

//MATERIAL DESIGN
//Components
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { supabase } from '@/utils/supabase';


//Types
import type { Tables } from '@/app/_types/supabase';
type DishCardProps = Tables<'dishes'>;


const DishCard = (props: DishCardProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${props.price.toFixed(2)}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default DishCard;

