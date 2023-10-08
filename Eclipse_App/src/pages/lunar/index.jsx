import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from "framer-motion"
import MediaCard from '../../components/cards/card';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../../style/css/lunar.css';

import {
    CircleMenu,
    CircleMenuItem
} from "react-circular-menu";

const Page = ({ offset, gradient, onClick }) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} >
            <div className='PAGE_1'>
                <div className='col_1'><MediaCard img='eclipse-lunar.png' /></div>
                <div className='Sol'></div>
                <div className='col_3'></div>
            </div>
        </ParallaxLayer>
    </>
)

class Solar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [],
            eclipse: "PENUMBRA",
            eclipse_anterior: "PENUMBRA",
            imagens_nasa: [
                {
                    "href": "https://images-assets.nasa.gov/image/PIA10551/collection.json",
                    "data": [
                        {
                            "center": "JPL",
                            "title": "Enceladus in Eclipse",
                            "nasa_id": "PIA10551",
                            "date_created": "2009-01-07T13:50:41Z",
                            "keywords": [
                                "Enceladus",
                                "Cassini-Huygens"
                            ],
                            "media_type": "image",
                            "description_508": "Enceladus in Eclipse",
                            "secondary_creator": "NASA/JPL/Space Science Institute",
                            "description": "Enceladus in Eclipse"
                        }
                    ],
                    "links": [
                        {
                            "href": "https://images-assets.nasa.gov/image/PIA10551/PIA10551~thumb.jpg",
                            "rel": "preview",
                            "render": "image"
                        }
                    ]
                },
                {
                    "href": "https://images-assets.nasa.gov/image/PIA11508/collection.json",
                    "data": [
                        {
                            "center": "JPL",
                            "title": "Titan in Eclipse",
                            "nasa_id": "PIA11508",
                            "date_created": "2009-06-05T12:48:36Z",
                            "keywords": [
                                "Titan",
                                "Cassini-Huygens"
                            ],
                            "media_type": "image",
                            "description_508": "Titan in Eclipse",
                            "secondary_creator": "NASA/JPL/Space Science Institute",
                            "description": "Titan in Eclipse"
                        }
                    ],
                    "links": [
                        {
                            "href": "https://images-assets.nasa.gov/image/PIA11508/PIA11508~thumb.jpg",
                            "rel": "preview",
                            "render": "image"
                        }
                    ]
                },
                {
                    "href": "https://images-assets.nasa.gov/image/PIA10508/collection.json",
                    "data": [
                        {
                            "center": "JPL",
                            "title": "Tethys in Eclipse",
                            "nasa_id": "PIA10508",
                            "date_created": "2008-11-07T13:50:46Z",
                            "keywords": [
                                "Tethys",
                                "Cassini-Huygens"
                            ],
                            "media_type": "image",
                            "description_508": "Tethys in Eclipse",
                            "secondary_creator": "NASA/JPL/Space Science Institute",
                            "description": "Tethys in Eclipse"
                        }
                    ],
                    "links": [
                        {
                            "href": "https://images-assets.nasa.gov/image/PIA10508/PIA10508~thumb.jpg",
                            "rel": "preview",
                            "render": "image"
                        }
                    ]
                },
                {
                    "href": "https://images-assets.nasa.gov/image/PIA09353/collection.json",
                    "data": [
                        {
                            "center": "JPL",
                            "title": "Io in Eclipse",
                            "nasa_id": "PIA09353",
                            "date_created": "2007-05-01T17:00:06Z",
                            "keywords": [
                                "Io",
                                "New Horizons"
                            ],
                            "media_type": "image",
                            "description_508": "Io in Eclipse",
                            "secondary_creator": "NASA/Johns Hopkins University Applied Physics Laboratory/Southwest   Research Institute",
                            "description": "Io in Eclipse"
                        }
                    ],
                    "links": [
                        {
                            "href": "https://images-assets.nasa.gov/image/PIA09353/PIA09353~thumb.jpg",
                            "rel": "preview",
                            "render": "image"
                        }
                    ]
                }
            ]
        }
        this.parallax = React.createRef();
        this.scroll = this.scroll.bind(this);
        this.createStars = this.createStars.bind(this);
        this.estagios = ["TOTAL_PERIGEU", "PARCIAL", "TOTAL_APOGEU", "PENUMBRA"]
    }

    componentDidMount() {
        this.createStars(200)
        fetch('https://images-api.nasa.gov/search?q=eclipse%20lunar&media_type=image&page_size=20').then((res) => res.json()).then((data) => {
            let imagens = data.collection.items.map((item) => item)
            this.setState({ imagens_nasa: imagens })
        })
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
        console.log('SAIDA_' + this.state.eclipse_anterior  )
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
                <div className='container_principal'>
                    <div className='Solar_page'>
                        <div className='Solar_col1'>
                            <div>
                                <div className='Video'>
                                    <iframe width="1200px" height='650px' src="https://www.youtube.com/embed/WQFyKsnesyo?si=LowqLJa6ya4Q0MQu?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div>
                                <img src='Post.png' />
                            </div>
                        </div>
                        <div className='Solar_col2'>
                            <div className='Terra_aling_Lunar'>
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
                                    <CircleMenuItem onClick={() => this.scroll(2)} tooltip="TOTAL_APOGEU">
                                        <span className='LuaT'></span>
                                    </CircleMenuItem>
                                    <CircleMenuItem onClick={() => this.scroll(3)} tooltip="PENUMBRA">
                                        <span className='LuaT'></span>
                                    </CircleMenuItem>
                                    <CircleMenuItem onClick={() => this.scroll(0)} tooltip="TOTAL_PERIGEU">
                                        <span className='LuaT'></span>
                                    </CircleMenuItem>
                                </CircleMenu>
                            </div>
                            <div className='Aling_PARALAX'>
                                <Parallax pages={5} horizontal ref={this.parallax} className='PARALAX'>
                                    <Page offset={0} />
                                    <Page offset={1} />
                                    <Page offset={2} />
                                    <Page offset={3} />
                                </Parallax>
                            </div>
                            <main>
                                {this.state.stars.map((item) => item)}
                                <div className={`circulo_1`} />
                                <div className='Eclipse_lua_Lunar'>
                                    <div className={`Lua_${this.state.eclipse}_Lunar`} id='Lua' />
                                </div>
                            </main>
                        </div>
                        <div className='Solar_col3'>
                            <ImageList sx={{ width: '100%', p: 3 }} cols={3} >
                                {this.state.imagens_nasa.map((item) => (
                                    <ImageListItem >
                                        <img
                                            src={item.links[0].href}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Solar;