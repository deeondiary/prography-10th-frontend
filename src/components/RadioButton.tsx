import styled from "styled-components";
import {FormContextType, FormDataType, RadioPropsType} from "../global/form.interface.tsx";
import useFormContext from "../hooks/useFormContext.tsx";
import React from "react";

interface RadioButtonPropsType {
    options: RadioPropsType[] | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    disabled?: boolean;
}
function RadioButton(props: RadioButtonPropsType) {
    const { data } = useFormContext() as FormContextType;
    return (
        <>
        { props.options && props.options.map((option: RadioPropsType) => {
            return (
                <RadioWrap key={option.label}>
                    <Radio
                        type="radio" name={option.name}
                        value={option.value}
                        disabled={props.disabled}
                        checked={data && data[option.name as keyof FormDataType] === option.value}
                        onChange={props.onChange} />
                    <label htmlFor={option.value}>{option.label}</label>
                </RadioWrap>
            )
        })}
        </>
    );
}
const RadioWrap = styled.div`
    margin-top: 4px;
    display: flex;
    align-items: center;
`
const Radio = styled.input`
    margin: 0 6px 0 0;
    height: 24px;
`
export default RadioButton;