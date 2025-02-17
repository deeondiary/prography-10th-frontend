import React, { createContext,  useState } from "react";
import {FormContextType, FormDataType, PageInfoType} from "../global/form.interface.tsx";


const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children } : { children: React.ReactNode  }) => {
    const pageInfo : {[key: string]: PageInfoType} = {
        0: { title: "개인정보 수집 동의", desc: "프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다."},
        1: { title: "기본 정보", desc: "연락 가능한 정보를 입력 해주세요."},
        2: { title: "지원 정보", desc: "지원하고자하는 분야를 선택해주세요."},
    };
    const [page, setPage] = useState<number>(0);
    const [data, setData] = useState<FormDataType>();

    return (
       <FormContext.Provider value={{page, setPage, data, setData, pageInfo}}>
           {children}
       </FormContext.Provider>
    )
}

export default FormContext;