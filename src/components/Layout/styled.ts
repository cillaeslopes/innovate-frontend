import styled, { createGlobalStyle } from 'styled-components'
import montserratLight from '../../assets/fonts/Montserrat-Light.ttf'
import montserratThin from '../../assets/fonts/Montserrat-Thin.ttf'
import montserratRegular from '../../assets/fonts/Montserrat-Regular.ttf'
import montserratSemiBold from '../../assets/fonts/Montserrat-SemiBold.ttf'
import montserratBold from '../../assets/fonts/Montserrat-Bold.ttf'
import cropTypes from '../../assets/fonts/crop-types.ttf'
import lemonMilkRegular from '../../assets/fonts/LEMONMILK-Regular.otf'
import lemonMilkBold from '../../assets/fonts/LEMONMILK-Bold.otf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        font-weight: 300;
        src: url(${montserratLight});
    }
    
    @font-face {
        font-family: 'Montserrat';
        font-weight: 100;
        src: url(${montserratThin});
    }
    
    @font-face {
        font-family: 'Montserrat';
        font-weight: normal;
        src: url(${montserratRegular});
    }
    
    @font-face {
        font-family: 'Montserrat';
        font-weight: 700;
        src: url(${montserratSemiBold});
    }
    
    @font-face {
        font-family: 'Montserrat';
        font-weight: 900;
        src: url(${montserratBold});
    }
    
    @font-face {
        font-family: 'Crop Types';
        font-weight: normal;
        src: url(${cropTypes});
    }

    @font-face {
        font-family: 'Lemon Milk';
        font-weight: normal;
        src: url(${lemonMilkRegular});
    }

    @font-face {
        font-family: 'Lemon Milk';
        font-weight: bold;
        src: url(${lemonMilkBold});
    }
    
    * {
        box-sizing: border-box;
        font-family: 'Montserrat';
        color: #212121;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Main = styled.main`
    margin-top: 10vh;
    padding: 10px 24px;
`

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 24px;

    @media (max-width: 440px) {
        font-size: 16px;
    }
`
