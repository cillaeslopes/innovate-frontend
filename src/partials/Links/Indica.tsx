import React from 'react'
import {
    Section,
    SectionTitle,
    SectionText,
    LinkArea,
    SectionLink,
} from './styled'

const Indica: React.FunctionComponent = () => (
    <Section>
        <SectionTitle>Innovate Indica</SectionTitle>
        <SectionText>
            O Innovate Indica é um board no Trello™ no qual compilamos um tanto
            de indicação para vocês. Nesse board temos indicações de vários
            tipos, cursos, podcasts, sites, projetos, etc. E para garantir que
            as indicações sejam realmente boas pra vocês, nós só indicamos se
            realmente testamos ou conferimos o conteúdo!
            <br />
            <br />
            Se você quiser indicar algo através do Indica, manda pra gente. Nós
            vamos receber com o maior carinho :)
        </SectionText>
        <LinkArea>
            <b>Link: &nbsp;</b>
            <SectionLink href="https://bit.ly/innovateindica">
                innovateindica
            </SectionLink>
        </LinkArea>
    </Section>
)

export default Indica
