import { useState, useEffect } from 'react';
import { ApiHelper } from '../helpers/ApiHelper';
import { adviceDto } from '../model/advice';
import icondice from '../images/icon-dice.svg';
import divider from '../images/pattern-divider-desktop.svg'

import '../scss/home.scss';



const Card = () => {

    const [adviceDto, setAdviceDto] = useState<adviceDto>();

    const apiAdvice = new ApiHelper();

    useEffect(() => {
        getRandAdviceAsync();
    }, [])

    const getRandAdviceAsync = async () => {
        const randomAdvice = await apiAdvice.getAdviceAsync()
        setAdviceDto(randomAdvice);
    }

    return (
        <div className='container grid'>
            <div className='card'>
                <div className='inside-card'>
                    <div className='idContainer'>
                        <p className='adviceId'> ADVICE #{adviceDto?.slip.id}</p>
                    </div>
                    <div className='adviceContainer'>
                        <p className='lead'>{adviceDto?.slip.advice}</p>
                    </div>
                    <div><img className='divider' src={divider} /></div>
                    <div className='iconContainer'>
                        <button className='incondice' onClick={getRandAdviceAsync}><img src={icondice} /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card