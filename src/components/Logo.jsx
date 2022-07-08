import styled from "styled-components";

const Container = styled.div`
    height: 100px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight:bold;
    cursor: pointer;
    justify-content: center;
`
const Logo = () => {
    return(
            <Container> e-StockMarket</Container>
    )
}

export default Logo