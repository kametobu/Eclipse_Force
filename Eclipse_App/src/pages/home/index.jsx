import React from 'react';
import { motion } from "framer-motion"
import '../../style/css/home.css';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [],
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
        this.createStars = this.createStars.bind(this);
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=z4aO2lGyJdqkpj6QcLJoIGYDgVUnRUG32veg6rFM&count=5&thumbs=True').then((res) => res.json()).then((data) => {
            console.log(data)
            this.setState({ nasa_api: data })
        })

        fetch('https://images-api.nasa.gov/search?q=eclipse&media_type=image&page_size=4').then((res) => res.json()).then((data) => {
            console.log(data)
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
                <img src='Cover.png' className='equipe-Img' />

                <div className='Video'>
                    <iframe width="1200px" height='650px' src="https://eyes.nasa.gov/apps/solar-system/#/story/annular_solar_eclipse" title="Annular Solar Eclipse" allow="fullscreen" data-gtm-yt-inspected-13="true">
                        Unable to render the provided source
                    </iframe>
                </div>

                <div className='Home'>

                    <div className='Home-Col_1'>
                        <div className='carrosel_home'>

                        </div>
                        <div className='Home_items_List'>
                        <span style={{ color: '#FFF' }}><img src="nasa.png" className='with_nasa'/></span>
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
                    <div className='Home-Col_2'>
                        
                        <div><img src='Post.png' /></div>
                        <div><img src='Follow.png' /></div>

                    </div>
                </div>


            </div>
        )
    }
}


export default Home;

// <CarroselHome imagens={this.state.imagens_nasa} />