import styled from "styled-components";
import { v } from "../../../styles/variables";
import { LinksArray, SecondarylinksArray, TemasData } from "../../../utils/dataEstatica";
import { NavLink } from "react-router-dom";
import {SideBarCard} from "./SidebarCard";

export function Sidebar({ state, setState }) {
    return (
        <Main sidebar={state}>

            <span className="sidebarBtn" onClick={() => setState(!state)}>
                {<v.iconoflechaderecha />}
            </span>

            <Container sidebar={state} className={state ? "active" : ""}>
                <div className="logoContent">
                    <div className="imgContent">
                        <img src={v.logo} alt="" />
                    </div>
                    <h2>Coins</h2>
                </div>

                {LinksArray.map(({ label, icon, to }) => (

                    <div className={state ? "linkContainer active" : "linkContainer"}>

                        <NavLink className={({ isActive }) => `Links${isActive ? ` active` : ``}`} to={to}>
                            <div className="linkIcon">{icon}</div>
                            {state && (<span>{label}</span>)}
                        </NavLink>

                    </div>
                ))}

                <Divider />

                {SecondarylinksArray.map(({ label, icon, to }) => (

                    <div className={state ? "linkContainer active" : "linkContainer"}>

                        <NavLink className={({ isActive }) => `Links${isActive ? ` active` : ``}`} to={to}>
                            <div className="linkIcon">{icon}</div>
                            {state && (<span>{label}</span>)}
                        </NavLink>

                    </div>
                ))}

                <Divider />

                {state && (<SideBarCard />)}

            </Container>
        </Main>
    );
}

const Container = styled.div`

color: ${(props) => props.theme.text};
background-color: ${(props) => props.theme.bg};
position: fixed;
padding-top: 20px;
z-index: 1;
height: 100%;
width: 65px;
transition: all 0.3s ease-in-out;
overflow-y: auto;
overflow-x: hidden;

&::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
}

&.active {
    width: 220px;
}

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
        font-weight: 800;
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

.linkContainer{
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
    padding: 0 5%;
    position: relative;

    &:hover{
        background-color: ${(props) => props.theme.bg4};
    }

    .Links {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: calc(${() => v.smSpacing} - 2px) 0;
        color: ${(props) => props.theme.text};
        height: 60px;

        .linkIcon{
            padding: ${() => v.smSpacing} ${() => v.smSpacing};
            display: flex;
            svg {
                font-size: 25px;
            }
        }

        &.active {

            color: ${(props) => props.theme.bg5};
            &::before{
            content:"";
            position: absolute;
            height: 100%;
            background-color: ${(props) => props.theme.bg5};
            width: 5px;
            border-radius: 0 5px 5px 0;
            left: 0;
            } 
        }

    }
}
`;

const Main = styled.div`
  .sidebarBtn {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    

    background-color: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    z-index:2;

    transform: ${({ sidebar }) => (sidebar ? `translateX(162px) rotate(0deg)` : `rotate(180deg)`)};

  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;