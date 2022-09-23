import React from 'react'
import { Slide } from 'react-reveal'
import { StyledHome } from '../pages/styles/Home.styled'

const Home = () => {
    return (
        <div>
            <Slide right cascade>
                <StyledHome id='home'>
                    <div className='bg'></div>
                    <h1>{`
                    Hello. 
                    I am 
                    Nina`}</h1>
                </StyledHome>
            </Slide>
        </div>
    )
}

export default Home