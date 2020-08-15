import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Text, ProjectContainer, ProjectLink } from './styled'

const ProjectInfo: React.FunctionComponent = () => (
    <ProjectContainer>
        <ProjectLink
            href="github.com/cillaeslopes/innovate-frontend"
            startIcon={<GitHubIcon />}
        >
            Projeto no Github
        </ProjectLink>
        <Text>
            O projeto do nosso site é open source e você pode contribuir conosco
            através de um PR. Para isso só pedimos que você siga as orientações
            de padronização localizadas no README do projeto.
            <br />
            <br />
            Para contribuir com uma feature nova pedimos que você nos comunique
            o objetivo da feature e como você a pensou, para que possamos
            organizar a manutenção e incluí-la no nosso escopo.
        </Text>
    </ProjectContainer>
)

export default ProjectInfo
