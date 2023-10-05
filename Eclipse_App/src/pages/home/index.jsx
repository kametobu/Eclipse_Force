import React from 'react';
import { motion } from "framer-motion"
import '../../style/css/home.css';
import Grid from '@mui/material/Unstable_Grid2'; 
import MediaCard from '../../components/cards/card';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [],

        }
        this.createStars = this.createStars.bind(this);
    }

    componentDidMount() {
        this.createStars(200)
    }

    createStars(count) {
        let stars_create = []

        for (let i = 1; i < count; i++) {
            let aletem = Math.floor(Math.random() * 70)
            stars_create.push(<motion.figure
                initial={{
                    top: 100 * Math.random() + '%',
                    left: 100 * Math.random() + '%',
                    scale: 1.2 * Math.random(),
                }}
                animate={{
                    opacity: [0.1, 1, 0.1, 1, 0.1],
                }}
                transition={{
                    duration: aletem,
                    ease: 'linear',
                    repeat: Infinity
                }}
                className='star'
                key={i}
            />)
        }
        this.setState({ stars: stars_create })
    }


    render() {
        return (
            <div className='Home'>
                    <Grid container spacing={12} >
                      <Grid xs={2} sm={4} md={4} className='aling-cards-home'>
                            <MediaCard img='terra.png'/>
                      </Grid>
                      <Grid xs={2} sm={4} md={4}>
                            <MediaCard img='sol.png'/>
                      </Grid>
                      <Grid xs={2} sm={4} md={4}>
                            <MediaCard img='lua.png'/>
                      </Grid>
                    </Grid>

                    <Grid container spacing={12} >
                      <Grid xs={2} sm={4} md={4} className='aling-cards-home'>
                            <MediaCard img='terra.png'/>
                      </Grid>
                      <Grid xs={2} sm={4} md={4}>
                            <MediaCard img='sol.png'/>
                      </Grid>
                      <Grid xs={2} sm={4} md={4}>
                            <MediaCard img='lua.png'/>
                      </Grid>
                    </Grid>

            </div>
        )
    }
}


export default Home;