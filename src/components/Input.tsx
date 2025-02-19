import styled from "styled-components";
import {COLORS} from "../global/constants.tsx";
import React from "react";

interface InputPropsType {
    label: string;
    name: string;
    value: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    color?: string;
    required?: boolean;
    placeholder?: string;
}

function Input(props: InputPropsType) {
    return (
        <InputStyle
            name={props.name} onChange={props.onChange} placeholder={props.placeholder} value={props.value}
            color={COLORS.BLUE} required={props.required} />
    );
}
const InputStyle = styled.input<{ error?: boolean, color?: string }>`
    font-size: 15px;
    padding: 4px 8px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid;
    border-color: ${(props) => props.error ? COLORS.PINK : COLORS.GR_DARK};
    font-weight: 500;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-grow: 0;

    &:focus {
        outline: none;
        border-bottom: 2px solid;
        border-color: ${(props) => props.error ? COLORS.PINK : COLORS.BLUE};
    }
`

export default Input;