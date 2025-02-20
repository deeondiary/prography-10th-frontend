import styled from "styled-components";
import {COLORS} from "../../global/constants.tsx";

// form Layout (지원양식 레이아웃)
export const FormLayoutWrap = styled.div`
    min-height: calc(100vh - 64px);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 32px 24px;
`
export const FormHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 28px;
    padding: 24px 0;
    font-weight: 700;
    flex-direction: column;
`
export const FormDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 12px;
    padding: 16px;
`
export const FormTitleWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`
export const FormTitleText = styled.div`
    font-size: 16px;
    margin-left: 5px;
    font-weight: 700;
`
export const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${COLORS.GR_LIGHT};
    margin: 0 16px;
`
export const FormButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
`

// form Question (지원양식 질문)
export const FormQuestionLabelWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const FormQuestionLabel = styled.div`
    font-size: 15px;
    margin: 4px 0 8px 0;
    font-weight: 600;
`
export const FormQuestionInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const FormQuestionStar = styled.span`
    color: ${COLORS.ORANGE};
    font-weight: 800;
    margin-left: 4px;
`
export const FormQuestionBlock = styled.div`
    background-color: ${COLORS.GR_F9};
    border-radius: 8px;
    margin: 24px 0;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ErrorMessage = styled.div<{ size?: string, width?: string }>`
    color: ${COLORS.PINK};
    margin: 8px 0 0 6px;
    font-size: 12px;
    font-weight: 700;
    white-space: pre;
    
    @media screen and (max-width: 320px) {
        max-width: 210px;
        white-space: break-spaces;
    }
`