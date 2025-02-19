import {
    ErrorMessage,
    FormQuestionInputWrap,
    FormQuestionLabel,
    FormQuestionLabelWrap,
    FormQuestionStar
} from "./forms.styles.tsx";
import Input from "../Input.tsx";
import RadioButton from "../RadioButton.tsx";
import {FormQuestionPropsType} from "../../global/form.interface.tsx";

function FormQuestion(props: FormQuestionPropsType) {
    return (
        <FormQuestionLabelWrap>
            <FormQuestionLabel>
                {props.label}<FormQuestionStar>*</FormQuestionStar>
            </FormQuestionLabel>
            <FormQuestionInputWrap>
                {props.type ?
                    <RadioButton options={props.radioOptions} onChange={props.onChange} /> :
                    <Input label={props.label} name={props.name} value={props.value}
                           onChange={props.onChange}
                           placeholder={props.placeholder}/>}
                {props.isError &&
                    <ErrorMessage>
                        {props.errorMsg ? props.errorMsg : '내용을 입력해주세요.'}
                    </ErrorMessage>}
            </FormQuestionInputWrap>
        </FormQuestionLabelWrap>
    );
}
export default FormQuestion;