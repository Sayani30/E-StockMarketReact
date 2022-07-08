import { render } from '@testing-library/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react';
import ErrorBoundary from './ErrorBoundary'
import { FormControl, NativeSelect, InputLabel } from '@material-ui/core';
import StockDate from './StockDate';
import styled from 'styled-components'


function DataFetch() {

  const styles = {
    alignItems: 'right',
    justifyContent: 'right',
  };
  const Wrapper = styled.div`
    padding: 10px 450px;
    display: flex;
    justify-content: space-between;
    background-color: linen;

`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
    justify-content: flex-start;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
    justify-content: flex-start;
`
  const initialState = {
  };
    const [data, setData] = useState({})
    const [companyCode, setCompanyCode] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () =>{
        setIdFromButtonClick(companyCode)
    }

    useEffect(() => {
        axios.get(`http://localhost:9090/api/v1.0/market/company/info/${companyCode}`)
        .then(res => {
            console.log(res);
          setData(initialState)
          setTimeout(() => {
            setData(res.data)

          }, 500);

        })
        .catch(err =>{
            console.log(err)
        })
    }, [idFromButtonClick])

    return (
      <Wrapper>
      <div style={styles}>
      

         <input type="text" value={companyCode} onChange={e=> setCompanyCode(e.target.value)} /> 
        <button type = "button" onClick={handleClick}> Search</button>


        { <div> 
            <p>The details of <b>{data?.comapanyName}</b> -</p>
            <p>Company CEO : <b>{data?.companyCEO}</b></p>
            <p>Company Website: <b>{data?.companyWebsite}</b></p>
            <p>Company Turnover: <b>{data?.companyTurnover}$</b></p>

            
            <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                <tr>
                    <th width="150" >Price($)</th>
                    <th width="300"  padding="100"> StartDate & Time</th>
                </tr>
                <tr>
                    <td padding="10">
                    {data?.stockDetailsList?.map(item => {
                return(
                  <div> {item.price}</div>
                )
              }
                )}</td>
                    <td>
                    {data?.stockDetailsList?.map(item => {
                return(
                  <div> {item.startDate}</div>
                )
              }
                )}</td>                </tr>
            </table>
            
        </div> }
      </div>
      </Wrapper>
    )
  }


export default DataFetch
