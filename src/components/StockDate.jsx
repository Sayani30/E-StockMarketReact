import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: linen;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
    justify-content: flex-start;
`
const AddCompany = styled.div`
    margin-left: 55px;
    cursor: pointer;
    justify-content: center;
`

const Center = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`
const Style = styled.div`
    margin-right:20px;
`


const StockDate = () => {
    const [value, onChange] = useState(new Date());

  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                </Left>
                <Center>                    
                    <AddCompany>Company Code</AddCompany>
                </Center>
                <Right>
                    <Style>End Date</Style>
                    <DatePicker onChange={onChange} value={value} />
                </Right>
      </Wrapper>
      </Container>
    </div>
  );
}

export default StockDate
