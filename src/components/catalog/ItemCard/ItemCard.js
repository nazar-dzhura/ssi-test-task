import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import no_image from '../../../assets/img/no_image.jpg';
import './item-card.css'
import {DeleteOutline} from "@material-ui/icons";

function ItemCard({ item, removeItem }) {

    function handleRemoveClick() {
        removeItem(item.id);
    }

    return (
        <Card className="item-card">
            <CardMedia
                className="item-card__image"
                component="img"
                image={item.image ? item.image : no_image}
                alt={item.name + " image"}
            />
            <Box>
                <CardContent>
                    <Typography className="item-card__title" component="div" variant="h4">
                        {item.name}
                    </Typography>
                    <button className="item-card__delete-button" onClick={handleRemoveClick} >
                        <DeleteOutline/>
                    </button>
                    <Typography className="item-card__additional" component="div">
                        {item.description}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{my: 2}}>
                        $ {item.price}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

export default ItemCard;