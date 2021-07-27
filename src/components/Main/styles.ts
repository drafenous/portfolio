import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #171717;
  color: #ededed;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  background-color: #444444;
  width: 1104px;
  height: auto;
  border-bottom: 2px solid #da0037;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
`

export const ProfileImage = styled.img.attrs({
  src: 'img/profile-image.jpg'
})`
  width: 350px;
  height: 350px;
`

export const ContentArea = styled.div`
  font-family: Ubuntu;
  box-sizing: border-box;
  max-width: 595px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction || 'row'};
`

export const Col = styled.div`
  flex-grow: 1;
  text-align: ${(props) => props.textAlign || 'left'};
`
