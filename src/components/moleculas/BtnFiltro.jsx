import styled from "styled-components";
export function BtnFiltro({ bgColor, textColor, icono, funcion }) {
  return (
    <Container $bgColor={bgColor} $textColor={textColor} onClick={funcion}>
      <div className="contentIcon">
        <span>{icono}</span>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: relative;
  cursor: pointer;

  .contentIcon {
    position: absolute;
    top: 30%;
    bottom: 30%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    transition: 0.2s;

    &:hover{
      transform: scale(1.3);
    }
  }
`;
