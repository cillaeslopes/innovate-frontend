import React, { Component } from 'react';
import TeamMember from './TeamMember';

class TeamArea extends Component {
    render() {
        return (
            <div id='team-area'>
                <h2 className='title'>Nossa equipe</h2>
                <div id='team'>
                    <TeamMember
                        name='Priscilla Lopes'
                        photo={require('../../assets/images/prilopes.png')}
                        insta='https://www.instagram.com/cillaeslopes/'
                        linkedin='https://www.linkedin.com/in/cillaeslopes/'
                        mail='cillaeslopes@gmail.com'
                        minibio='Sistemas de Informação na formação, desenvolvedora por profissão, organizadora do Innovate por devoção, progressista por dever cívico e tudo isso por paixão'
                    />
                    <TeamMember
                        name='Renata Dias'
                        photo={require('../../assets/images/renata.png')}
                        insta='https://www.instagram.com/renatadbdias/'
                        linkedin='https://www.linkedin.com/in/renata-dias/'
                        mail='renatyynhah@gmail.com'
                        minibio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi lacus, finibus sed nisl quis, dapibus viverra orci. Donec et ligula id nibh ultrices euismod commodo in dolor. '
                    />
                    <TeamMember
                        name='Lucas Tamir'
                        photo={require('../../assets/images/lucas.png')}
                        insta='https://www.instagram.com/tamirfaria/'
                        linkedin='https://www.linkedin.com/in/lucas-tamir-faria-a349b0189/'
                        mail='lucastamir@gmail.com'
                        minibio='Estudante de arquitetura e urbanismo com um pé dentro do design e outro dentro da programação.'
                    />
                </div>
            </div>
        )
    }
}

export default TeamArea;