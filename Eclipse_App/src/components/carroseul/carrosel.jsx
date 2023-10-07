import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


function CarroselHome(props) {
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
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper >
            <img src='SLIDE.jpg' className='Imagens_slide'/>
        </Paper>
    )
}

export default CarroselHome;