import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


function CarroselHome(props) {
    var items = props.imagens
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
        <Paper>
            <img src={props.item.links[0].href} className='Imagens_slide' />
        </Paper>
    )
}

export default CarroselHome;