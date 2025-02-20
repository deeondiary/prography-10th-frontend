import styled from "styled-components";
import React from "react";
import imgUrl from '../assets/image/logo.png';

function Heading(props: {children: string | React.ReactNode}) {
    return (
        <PageWrap>
            <img src={imgUrl} alt="prography-logo" width={100}/>
            <PageTitle>{props.children}</PageTitle>
        </PageWrap>
    );
}
const PageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 28px;
    padding: 24px 0;
    font-weight: 700;
    flex-direction: column;
`
const PageTitle = styled.div`
    font-size: 24px;
    padding: 16px 0;
    white-space: break-spaces;
    text-align: center;
`
export default Heading;