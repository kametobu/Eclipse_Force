import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from "framer-motion"
import MediaCard from '../../components/cards/card';
import '../../style/css/lunar.css';

import {
    CircleMenu,
    CircleMenuItem
} from "react-circular-menu";

const Page = ({ offset, gradient, onClick }) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} >
            <div className='PAGE_1'>
                <div className='col_1'><MediaCard img='eclipse-lunar.png'/></div>
                <div className='Sol'></div>
                <div className='col_3'><MediaCard img='eclipse-lunar.png'/></div>
            </div>
        </ParallaxLayer>
    </>
)

class Solar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [],
            eclipse: "ANELAR",
            eclipse_anterior: "ANELAR"
        }
        this.parallax = React.createRef();
        this.scroll = this.scroll.bind(this);
        this.createStars = this.createStars.bind(this);
        this.estagios = ["TOTAL", "PARCIAL", "DIAMANTE", "ANELAR"]
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
        this.setState({ eclipse: 'SAIDA_' + this.state.eclipse_anterior })
        this.parallax.current.scrollTo(to)
        setTimeout(() => {
            this.setState({ eclipse: this.estagios[to], eclipse_anterior: this.estagios[to] })
        }, 3000)
        //
    }

    render() {
        return (
            <>
                <div >

                    <div className='Terra_aling'>
                        <CircleMenu
                            startAngle={-90}
                            rotationAngle={360}
                            itemSize={2}
                            radius={5}
                            rotationAngleInclusive={false}
                            menuToggleElement={<div className='Terra'>&nbsp; &nbsp;</div>}
                        >

                            <CircleMenuItem onClick={() => this.scroll(1)} tooltip="PARCIAL">
                                <span className='LuaT'></span>
                            </CircleMenuItem>
                            <CircleMenuItem onClick={() => this.scroll(2)} tooltip="DIAMANTE">
                                <span className='LuaT'></span>
                            </CircleMenuItem>
                            <CircleMenuItem onClick={() => this.scroll(3)} tooltip="ANELAR">
                                <span className='LuaT'></span>
                            </CircleMenuItem>
                            <CircleMenuItem onClick={() => this.scroll(0)} tooltip="TOTAL">
                                <span className='LuaT'></span>
                            </CircleMenuItem>
                        </CircleMenu>
                    </div>
                    <div className='Aling_PARALAX'>
                        <Parallax pages={5} horizontal ref={this.parallax} className='PARALAX' style={{ height: '250vh' }}>
                            <Page offset={0} />
                            <Page offset={1} />
                            <Page offset={2} />
                            <Page offset={3} />
                        </Parallax>
                    </div>
                    <main>
                        {this.state.stars.map((item) => item)}
                        <div className={`circulo_1`} />
                        <div className='Eclipse_lua'>
                            <div className={`Lua_${this.state.eclipse}`} id='Lua' />
                        </div>
                    </main>
                </div>
            </>
        )
    }
}


export default Solar;