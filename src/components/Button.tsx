// import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components'
import {COLORS} from "../global/constants.tsx";
import {useEffect, useState} from "react";

interface ButtonPropsType {
    children: string;
    onClick?: () => void;
    color?: string;
    size?: string;
    borderRound?: boolean;
    submit?: boolean;
    disabled?: boolean;
}

function Button(props: ButtonPropsType) {
    const [fontSize, setFontSize] = useState('15px');
    const [width, setWidth] = useState('200px');

    useEffect(() => {
        switch (props.size) {
            case 's':
                setFontSize('13px');
                setWidth('80px');
                break;
            case 'm':
                setFontSize('15px');
                setWidth('120px');
                break;
            case 'l':
                setFontSize('18px');
                setWidth('140px');
                break;
            case 'xl':
                setFontSize('18px');
                setWidth('180px');
                break;
        }
    }, [props.size])

    return (
        <ButtonDesign color={props.color} size={fontSize} width={width} type={props.submit ? "submit" : "button"}
                   disabled={props.disabled}
                   border-radius={props.borderRound ? '120px' : '4px'}
                   onClick={props.onClick}>{props.children}</ButtonDesign>
    );
}

const ButtonDesign
    = styled.button<{ size?: string, width?: string, 'border-radius'?: string }>`
    background-color: ${(props) => props.color ? props.color : COLORS.PINK};
    padding: 12px;
    flex-shrink: 0;
    width: ${(props) => props.width ? props.width : '100px'};
    color: ${(props) => props.color === COLORS.GR_F9 ? COLORS.GR_DARK : props.color === COLORS.GR_BLUE ? COLORS.BK_333 : 'white'};;
    cursor: ${(props) => (props.disabled ? '' : 'pointer')};
    border: none;
    border-radius: ${props => props['border-radius']};
    font-size: ${(props) => props.size ? props.size : '12px'};
    font-weight: 700;
`

export default Button;