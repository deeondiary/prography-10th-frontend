import styled from "styled-components";
import Button from "../Button.tsx";
import {COLORS} from "../../global/constants.tsx";
import useFormContext from "../../hooks/useFormContext.tsx";
import {FormContextType, FormDataType} from "../../global/form.interface.tsx";
import {useNavigate} from "react-router-dom";

declare global {
    interface Window {
        submittedData: FormDataType;
    }
}
function FormSubmitted() {
    const {data} = useFormContext() as FormContextType;
    const navigate = useNavigate();

    const goSubmittedViewPage = () => {
        const newWindow: Window | null = window.open('/form-submitted', '_blank');
        if (newWindow && data) {
            newWindow.submittedData = data;
        }
    }

    return (
        <PageWrapper>
            <div>{data && data.name}님, 제출 완료 되었습니다 🥳</div><br/>
            <div>
                Prography 10기에 지원해주셔서감사합니다.<br/>
                서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
            </div>
            <ButtonWrap>
                <Button size='xl' onClick={() => navigate('/')} borderRound={true} color={COLORS.BLUE}>메인으로</Button>
                <Button size='xl' onClick={goSubmittedViewPage} borderRound={true}>제출내용 보기</Button>
            </ButtonWrap>
        </PageWrapper>
    );
}
const PageWrapper = styled.div`
    display: flex;
    padding: 64px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const ButtonWrap = styled.div`
    display: flex;
    gap: 12px;
    padding: 42px 24px;
    flex-direction: column;
`
export default FormSubmitted;