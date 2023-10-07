import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'





function CarroselHome(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
            
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
        autoPlay
        swipe
        animation="slide"
        duration={1500}

        height={500}
        navButtonsAlwaysVisible
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src='Logo.png'/>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default CarroselHome;