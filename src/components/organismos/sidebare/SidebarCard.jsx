import styled from "styled-components";
import { v } from "../../../styles/variables";
import { Button } from "../../moleculas/Button";

export function SideBarCard() {
    return (
        <Container>
            <span className="icon">{<v.iconoayuda />}</span>
            <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Centro de ayuda</h3>

                <div className="contentButton">

                <Button className="btnSideBarCard" title="Contactar" bgcolor="#FFE4E0" />
                </div>

            </div>
        </Container>
    );
}


const Container = styled.div`

    width: 100%;
    padding: 1rem;
    text-align: center;
    position: relative;

    .icon {
        position: absolute;
        font-size: 2.5rem;
        font-weight: 800;
        color: ${(props) => props.theme.text};
        border-radius: 50%;
        top: -5px;
        right: 50%;
        transform: translateX(50%);

        z-index: 100;
    }

    .cardContent {
        position: relative;
        padding: 1rem;
        background: ${(props) => props.theme.bg5};
        border-radius: 10px;
        overflow: hidden;
        z-index: 99;

        .circle1, .circle2{
            position: absolute;
            background: #FFE4E0;
            border-radius: 50%;
            opacity: 0.7;
            z-index: -1;
            transition: all 0.3s ease-in-out;
        }

        .circle1 {
            width: 100px;
            height: 100px;
            top: -25px;
            left: -50px;
        }

        .circle2{
            width: 130px;
            height: 130px;
            bottom: -80px;
            right: -70px;
        }

        h3{
            font-size: 20px;
            margin-top: 1rem;
            padding: 1rem 0;
            font-weight: bolder;
            color: #000;
            transition: all 0.3s ease-in-out;
        }

        .contentButton {
            margin-left: 10px;
        }

        &:hover .circle1, &:hover .circle2 {
            opacity: 0.8;
            transform: scale(1.2);
        }

        /* &:hover h3 {
            color: #ffffff;
            opacity: 0.9;
        } */
    }

`
