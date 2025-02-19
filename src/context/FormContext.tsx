import React, {createContext, useState} from "react";
import {
    FormContextType,
    FormDataType,
    PageInfoType,
} from "../global/form.interface.tsx";


const FormContext = createContext<FormContextType | undefined>(undefined);
export const FormProvider = ({children}: { children: React.ReactNode }) => {
    // 지원양식 페이지 정보 (타이틀 , 설명)
    const pageInfo: { [key: string]: PageInfoType } = {
        0: {title: "개인정보 수집 동의", desc: "프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다."},
        1: {title: "기본 정보", desc: "연락 가능한 정보를 입력 해주세요."},
        2: {title: "지원 정보", desc: "지원하고자하는 분야를 선택해주세요."},
    };
    // 지원양식 페이지 관리 (총 3페이지)
    const [page, setPage] = useState<number>(0);

    // 지원양식 입력내용 관리
    const [data, setData] = useState<FormDataType>({
        agreement: '',
        name: '',
        email: '',
        phone: '',
        role: '',
    });

    const emailErrMsg = '이메일 형식으로 입력해주세요 (예시.pg@gmail.com)';
    const phoneErrMsg = '하이픈(-)도 입력해주세요 (예시.010-1234-5678)';
    // 입력 내용 서식 확인 (이메일/전화번호)
    const [dataError, setDataError] = useState({
        email: {isError: false, message: emailErrMsg},
        phone: {isError: false, message: phoneErrMsg},
    });
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PHONE_REGEX = /^\d{3}-\d{4}-\d{4}$/;

    // 입력 여부 확인 (필수항목)
    const validityCheck = () => {
        if (page === 0) {
            if (data.agreement === 'true') {
                return true;
            } else {
                setModalMsg('개인정보 수집에 동의하지 않으면\n 지원하실 수 없습니다.');
                return false;
            }
        } else if (page === 1) {
            if (data.name !== '' && data.phone !== '' && data.email !== '') {
                if (EMAIL_REGEX.test(data.email) && PHONE_REGEX.test(data.phone)) {
                    return true;
                } else {
                    setModalMsg('입력 내용을 확인해주세요.');
                    return false;
                }
            } else {
                setModalMsg('필수 항목을 모두 입력 해주세요.');
                return false;
            }
        } else if (page === 2) {
            if (data.role !== '') {
                return true;
            } else {
                setModalMsg('지원 분야를 선택해주세요.');
                return false;
            }
        } else {
            throw Error;
        }
    }
    // 경고 팝업 상태관리
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [modalMsg, setModalMsg] = useState<string>('');

    // input 이벤트 관리
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const type = e.target.type
        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        if (name === 'email') {
            if (!EMAIL_REGEX.test(value.toString())) {
                setDataError({...dataError, email : {isError: true, message: emailErrMsg}});
            } else {
                setDataError({...dataError, email : {isError: false, message: emailErrMsg}});
            }
        } else if (name === 'phone') {
            if (!PHONE_REGEX.test(value.toString())) {
                setDataError({...dataError, phone : {isError: true, message: phoneErrMsg}});
            } else {
                setDataError({...dataError, phone : {isError: false, message: phoneErrMsg}});
            }
        }

        const newData = {
            ...data,
            [name]: value
        }
        setData(newData);
    }

    return (
        <FormContext.Provider
            value={{
                page, setPage, data, setData, pageInfo, onChangeInput,
                validityCheck, modalShow, setModalShow, modalMsg, dataError,
            }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;