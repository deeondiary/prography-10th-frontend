import Heading from "../Heading.tsx";
import Form1 from "./Form1.tsx";
import styled from "styled-components";
import Form2 from "./Form2.tsx";
import Form3 from "./Form3.tsx";
import Button from "../Button.tsx";

function FormSubmittedModal(props: {close: () => void}) {
    return (
        <ModalWrap>
            <ModalContainer>
                <Heading>Prography 10기 지원양식<br/>제출내용 다시보기</Heading>
                <Form1 submitted/>
                <Form2 submitted/>
                <Form3 submitted/>
                <div className="fx-all-center"><Button borderRound={true} onClick={props.close}>닫기</Button></div>
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
    max-width: calc(100% - 72px);
    max-height: calc(100% - 72px);
    overflow-y: auto;
    padding: 16px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export default FormSubmittedModal;