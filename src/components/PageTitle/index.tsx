import React from 'react'
import { Title } from './styled'

export interface Props {
    title: string
}

const PageTitle: React.SFC<Props> = ({ title }: Props) => <Title>{title}</Title>

export default PageTitle
