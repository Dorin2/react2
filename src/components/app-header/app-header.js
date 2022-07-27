import React from 'react';
import './app-header.css';
import styled from 'styled-components';


const Header =styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1  {
        font-size: 26px;
        :hover {
            color: red;
        }
    }
`
const AppHeader = () =>{
    return (
        <Header>
            <h1>Dorin Ghetus</h1>
            <h2>5 post, likes 0</h2>
        </Header>
    )
}

export default AppHeader;