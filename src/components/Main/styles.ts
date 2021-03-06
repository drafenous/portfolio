import styled from 'styled-components'
interface DarkModeProps {
  darkModeEnabled?: boolean
}
interface RowProps extends DarkModeProps {
  direction?: 'column' | 'row'
  justifyContent?: 'space-between' | 'flex-start' | 'flex-end'
}
interface ColProps extends DarkModeProps {
  textAlign?: 'left' | 'right' | 'center'
}

export const Wrapper = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 100%;
  @media screen and (min-width: 992px) {
    min-height: 100vh;
  }
`

export const Card = styled.div<DarkModeProps>`
  background-color: ${({ darkModeEnabled }) =>
    darkModeEnabled ? '#444444' : '#DDDDDD'};
  height: auto;
  border-bottom: 2px solid #da0037;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin: 25px;
  transition: all 200ms ease-in-out;
  user-select: none;
  position: relative;
  color: ${({ darkModeEnabled }) => (darkModeEnabled ? '#EDEDED' : '#171717')};
  @media screen and (min-width: 992px) {
    flex-direction: row;
    max-width: 1104px;
  }
  &:hover {
    @media screen and (min-width: 992px) {
      box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.5);
      transform: scale(1.015);
    }
  }
`

export const ButtonToggleTheme = styled.button<DarkModeProps>`
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
  width: 30px;
  height: 30px;
  font-size: 18px;
  padding: 7px;
  background-color: transparent;
  cursor: pointer;
  text-shadow: 0px 2px 4px #000000;
  color: ${({ darkModeEnabled }) => (darkModeEnabled ? '#ffe600' : '#FFFFFF')};
`

export const ProfileImage = styled.img.attrs({
  src: '/img/profile-image.jpg',
  /* prettier-ignore */
  alt: 'Imagem de perfil de Rodrigo Roberto de Almeida em um fundo branco, com camisa social preta, gravata e cabelo penteado de lado.',
  width: '992px',
  height: '992px'
})`
  width: 100%;
  height: auto;
  user-drag: none;
  @media screen and (min-width: 992px) {
    width: 350px;
    height: 350px;
  }
`

export const ContentArea = styled.div`
  font-family: Ubuntu;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  max-width: 595px;
  padding: 20px;
`

export const HR = styled.hr`
  background-color: #da0037;
  border-color: #da0037;
  color: #da0037;
  margin: 0 0rem 25px 0;
`

export const H1 = styled.h1`
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 30px;
`

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 12px;
`

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: normal;
`

export const Bolder = styled.b`
  font-weight: bold;
  color: #da0037;
`

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  flex-direction: ${(props) => props.direction || 'row'};
  gap: 10px;
`

export const Col = styled.div<ColProps>`
  flex-grow: 1;
  text-align: ${(props) => props.textAlign || 'left'};
`

export const Popover = styled.div`
  position: absolute;
  background-color: #000000;
  color: #ffffff;
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 10px;
  white-space: nowrap;
  opacity: 0;
  top: 130%;
  left: 50%;
  transform: translateX(calc(-50% - 2px));
  transition: opacity 200ms ease-in-out;

  ::before {
    content: '';
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #000000;
    position: absolute;
    top: -4px;
    left: calc(50% - 4px);
  }
`

export const IconAnchor = styled.a<DarkModeProps>`
  height: 30px;
  width: 30px;
  color: ${({ darkModeEnabled }) => (darkModeEnabled ? '#EDEDED' : '#171717')};
  transition: color 200ms ease-in-out;
  position: relative;
  :hover {
    color: #da0037;
    ${Popover} {
      opacity: 1;
      z-index: 1;
    }
  }
`

export const IconDiv = styled.div<DarkModeProps>`
  height: 30px;
  width: 30px;
  color: ${({ darkModeEnabled }) => (darkModeEnabled ? '#EDEDED' : '#171717')};
  transition: color 200ms ease-in-out;
  position: relative;
  :hover {
    color: #da0037;
    ${Popover} {
      opacity: 1;
      z-index: 1;
    }
  }
`
