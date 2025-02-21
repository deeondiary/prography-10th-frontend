import useFormContext from "../../hooks/useFormContext.tsx";
import Button from "../Button.tsx";
import Form1 from "./Form1.tsx";
import React from "react";
import {FormContextType, FormDataType} from "../../types/form.interface.tsx";
import ProgressBar from "../ProgressBar.tsx";
import {
    Divider,
    FormButtonWrap,
    FormDescription,
    FormLayoutWrap,
    FormTitleText, FormTitleWrap,
} from "./forms.styles.tsx";
import Form2 from "./Form2.tsx";
import Modal from "../Modal.tsx";
import {COLORS} from "../../global/constants.tsx";
import Form3 from "./Form3.tsx";
import FormSubmitted from "./FormSubmitted.tsx";
import Heading from "../Heading.tsx";
import imgUrl from '../../../public/assets/image/flower_blue.png';

const FormLayout = () => {
    const {
        page,
        setPage,
        pageInfo,
        validityCheck,
        modalShow,
        setModalShow,
        data
    } = useFormContext() as FormContextType;
    const goPrevPage = () => {
        if (setPage) {
            setPage(page - 1);
        }
    }
    const goNextPage = () => {
        if (validityCheck()) {
            if (page === 2) {
                submitForm();
                setPage(page + 1);
            } else {
                if (setPage) {
                    setPage(page + 1);
                }
            }
        } else {
            setModalShow(true);
        }
    }

    // 📌 지원양식 제출 (API 통신 위한 폼 데이터 구성)
    const submitForm = () => {
        console.log('제출 데이터 내용', data);
        const formData: FormData = new FormData;
        Object.entries(data as FormDataType).forEach(([key, value]) => {
            formData.append(key, value);
        });
    }

    const formList: { [key: string]: React.ReactNode } = {
        '0': <Form1 submitted={false}/>,
        '1': <Form2 submitted={false}/>,
        '2': <Form3 submitted={false}/>,
    }


    const content = (
        <>
            <FormLayoutWrap>
                <div>
                    <Heading>Prography 10기 지원서</Heading>
                    <ProgressBar/>
                    {page <= 2 ?
                        <>
                            <FormDescription>
                                <FormTitleWrap>
                                    <img src={imgUrl} className="rotate" alt="flower-img"
                                         width={16}/>
                                    <FormTitleText>{pageInfo[page].title}</FormTitleText>
                                </FormTitleWrap>
                                {pageInfo[page].desc}
                            </FormDescription>
                            <Divider/>
                            <form onSubmit={submitForm}>
                                {formList[page]}
                            </form>
                        </> :
                        <FormSubmitted/>}
                </div>
                {page <= 2 &&
                    <FormButtonWrap>
                        <Button size="s" disabled={page === 0} color={page === 0 ? COLORS.GR_LIGHT : ''}
                                onClick={() => goPrevPage()}>{'이전'}</Button>
                        <Button size="s" onClick={() => goNextPage()}>{page === 2 ? '제출' : '다음'}</Button>
                    </FormButtonWrap>}
            </FormLayoutWrap>
            {modalShow && <Modal/>}
        </>
    )

    return content
}
export default FormLayout;