import React from "react";
import styled from "styled-components";

import iconUser from "../../assets/img/account_circle.svg";

const Container = styled.div`
  width: 600px;
  height: 650px;
  background-color: #fff;
  border-radius: 8px;
  padding: 2em;
`;

const DivAula = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 0em;
  border-top: 0.5px solid #acacac;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 1.5em;
`;

const LabelProf = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #2c2c2c;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  img {
    margin-right: 5px;
  }
`;

const LabelMateria = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #3f3f3f;
`;

const ShowSchedule = ({ filteredData }) => {
  return (
    <Container>
      <Title>Aulas</Title>
      {filteredData ? (
        <>
          {filteredData.map((item) => (
            <DivAula key={item.id}>
              <div>
                <LabelProf>
                  <img src={iconUser} />
                  {item.professores
                    .map((professor) => professor.nome)
                    .join(", ")}
                </LabelProf>
                <LabelMateria>{item.materia.nome}</LabelMateria>
              </div>

              <h3>{item.horario.replace(":00", "")}</h3>
            </DivAula>
          ))}
        </>
      ) : (
        <p>Nenhum dado filtrado.</p>
      )}
    </Container>
  );
};

export default ShowSchedule;
