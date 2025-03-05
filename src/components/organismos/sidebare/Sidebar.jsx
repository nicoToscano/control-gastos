import styled from "styled-components";
import { v } from "../../../styles/variables";
import { LinksArray } from "../../../utils/dataEstatica";
import { NavLink } from "react-router-dom";

export function Sidebar({ state, setState }) {
    return (
        <Main>
            <Container sidebar={state}>
                <div className="logoContent">
                    <div className="imgContent">
                        <img src={v.logo} alt="" />
                    </div>
                    <h2>Control Gastos</h2>
                </div>

                {LinksArray.map(({ label, icon, to }) => (

                    <NavLink to={to}>
                        <div className="link">
                            <div className="icon">{icon}</div>
                            <span>{label}</span>
                        </div>
                    </NavLink>

                ))}

                <Divider />

            </Container>
        </Main>
    );
}

const Container = styled.div`

color: ${(props) => props.theme.text};
background-color: ${(props) => props.theme.bg};
position: fixed;
padding-top: 20px;
z-index: 100;
height: 100%;

.logoContent{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;

    .imgContent{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        transform: ${({ sidebar }) => (sidebar ? `scale(0.7)` : `scale(1.5)`)} rotate(${props => (props.theme.logorotate)});

        img{
            width: 100%;
            animation: flotar 1.7s infinite ease-in-out alternate; 
        }       
        
    }

    h2 {
        display: ${({ sidebar }) => (sidebar ? `block` : `none`)};
    }

    @keyframes flotar {

        0% {
            transform: translate(0px, 0px);
        }

        50% {
            transform: translate(0px, 4px);
        }

        100% {
            transform: translate(0px, -0px);
        }
        
    }
}


`;

const Main = styled.div`

`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.bg4};
    margin: ${v.lgSpacing} 0;
`;