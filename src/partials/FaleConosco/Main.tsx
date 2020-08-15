import React from 'react'
import { TextField } from '@material-ui/core'
import {
    MainStyled,
    LeftContainer,
    RightContainer,
    FormContainer,
    SendButton,
} from './styled'

const Main: React.FunctionComponent = () => (
    <MainStyled>
        <LeftContainer>
            <FormContainer>
                <TextField id="name" label="Seu nome" />
                <TextField id="email" label="Seu email" />
                <TextField id="subject" label="Assunto" />
                <TextField
                    id="message"
                    label="Escreva sua mensagem..."
                    multiline
                    rows={10}
                />
                <SendButton>Enviar</SendButton>
            </FormContainer>
        </LeftContainer>
        <RightContainer />
    </MainStyled>
)

export default Main
