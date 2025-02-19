import useFormContext from "../../hooks/useFormContext.tsx";
import {FormContextType} from "../../global/form.interface.tsx";
import FormQuestion from "./FormQuestion.tsx";
import {FormQuestionBlock} from "./forms.styles.tsx";

function Form1() {
    const {onChangeInput} = useFormContext() as FormContextType;
    const radioOptions = [
        {
            name: 'agreement',
            label: '개인정보 수집에 동의합니다.',
            value: 'true',
        },
        {
            name: 'agreement',
            label: '개인정보 수집에 동의하지 않습니다.',
            value: 'false',
        }
    ]

    return (
        <FormQuestionBlock>
            ∙ 수집목적 : Prography 10기 리쿠르팅 과정 및 결과 안내<br/>
            ∙ 수집항목 : 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보<br/>
            ∙ 보유 및 이용기간 : 리쿠르팅과정종료일(3월 7일) 이후 파기
            <div style={{height: '14px'}}/>
            <FormQuestion name="agreement" label="개인정보 수집 동의 여부를 체크 해주세요."
                          onChange={onChangeInput}
                          type="radio"
                          radioOptions={radioOptions}
            />
        </FormQuestionBlock>
    );
}

export default Form1;