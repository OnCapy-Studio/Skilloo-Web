import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: #0000007d;
`;

export const Frame = styled.div`
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  padding: 3em 1.5em;
  width: 460px;
`;

export const TopSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.span`
  font-size: 40px;
  margin-right: 0.5em;
`;

export const IconClose = styled.span`
  font-size: 30px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Subtitle = styled.p`
  font-size: 0.8em;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-height: 500px;
`;

export const BottomSection = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SubmitBtn = styled.button`
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #6a5fb6;
  color: #fff;
  font-size: 0.9em;
  width: 48%;
  height: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    background-color: #ac9fff;
    transform: scale(1.025);
  }
`;

export const CancelBtn = styled.button`
  border-radius: 5px;
  border: 1px solid #6a5fb6;
  outline: none;
  background-color: #fff;
  color: #6a5fb6;
  font-size: 0.9em;
  width: 48%;
  height: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    color: red;
    border: 1px solid red;
    transform: scale(1.025);
  }
`;
