import React from 'react'
import { Subtitle, TeamWrapper, TeamStyled } from './styled'
import TeamInfo from './TeamInfo'
import photoPri from '../../assets/images/priscilla.png'
import photoRe from '../../assets/images/renata.png'
import photoLucas from '../../assets/images/lucas.png'

const Team: React.FunctionComponent = () => (
    <TeamStyled>
        <Subtitle className="title">Nossa equipe</Subtitle>
        <TeamWrapper>
            <TeamInfo
                name="Priscilla Lopes"
                photo={photoPri}
                minibio="Sistemas de Informação na formação, desenvolvedora por profissão, organizadora do Innovate por devoção, progressista por dever cívico e tudo isso por paixão."
                instagram="https://www.instagram.com/cillaeslopes/"
                linkedin="https://www.linkedin.com/in/cillaeslopes/"
                mail="cillaeslopes@gmail.com"
            />
            <TeamInfo
                name="Renata Dias"
                photo={photoRe}
                minibio="Desenvolvedora, apaixonada por tecnologia e comportamento humano. Especialista em conhecimentos aleatórios e já viu todos os vídeos de bichinhos da internet."
                instagram="https://www.instagram.com/renatadbdias/"
                linkedin="https://www.linkedin.com/in/renata-dias/"
                mail="renatyynhah@gmail.com"
            />
            <TeamInfo
                name="Lucas Tamir"
                photo={photoLucas}
                minibio="Estudante de arquitetura e urbanismo com um pé dentro do design e outro dentro da programação."
                instagram="https://www.instagram.com/tamirfaria/"
                linkedin="https://www.linkedin.com/in/lucas-tamir-faria-a349b0189/"
                mail="lucastamir@gmail.com"
            />
        </TeamWrapper>
    </TeamStyled>
)

export default Team
