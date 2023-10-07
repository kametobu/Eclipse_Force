import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from "framer-motion"
import MediaCard from '../../components/cards/card';
import '../../style/css/solar.css';
//import '../../style/css/mobile-solar.css';


import {
    CircleMenu,
    CircleMenuItem
} from "react-circular-menu";

const Page = ({ offset, gradient, onClick }) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} >
            <div className='PAGE_1'>
                <div className='col_1'><MediaCard img='eclipse-solar.png' /></div>
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
            eclipse: "ANELAR",
            eclipse_anterior: "ANELAR",
            nasa_api: [
                {
                    "date": "2022-12-31",
                    "explanation": "Makemake (sounds like MAH-kay MAH-kay), second brightest dwarf planet of the Kuiper belt, has a moon. Nicknamed MK2, Makemake's moon reflects sunlight with a charcoal-dark surface, about 1,300 times fainter than its parent body. Still, in 2016 it was spotted in Hubble Space Telescope observations intended to search for faint companions with the same technique used to find the small satellites of Pluto. Just as for Pluto and its satellites, further observations of Makemake and orbiting moon will measure the system's mass and density and allow a broader understanding of the distant worlds. About 160 kilometers (100 miles) across compared to Makemake's 1,400 kilometer diameter, MK2's relative size and contrast are shown in this artist's vision. An imagined scene of an unexplored frontier of the Solar System, it looks back from a spacecraft's vantage as the dim Sun shines along the Milky Way. Of course, the Sun is over 50 times farther from Makemake than it is from planet Earth.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2212/Makemakemoon100mile2000px.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Moon over Makemake",
                    "url": "https://apod.nasa.gov/apod/image/2212/Makemakemoon100mile.jpg"
                },
                {
                    "date": "2013-11-12",
                    "explanation": "What is happening to asteroid P/2013 P5? No one is sure. For reasons unknown, the asteroid is now sporting not one but six discernible tails. The above images were taken two months ago by the orbiting Hubble Space Telescope and show the rapidly changing dust streams. It is not even known when P5 began displaying such unusual tails. Were the main belt asteroid struck by a large meteor, it would be expected to sport a single dust tail. Possible explanations include that light pressure from the Sun is causing the asteroid to rotate increasingly rapidly, which in turn causes pools of previously gravity-bound dust to spin off. Future observations should better indicate how P5 and its dust plumes are evolving and so provide more clues to its nature -- and to how many similar asteroids might exist.",
                    "hdurl": "https://apod.nasa.gov/apod/image/1311/asteroidP5_hubble_3000.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "The Unexpected Tails of Asteroid P5",
                    "url": "https://apod.nasa.gov/apod/image/1311/asteroidP5_hubble_960.jpg"
                },
                {
                    "date": "2018-02-28",
                    "explanation": "Where did that spot come from?  Amateur astronomer Victor Buso was testing out a new camera on his telescope in 2016 when he noticed a curious spot of light appear -- and remain. After reporting this unusual observation, this spot was determined to be light from a supernova just as it was becoming visible -- in an earlier stage than had ever been photographed optically before. The discovery before and after images, taken about an hour apart, are shown in the inset of a more detailed image of the same spiral galaxy, NGC 613, taken by the Hubble Space Telescope. Follow-up observations show that SN 2016gkg was likely the explosion of a supergiant star, and Buso likely captured the stage where the outgoing detonation wave from the stellar core broke through the star's surface.  Since astronomers have spent years monitoring galaxies for supernovas without seeing such a \"break out\" event, the odds of Buso capturing this have been compared to winning a lottery.",
                    "hdurl": "https://apod.nasa.gov/apod/image/1802/NGC613_HubbleBuso_1280.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "NGC 613 in Dust, Stars, and a Supernova",
                    "url": "https://apod.nasa.gov/apod/image/1802/NGC613_HubbleBuso_960.jpg"
                },
                {
                    "date": "1999-04-02",
                    "explanation": "Nestled within the dusty arms of the large spiral galaxy Andromeda (M31), the star cluster NGC 206 is one of the largest star forming regions known in our local group of galaxies. The beautiful bright blue stars of NGC 206 betray its youth - but close, systematic studies of variable stars in and around NGC 206 will also accurately reveal its distance. Astronomers are searching for variable stars in NGC 206, particularly pulsating stars known as Cepheids and eclipsing binary star systems. Distances for these types of stars can be effectively determined by following the periodic changes in their brightness and spectra. About 3 million light-years away, an accurately known distance to NGC 206 and thus M31 is critical to the larger understanding of galaxy formation, galaxy evolution, and ultimately the distance scale of the Universe.",
                    "hdurl": "https://apod.nasa.gov/apod/image/9904/ngc206_direct_big.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Stars of NGC 206",
                    "url": "https://apod.nasa.gov/apod/image/9904/ngc206_direct.jpg"
                },
                {
                    "copyright": "Stéphane Guisard",
                    "date": "2009-02-20",
                    "explanation": "Dark nebulae snake across a gorgeous expanse of stars in this telescopic view toward the pronounceable constellation Ophiuchus and the center of our Milky Way Galaxy. In fact, the twisting central shape seen here is well known as the Snake Nebula. It is also listed as Barnard 72 (B72), one of 182 dark markings of the sky cataloged in the early 20th century by astronomer E. E. Barnard. Unlike bright emission nebulae and star clusters, Barnard's nebulae are interstellar dark clouds of obscuring gas and dust. Their shapes are visible in cosmic silhouette because they lie in the foreground along the line of sight to rich star fields and glowing stellar nurseries near the plane of our Galaxy. Many of Barnard's dark nebulae are themselves likely sites of future star formation. Barnard 72 is about 650 light years away. With bluish star 44 Ophiuchi at bottom left, the intriguing star field spans nearly 2 degrees or almost 20 light-years at the estimated distance of the Snake Nebula.",
                    "hdurl": "https://apod.nasa.gov/apod/image/0902/SGUSnakeLRVB.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Snake in the Dark",
                    "url": "https://apod.nasa.gov/apod/image/0902/SGUSnakeLRVB_c800.jpg"
                }
            ],
        }
        this.parallax = React.createRef();
        this.scroll = this.scroll.bind(this);
        this.createStars = this.createStars.bind(this);
        this.estagios = ["TOTAL", "PARCIAL", "DIAMANTE", "ANELAR"]
    }

    componentDidMount() {
        this.createStars(200)
        fetch('https://api.nasa.gov/planetary/apod?api_key=z4aO2lGyJdqkpj6QcLJoIGYDgVUnRUG32veg6rFM&count=5&thumbs=True').then((res) => res.json()).then((data) => {
            console.log(data)
            this.setState({nasa_api: data})
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
                                    <iframe width="1200px" height='650px' src="https://www.youtube.com/embed/0evMqlMrOP0?si=XwMoc2pd3hmJg_By?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div>
                                <img src='Post.png' />
                            </div>
                        </div>
                        <div className='Solar_col2'>
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
                                <div className='Eclipse_lua'>
                                    <div className={`Lua_${this.state.eclipse}`} id='Lua' />
                                </div>
                            </main>
                        </div>

                        <div className='Solar_col3'>
                        <div className='Home_items_List'>
                            {this.state.nasa_api.map((item) => {
                                return (<dev className='Home_items'>
                                    <div className='img_nasa_aling'>
                                        <img src={item.url} className='img_nasa' />
                                    </div>
                                    <div className='txt_nasa'>
                                        <span>{item.date}</span>
                                        <h2>{item.title}</h2>
                                        <p>{item.explanation}</p>
                                    </div>
                                </dev>)
                            })}

                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Solar;