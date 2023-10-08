import React from 'react';
import { motion } from "framer-motion"
import '../../style/css/quests.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RefreshIcon from '@mui/icons-material/Refresh';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

class Quests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [],
            respostas_user: [],
            resposta_quest: '',
            respostas: ['1'],
            nota: 0,
            send: true,
            quests: [
                {
                    'pergunta': "Why do only some people on Earth see an eclipse at a given time?",
                    'posiveis_respostas': [
                        "Not everyone on Earth sees an eclipse at a given time because the Moon's shadow on Earth is not very big, so only a small portion of places on Earth will see it.",
                        "Yes everyone on Earth sees an eclipse.",
                        "Yes everyone on Earth sees an eclipse at a given time because the Moon's shadow on Earth is very big, everyone on Earth will see it.",
                        "Yes, everyone on on Earth will see eclipse, Moon's is very big.",
                        "Yes, the Moon's is very big."],
                }
            ]

        }
        this.createStars = this.createStars.bind(this);
        this.resposta_questao = this.resposta_questao.bind(this);
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

    resposta_questao() {
    
        if (this.state.resposta_quest.length > 0) {
        //this.setState({ respostas_user: [...this.state.respostas_user, this.state.resposta_quest] })
        let nota = 0

        this.state.respostas.map((item, index)=>{
             if (item === this.state.resposta_quest){
                nota++
             }
             
         })  
         nota = (nota/this.state.respostas.length) * 10
         this.setState({nota: nota, send: true})
            
        }
    }




    render() {
        return (
            <>
                <div className='container_principal' style={{ backgroundColor: "#000" }}>

                    <div className='Quests-grid'>
                        
                        <div> {this.state.stars.map((item) => item)}</div>
                        <div className='container_quests'>
                            <div></div>
                            <div className='card_quests'>
                                {this.state.send?<>  
                                            <div className='Nota'>
                                                <h2>NOTA</h2>
                                                <p>{this.state.nota}</p>
                                            </div> 
                                            <div className='rocket'>
                                                <RocketLaunchIcon  sx={{ fontSize: '8rem'}}/>
                                            </div> 
                                            <div className='send_resp'>
                                                <div>
                                                    <Button variant="contained" onClick={() => this.setState({send: false})} endIcon={<RefreshIcon />}>
                                                        
                                                    </Button>
                                                </div>
                                            </div> 
                                </>:<>
                                {this.state.quests.map((item) => {
                                    return (
                                        <>
                                            <div className='Pergunta'>
                                                <p>{item.pergunta}</p>
                                            </div>
                                            <div className='respostas'>
                                                <FormControl>
                                                    <RadioGroup
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        name="radio-buttons-group"
                                                        value={this.state.resposta_quest}
                                                        onChange={(e) => this.setState({ resposta_quest: e.target.value })}
                                                    >
                                                        {item.posiveis_respostas.map((item, index) => {
                                                            return (
                                                                <ol type='a'>
                                                                    <li><FormControlLabel value={index+1} control={<Radio />} label={<> {item}</>} /></li>
                                                                </ol>
                                                            )
                                                        })}
                                                    </RadioGroup>
                                                </FormControl>

                                            </div>
                                            <div className='send_resp'>
                                                <div>
                                                    <Button variant="contained" disabled>
                                                        Next
                                                    </Button>
                                                    &nbsp;
                                                    <Button variant="contained" onClick={() => this.resposta_questao()} endIcon={<SendIcon />}>
                                                        Send
                                                    </Button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                </>}
                                
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