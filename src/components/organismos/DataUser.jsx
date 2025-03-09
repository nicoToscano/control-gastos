import styled from "styled-components";
import { UserAuth } from "../../context/AuthContext";
import { ButtonCircle } from '../moleculas/ButtonCircle';
import { v } from "../../styles/variables";
import { ListaMenuDesplegable } from "../moleculas/ListaMenuDesplegable";
import { DesplegableUser } from "../../utils/dataEstatica";

export function DataUser() {

    const { user } = UserAuth();

    return (
        <Container>
            <div className="imgContainer">
                <img src={user.picture} alt="user" />
            </div>
            <ButtonCircle icon={<v.iconocorona />} width="25px" height="25px" bgColor="#fff" textColor="#181616" fontSize="11px" translateX="-60px" translateY="-20px" />

            <span className="nombre">{user.name}</span>

            <ListaMenuDesplegable data={DesplegableUser} top="60px" />

        </Container>
    );
}

const Container = styled.div`

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    top: 0;
    right: 0;
    margin-right: 10px;
    border-radius: 50px;
    margin: 15px;
    cursor: pointer;

    .imgContainer{
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        overflow: hidden;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 22px;

        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }        
    }

    &:hover{
        background-color: ${(props) => props.theme.bg3};
    }  

    .nombre{
        width: 100%;
        font-weight: 800;
        color: ${(props) => props.theme.text};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: break-word;
    }


`;
