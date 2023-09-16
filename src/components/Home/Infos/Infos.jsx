import React from 'react';
import TelaMembros from '../../../assets/img/tela_membros.png';
import {
  ButtonSignIn,
  Container,
  DivTitles,
  Img,
  ImgIphone,
  PlaystoreBt,
  Section,
  Subtitle,
  Title,
} from './style';

import Playstore from '../../../assets/img/playstore.svg';
import { Link } from 'react-router-dom';
import Iphone from '../../../assets/img/iphone.svg';
import { AuthContext } from '../../../context/AuthContext';

function Infos() {
  const auth = React.useContext(AuthContext);
  return (
    <>
      <Section>
        <Container>
          <Img src={TelaMembros}></Img>
          <DivTitles>
            <Title>Gerencie sua unidade escolar com o Skilloo</Title>
            <Subtitle>
              Admistre professores, horários, laboratórios, turmas e matérias
              com mais eficiência. <br></br> O Skilloo Web está disponível
              apenas para coordenadores.
            </Subtitle>
            <ButtonSignIn>
              {auth.user ? (
                <Link to="/gestao/membros">
                  <p>Sign In</p>
                </Link>
              ) : (
                <Link to="/login">
                  <p>Sign In</p>
                </Link>
              )}
            </ButtonSignIn>
          </DivTitles>
        </Container>
      </Section>
      <Section>
        <Container>
          <DivTitles>
            <Title>Entre como professor</Title>
            <Subtitle>
              Acesse o Skilloo como professor no seu smartphone e gerencie suas
              turmas, tasks e reservas em laboratórios. O Skilloo Mobile está
              disponível apenas para professores.
            </Subtitle>
            <PlaystoreBt>
              <Link to={'#'}>
                <img src={Playstore} />
              </Link>
            </PlaystoreBt>
          </DivTitles>
          <ImgIphone src={Iphone} />
        </Container>
      </Section>
    </>
  );
}

export default Infos;
