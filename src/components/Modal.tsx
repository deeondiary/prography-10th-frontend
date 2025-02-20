import styled from "styled-components";
import useFormContext from "../hooks/useFormContext.tsx";
import {FormContextType} from "../global/form.interface.tsx";
import {COLORS} from "../global/constants.tsx";
import imgUrl from "../assets/image/warning.png";

function Modal() {
    const {setModalShow, modalMsg} = useFormContext() as FormContextType;

    return (
        <ModalWrap>
            <ModalContainer>
                <ModalContents>
                    <img src={imgUrl} width={32} alt="warning-image"/>
                    {modalMsg}</ModalContents>
                <ModalButton onClick={() => setModalShow(false)}>
                    확인
                </ModalButton>
            </ModalContainer>
        </ModalWrap>
    );
}

const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 320px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalContainer = styled.div`
    min-width: 280px;
    margin: 0 30px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ModalContents = styled.div`
    padding-top: 16px;
    margin: 10px 0 32px 0;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    white-space: pre;
`
const ModalButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.PINK};
    cursor: pointer;
    height: 48px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 5px;
    color: white;
    font-weight: 600;
`
export default Modal;