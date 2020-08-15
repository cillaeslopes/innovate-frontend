import React from 'react'
import { FormContainer, Field, SendButton } from './styled'

const Form: React.FunctionComponent = () => (
    <FormContainer>
        <Field id="name" label="Seu nome" />
        <Field id="email" label="Seu email" />
        <Field id="subject" label="Assunto" />
        <Field
            id="message"
            label="Escreva sua mensagem..."
            multiline
            rows={10}
        />
        <SendButton>Enviar</SendButton>
    </FormContainer>
)

export default Form
