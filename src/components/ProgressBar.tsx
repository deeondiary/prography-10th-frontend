import styled from "styled-components";
import Button from "./Button.tsx";
import {COLORS} from "../global/constants.tsx";
import useFormContext from "../hooks/useFormContext.tsx";
import {FormContextType} from "../types/form.interface.tsx";

function ProgressBar() {
    const {page} = useFormContext() as FormContextType;
    return (
        <BarWrap>
            <Button disabled={true} size='s' borderRound={true} color={page === 0 ? COLORS.PINK : COLORS.GR_F9}>1. 수집동의</Button>
            <CenterLine/>
            <Button disabled={true} size='s' borderRound={true} color={page === 1 ? COLORS.PINK : COLORS.GR_F9}>2. 기본정보</Button>
            <CenterLine/>
            <Button disabled={true} size='s' borderRound={true} color={page === 2 ? COLORS.PINK : COLORS.GR_F9}>3. 지원정보</Button>
            <CenterLine/>
            <Button disabled={true} size='s' borderRound={true} color={page === 3 ? COLORS.PINK : COLORS.GR_F9}>제출완료</Button>
        </BarWrap>
    );
}

const BarWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding: 24px 0 42px 0;
    @media screen and (max-width: 345px) {
        flex-direction: column;
        gap: 8px;
        padding: 0px;
    }
`
const CenterLine = styled.div<{ id?: string }>`
    background-color: ${COLORS.GR_F9};
    height: 2px;
    width: 100%;
    display: block;

    @media screen and (max-width: 345px) {
        display: none;
    }
`
export default ProgressBar;