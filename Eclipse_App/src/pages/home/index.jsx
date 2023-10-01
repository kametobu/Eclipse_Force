import React from 'react';
import DrawerAppBar from '../../components/menu/menu';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import '../../style/css/home.css';
import { motion } from "framer-motion"
import Box from '@mui/material/Box';

const Page = ({ offset, gradient, onClick }) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
            <div className='PAGE_1'>
                <span>0{offset + 1}</span>
                <div className={`circulo_${offset + 1}`} />
            </div>
        </ParallaxLayer>
    </>
)

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: []
        }
        this.parallax = React.createRef();

        this.scroll = this.scroll.bind(this);
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



    scroll(to) {
        if (this.parallax.current) {
            this.parallax.current.scrollTo(to)
        }
    }

    render() {
        return (
            <div className='Conteiner'>
                <DrawerAppBar />

                <main>
                    {this.state.stars.map((item) => item)}

                    <div className='Aling_PARALAX'>
                        <Parallax pages={3} horizontal ref={this.parallax} className='PARALAX'>
                            <Page offset={0} onClick={() => this.scroll(1)} />
                            <Page offset={1} onClick={() => this.scroll(2)} />
                            <Page offset={2} onClick={() => this.scroll(0)} />
                        </Parallax>
                    </div>
                    <div className='Eclipse_lua'>
                        <div className='Lua' />
                    </div>
                </main>

            </div>
        )
    }
}


export default Home;