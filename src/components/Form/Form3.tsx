import useFormContext from "../../hooks/useFormContext.tsx";
import {FormContextType} from "../../global/form.interface.tsx";
import FormQuestion from "./FormQuestion.tsx";
import {FormQuestionBlock} from "./forms.styles.tsx";

function Form3() {
    const {onChangeInput} = useFormContext() as FormContextType;
    const radioOptions = [
        {
            name: 'role',
            label: '프론트엔드',
            value: 'frontend',
        },
        {
            name: 'role',
            label: '백엔드',
            value: 'backend',
        },
        {
            name: 'role',
            label: '디자인',
            value: 'design',
        },
        {
            name: 'role',
            label: 'iOS',
            value: 'ios',
        },
        {
            name: 'role',
            label: '백엔드',
            value: 'android',
        },
        {
            name: 'role',
            label: 'Product Owner',
            value: 'po',
        },
    ]

    return (
        <FormQuestionBlock>
            <FormQuestion name="agreement" label="지원 분야를 선택해주세요."
                          onChange={onChangeInput}
                          type="radio"
                          radioOptions={radioOptions}
            />
        </FormQuestionBlock>
    );
}

export default Form3;