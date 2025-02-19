import useFormContext from "../../hooks/useFormContext.tsx";
import Button from "../Button.tsx";
import Form1 from "./Form1.tsx";
import React from "react";
import {FormContextType} from "../../global/form.interface.tsx";
import ProgressBar from "../ProgressBar.tsx";
import {
    Divider,
    FormButtonWrap,
    FormDescription,
    FormHeader,
    FormLayoutWrap,
    FormTitleText, FormTitleWrap,
} from "./forms.styles.tsx";
import Form2 from "./Form2.tsx";
import Modal from "../Modal.tsx";
import {COLORS} from "../../global/constants.tsx";
import Form3 from "./Form3.tsx";

const FormLayout = () => {
    const {
        page,
        setPage,
        pageInfo,
        validityCheck,
        modalShow,
        setModalShow,
    } = useFormContext() as FormContextType;
    const goPrevPage = () => {
        if (setPage) {
            setPage(page - 1);
        }
    }
    const goNextPage = () => {
        if (validityCheck()) {
            if (page === 2) {
                window.alert('submit');
            } else {
                if (setPage) {
                    setPage(page + 1);
                }
            }
        } else {
            setModalShow(true);
        }
    }
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        // console.log(JSON.stringify(data))
    }

    const formList: { [key: string]: React.ReactNode } = {
        '0': <Form1/>,
        '1': <Form2/>,
        '2': <Form3/>,
    }


    const content = (
        <>
            <FormLayoutWrap>
                <div>
                    <FormHeader>
                        <img src="src/assets/img/logo.png" alt="prography-logo" width={100}/>
                        <div>Prography 10기 지원서</div>
                    </FormHeader>
                    <ProgressBar/>
                    <FormDescription>
                        <FormTitleWrap>
                            <img src="src/assets/img/flower_blue.png" className="rotate" alt="flower-img" width={16}/>
                            <FormTitleText>{pageInfo[page].title}</FormTitleText>
                        </FormTitleWrap>
                        {pageInfo[page].desc}
                    </FormDescription>
                    <Divider/>
                    <form onSubmit={() => handleSubmit}>
                        {formList[page]}
                    </form>
                </div>
                <FormButtonWrap>
                    <Button size="s" disabled={page === 0} color={page === 0 ? COLORS.GR_LIGHT : ''} onClick={() => goPrevPage()}>{'이전'}</Button>
                    <Button size="s" onClick={() => goNextPage()}>{page === 2 ? '제출' : '다음'}</Button>
                </FormButtonWrap>
            </FormLayoutWrap>
            {modalShow && <Modal/>}
        </>
    )

    return content
}
export default FormLayout;