import React from 'react';
import { motion } from "framer-motion"
import '../../style/css/home.css';
import CarroselHome from '../../components/carroseul/carrosel';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [],

        }
        this.createStars = this.createStars.bind(this);
    }

    componentDidMount() {

    }

    createStars(count) {
        let stars_create = []

        for (let i = 1; i < count; i++) {
            let aletem = Math.floor(Math.random() * 70)
            stars_create.push(<motion.figure
                initial={{
                    top: 100 * Math.random() + '%',
                    left: 90 * Math.random() + '%',
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
            <div className='container_principal'>
                <div className='Home'>
                    <div className='Home-Col_1'>
                        <div className='carrosel_home'>
                            <CarroselHome/>
                        </div>
                        <div></div>
                    </div>
                    <div className='Home-Col_2'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;