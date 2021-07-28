import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BreakpointsEnum, useWindowDimensions } from 'hooks/breakpoints'
import {
  Bolder,
  Card,
  Col,
  ContentArea,
  H1,
  H2,
  HR,
  IconAnchor,
  Paragraph,
  ProfileImage,
  Row,
  Wrapper
} from './styles'

interface FaIcon {
  icon: IconProp
  popover: string
  title: string
  url?: string
}

const Main = () => {
  const { breakpoint } = useWindowDimensions()

  const contactIcons: FaIcon[] = [
    {
      icon: ['fas', 'envelope-open-text'],
      popover: 'E-mail',
      title: 'Contact me by E-mail',
      url:
        'mailto:rodrigo.roberto.almeida@gmail.com?subject=Contact%20from%20your%20site&body=Dear%20Rodrigo...'
    },
    {
      icon: ['fab', 'github-square'],
      popover: 'Github',
      title: 'Contact me on Github',
      url: 'https://github.com/drafenous'
    },
    {
      icon: ['fab', 'linkedin'],
      popover: 'LinkedIn',
      title: 'Contact me on LinkedIn',
      url: 'https://www.linkedin.com/in/rodrigorobertoalmeida'
    },
    {
      icon: ['fab', 'instagram-square'],
      popover: 'Instagram',
      title: 'Contact me on Instagram',
      url: 'https://www.instagram.com/rodrigo_draf'
    }
  ]

  const technologiesIcons: FaIcon[] = [
    {
      icon: ['fab', 'node-js'],
      title: 'Experience with NodeJS',
      popover: 'NodeJS'
    },
    {
      icon: ['fab', 'angular'],
      title: 'Experience with Angular',
      popover: 'Angular'
    },
    {
      icon: ['fab', 'react'],
      title: 'Experience with ReactJS and React Native',
      popover: 'ReactJS and React Native'
    },
    {
      icon: ['fab', 'vuejs'],
      title: 'Experience with VueJS',
      popover: 'VueJS'
    }
  ]

  return (
    <Wrapper>
      <Card>
        <ProfileImage />
        <ContentArea>
          <Row direction="column">
            <H1>
              <Bolder>Rodrigo R. Almeida</Bolder>
              <br />
              Front-end Engineer at <Bolder>Grupo Level</Bolder>
            </H1>

            {breakpoint <= BreakpointsEnum.SM && <HR />}

            <Paragraph>
              “My name is <Bolder>Rodrigo R. Almeida</Bolder>, and my nickname
              on web is <Bolder>Drafenous</Bolder>, you can choice how you want
              to call me.”
            </Paragraph>
            <Paragraph>
              <Bolder>Brazilian</Bolder> (&#x1F1E7;&#x1F1F7;), born in
              26/11/1993.
            </Paragraph>

            {breakpoint <= BreakpointsEnum.SM && <HR />}

            <Row
              direction={breakpoint >= BreakpointsEnum.MD ? 'row' : 'column'}
            >
              <Col
                textAlign={breakpoint >= BreakpointsEnum.MD ? 'left' : 'center'}
              >
                <H2>Contact me on</H2>
                <Row
                  justifyContent={
                    breakpoint >= BreakpointsEnum.MD
                      ? 'flex-start'
                      : 'space-between'
                  }
                >
                  {contactIcons.map((contact, idx) => (
                    <IconAnchor
                      key={idx}
                      href={contact.url}
                      target="_blank"
                      aria-label={contact.title}
                    >
                      <FontAwesomeIcon
                        icon={contact.icon}
                        fixedWidth
                        aria-hidden={true}
                        title={contact.title}
                      />
                    </IconAnchor>
                  ))}
                </Row>
              </Col>
              <Col
                textAlign={
                  breakpoint >= BreakpointsEnum.MD ? 'right' : 'center'
                }
              >
                <H2>Main technologies</H2>
                <Row
                  justifyContent={
                    breakpoint >= BreakpointsEnum.MD
                      ? 'flex-end'
                      : 'space-between'
                  }
                >
                  {technologiesIcons.map((technologie, idx) => (
                    <IconAnchor key={idx}>
                      <FontAwesomeIcon
                        key={idx}
                        icon={technologie.icon}
                        fixedWidth
                        aria-hidden={true}
                        title={technologie.title}
                      />
                    </IconAnchor>
                  ))}
                </Row>
              </Col>
            </Row>
          </Row>
        </ContentArea>
      </Card>
    </Wrapper>
  )
}

export default Main
