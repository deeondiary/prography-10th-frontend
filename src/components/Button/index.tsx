// import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components'
import {COLORS} from "../../constants/constants.tsx";
import {useEffect, useState} from "react";

interface ButtonPropsType {
    children: string;
    onClick?: () => void;
    color?: string;
    size?: string;
    borderRound?: boolean;
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
                setFontSize('24px');
                setWidth('180px');
                break;
        }
    }, [props.size])

    return (
        <ProButton color={props.color} size={fontSize} width={width}
                   border-radius={props.borderRound ? '120px' : '4px'}
                   onClick={props.onClick}>{props.children}</ProButton>
    );
}

const ProButton
    = styled.button<{ size?: string, width?: string, 'border-radius'?: string }>`
        background-color: ${(props) => props.color ? props.color : COLORS.PINK};
        padding: 12px;
        width: ${(props) => props.width ? props.width : '100px'};;
        color: white;
        cursor: pointer;
        border: none;
        border-radius: ${props => props['border-radius']};
        font-size: ${(props) => props.size ? props.size : '12px'};
        font-weight: 800;
    `

export default Button;