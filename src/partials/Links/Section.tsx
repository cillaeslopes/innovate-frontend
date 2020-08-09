import React from 'react'
import {
    Section,
    SectionTitle,
    SectionText,
    LinkArea,
    SectionLink,
} from './styled'

export interface Props {
    title: string
    text: string
    link: string
    linkDescription: string
}

const LinkSection: React.FunctionComponent<Props> = ({
    title,
    text,
    link,
    linkDescription,
}) => (
    <Section>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
        <LinkArea>
            <b>Link: &nbsp;</b>
            <SectionLink href={link}>{linkDescription}</SectionLink>
        </LinkArea>
    </Section>
)

export default LinkSection
