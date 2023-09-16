import check from '../../../assets/img/check.png';
import {
  Card,
  Container,
  GroupCard,
  Section,
  Subtitle,
  Title,
  Titles,
} from './style';

function Usuarios() {
  const fds = [
    {
      user: 'Professor',
      functionalities: [
        'Buscar horário de aulas',
        'Reservar laboratórios',
        'Contatar suporte',
        'Anotações de aulas',
      ],
    },
    {
      user: 'Coordenador',
      functionalities: [
        'Gerenciar professores',
        'Atualizar horário de aulas',
        'Gerenciar turmas',
        'Realizar suporte',
      ],
    },
  ];

  return (
    <>
      <Container>
        <Titles>
          <div>
            <Title>Usuários</Title>
            <Subtitle>
              Conheça os tipos de usuários que podem utilizar o Skilloo{' '}
            </Subtitle>
          </div>
          <div></div>
        </Titles>
        <Section>
          <GroupCard>
            {fds.map((obj) => (
              <Card>
                <h2>{obj.user}</h2>
                <ul>
                  {obj.functionalities.map((item, index) => (
                    <li key={index}>
                      <img src={check} alt="" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </GroupCard>
        </Section>
      </Container>
    </>
  );
}

export default Usuarios;
