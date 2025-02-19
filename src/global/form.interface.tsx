import React from "react";

export interface FormDataType {
    agreement: string;
    name: string;
    email: string;
    phone: string;
    role: string;
}
export interface DataErrorType {
    email: {isError: boolean, message: string};
    phone: {isError: boolean, message: string};
}
export interface PageInfoType {
    title: string;
    desc: string;
}

export interface FormContextType {
    page: number;
    setPage: (page: number) => void;
    data: FormDataType | undefined;
    setData: (data: FormDataType) => void;
    pageInfo: { [key: string]: PageInfoType };
    onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
    validityCheck: () => boolean;
    modalShow: boolean;
    setModalShow: (modal: boolean) => void;
    modalMsg: string;
    dataError: DataErrorType;
}

export interface FormQuestionPropsType {
    label: string;
    name: string;
    value?: string | undefined;
    placeholder?: string;
    children?: string;
    onClick?: () => void;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    color?: string;
    size?: string;
    borderRound?: boolean;
    required?: boolean;
    isError?: boolean;
    errorMsg?: string;
    type?: string;
    radioOptions?: RadioOptionsType;
}
export interface RadioPropsType {
    label: string;
    name: string;
    value: string | undefined;
}
export type RadioOptionsType = Array<RadioPropsType>;