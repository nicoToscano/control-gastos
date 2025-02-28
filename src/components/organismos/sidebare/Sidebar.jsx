import styled from "styled-components";

export function Sidebar({ state, setState }) {
    return (
        <Main>
            <Container>
                <h1>Sidebar</h1>
            </Container>
        </Main>
    );
}

const Container = styled.div`


background-color: ${(props) => props.theme.whiteBg};


`;

const Main = styled.div`

`;