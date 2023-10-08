import React from 'react';
import { motion } from "framer-motion"
import '../../style/css/quests.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

class Quests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [],
            respostas_user: [],
            respostas: ['1'],
            quests: [
                {
                    'pergunta': "Why do only some people on Earth see an eclipse at a given time?",
                    'posiveis_respostas': [
                        "Not everyone on Earth sees an eclipse at a given time because the Moon's shadow on Earth is not very big, so only a small portion of places on Earth will see it.", 
                        "Yes everyone on Earth sees an eclipse.", 
                        "Yes everyone on Earth sees an eclipse at a given time because the Moon's shadow on Earth is very big, so only a small portion of places on Earth will see it.", 
                        "Yes, Only a small portion of places on Earth will see eclipse, Moon's is very big.", 
                        "Yes, Moon's is very big."],
                }
            ]

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
                <div className='container_principal' style={{backgroundColor: "#000"}}>
                {this.state.stars.map((item) => item)}
                    <div className='Quests-grid'>
                        <div></div>
                        <div className='container_quests'>
                            <div></div>
                            <div className='card_quests'>
                                {this.state.quests.map((item) => {
                                    return (
                                        <>
                                            <div className='Pergunta'>
                                                <p>{item.pergunta}</p>
                                            </div>
                                            <div className='respostas'>
                                                {item.posiveis_respostas.map((item, index) => {
                                                    return (
                                                    <ol type='a'>
                                                        <li> <span className='list_ordem'>{index+1}</span>.<input type="checkbox" id="scales" name="scales" /> {item}</li>
                                                    </ol>
                                                )
                                                })}

                                            </div>
                                            <div className='send_resp'>
                                                <div>
                                                    <Button variant="contained" endIcon={<SendIcon />}>
                                                      Send
                                                    </Button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </>
        )
    }
}


export default Quests;