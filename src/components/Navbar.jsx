import { FormControl, InputLabel, NativeSelect, Select } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-date-picker';
import DataFetch from './DataFetch'

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

const Language = styled.div`
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid blue;
    align-item: center;
    margin-left:20px;
    padding: 5px;
    height: 40px;


`
const Input =styled.div`
    border:none;
`
const Center = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
`
const StartDate = styled.div`
    margin-left: 55px;
    cursor: pointer;
    justify-content: flex-start;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
`
const Style = styled.div`
    margin-right:20px;
`

const Navbar = () => {
  const [value, onChange] = useState(new Date());

  return (
    
    <Container>
      <Wrapper>
          
          <Left> <AddCompany> Add Company</AddCompany></Left>
          <Center>
          <FormControl>
          
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Companies
  </InputLabel>
  <NativeSelect>
    <option value={1}>CTS(1)</option>
    <option value={2}>ABC(2)</option>
  </NativeSelect>
</FormControl>

          </Center>
          <Right>   
          <Style>Start Date</Style>
                    <DatePicker onChange={onChange} value={value} />        


          </Right>
          
      </Wrapper>
    </Container>
    
  )
}

export default Navbar
