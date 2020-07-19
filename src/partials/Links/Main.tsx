import React from 'react'
import { MainStyled, SectionDivisor } from './styled'
import LinkSection from './Section'

const Main: React.FunctionComponent = () => (
    <MainStyled>
        <LinkSection
            title="Innovate Indica"
            text={
                'O Innovate Indica é um board no Trello™ no qual compilamos um tanto de indicação para vocês. Nesse board temos indicações de vários tipos, cursos, podcasts, sites, projetos, etc. E para garantir que as indicações sejam realmente boas pra vocês, nós só indicamos se realmente testamos ou conferimos o conteúdo! \n\n Se você quiser indicar algo através do Indica, manda pra gente. Nós vamos receber com o maior carinho :)'
            }
            link="https://bit.ly/innovateindica"
            linkDescription="innovateindica"
        />
        <SectionDivisor />
        <LinkSection
            title="Nosso Drive"
            text="A gente tem muito apreço por todos os eventos que já rolaram, todos os conteúdos compartilhados, todas as fotinhas tiradas. E a gente quer que as pessoas possam acessar os conteúdos quando quiserem, por isso mantemos uma pasta no Drive para vocês acessarem o/"
            link="https://bit.ly/innovatemeetup"
            linkDescription="nossodrive"
        />
        <SectionDivisor />
        <LinkSection
            title="Agenda Innovate"
            text="A gente tem um calendário compartilhado pra vocês acompanharem e não perderem nossos eventos :D"
            link="https://bit.ly/innovate-agenda"
            linkDescription="agendainnovate"
        />
        <SectionDivisor />
        <LinkSection
            title="Canal do Youtube"
            text="Desde que começamos a fazer nossos eventinhos online, nós criamos um canal no Youtube™ e pretendemos fazer várias lives com conteúdos Innovate para vocês \o/"
            link="https://bit.ly/innovate-youtube"
            linkDescription="youtubeinnovate"
        />
    </MainStyled>
)

export default Main
