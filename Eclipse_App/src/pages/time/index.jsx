import React from 'react';
import { motion } from "framer-motion"
//import '../../style/css/time.css';



class Time extends React.Component {
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
            <>
            {this.state.stars.map((item) => item)}
                <div>
                    <main>
                    
                    </main>
                </div>
            </>
        )
    }
}


export default Time;