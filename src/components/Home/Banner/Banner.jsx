import React from "react";
import {
  BannerContent,
  Header,
  Section,
  Container,
  Notebook,
  Navigation,
  LogOutBtn,
  GroupTitleButton,
  Title,
  Subtitle,
  shakeAnimation,
  Icon,
  ContainerButtons,
  StartNow,
  AboutUsBtn,
} from "./style";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import logotipo from "../../../assets/img/logotipo.svg";
import notebook from "../../../assets/img/notebook.svg";
import noz from "../../../assets/img/noz.svg";

const Banner = () => {
  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout(); // Chama a função signout() do objeto auth
    navigate("/"); // Redireciona o usuário para a Home
  };

  return (
    <BannerContent>
      <Header>
        <Container>
          <Link to="">
            <img src={logotipo} alt="" width={60} />
          </Link>

          <Navigation>
            {auth.user ? (
              <Link to="/gestao/membros">Entrar</Link>
            ) : (
              <Link to="/login">Log In</Link>
            )}

            {auth.user && <LogOutBtn onClick={handleLogout}>Sair</LogOutBtn>}
          </Navigation>
        </Container>
      </Header>

      <Section>
        <Container>
          <GroupTitleButton>
            <div>
              <Title>Boas vindas ao Skilloo</Title>

              <Subtitle>
                Seu sistema favorito de gerenciamento e organização
              </Subtitle>
            </div>

            <ContainerButtons>
              <StartNow>
                {auth.user ? (
                  <Link to="/gestao/membros">Comece a Usar</Link>
                ) : (
                  <Link to="/login">Comece a Usar</Link>
                )}
              </StartNow>
              <AboutUsBtn>
                <Link to="https://oncapystudio.netlify.app/#" target="_blank">
                  Sobre Nozes <Icon src={noz} alt="" />
                </Link>
              </AboutUsBtn>
            </ContainerButtons>
          </GroupTitleButton>

          <Notebook src={notebook} alt="" />
        </Container>
      </Section>
    </BannerContent>
  );
};

export default Banner;
