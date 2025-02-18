import styled from "styled-components";
import {RadioPropsType} from "../global/form.interface.tsx";

interface RadioButtonPropsType {
    options: RadioPropsType[];
}
function RadioButton(props: RadioButtonPropsType) {
    return (
        <>
        { props.options.map((option: RadioPropsType) => {
            return (
                <RadioWrap>
                    <Radio type="radio" name={option.name} value={option.value} onChange={props.onChange} />
                    <label htmlFor={option.value}>{option.label}</label>
                </RadioWrap>
            )
        })}
        </>
    );
}
const RadioWrap = styled.div`
    margin: 8px 0;
    display: flex;
    align-items: center;
`
const Radio = styled.input`
    margin: 0 6px 0 0;
    height: 24px;
`
export default RadioButton;