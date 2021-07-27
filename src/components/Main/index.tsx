import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Card>
      <S.ProfileImage />
      <S.ContentArea>
        <S.Row direction="column">
          <S.H1>
            <S.Bolder>Rodrigo R. Almeida</S.Bolder>
            <br />
            Front-end Engineer at <S.Bolder>Grupo Level</S.Bolder>
          </S.H1>
          <S.Paragraph>
            “My name is <S.Bolder>Rodrigo R. Almeida</S.Bolder>, and my nickname
            on web is <S.Bolder>Drafenous</S.Bolder>, you can choice how you
            want to call me.”
          </S.Paragraph>
          <S.Paragraph>
            <S.Bolder>Brazilian</S.Bolder> (&#x1F1E7;&#x1F1F7;), born in
            26/11/1993.
          </S.Paragraph>

          <S.Row>
            <S.Col>
              <S.H2>Contact me on</S.H2>
              Contact Icons
            </S.Col>
            <S.Col textAlign="right">
              <S.H2>Main technologies</S.H2>
              Technologies Icons
            </S.Col>
          </S.Row>
        </S.Row>
      </S.ContentArea>
    </S.Card>
  </S.Wrapper>
)

export default Main
