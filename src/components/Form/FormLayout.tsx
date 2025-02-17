import useFormContext from "../../hooks/useFormContext.tsx";
import Button from "../Button";
import styled from "styled-components";
import Form1 from "./Form1.tsx";
import React from "react";
import {FormContextType} from "../../global/form.interface.tsx";

const FormLayout = () => {
    const { page, setPage, data, setData, pageInfo } = useFormContext() as FormContextType;

    console.log('page', page);
    const goPrevPage = () => {
        if (setPage) {
            setPage(page - 1);
        }
    }
    const goNextPage = () => {
        if (page === 2) {
            window.alert('submit')
        } else {
            if (setPage) {
                setPage(page + 1);
            }
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        // console.log(JSON.stringify(data))
    }

    const formList: {[key: string]: React.ReactNode} = {
        '0': <Form1 />,
        '1': <Form1 />,
        '2': <Form1 />,
    }


    const content = (
        <>
        <FormHeader>
            Prography 10기 지원서 {page + 1} / 3
        </FormHeader>
            <div>
                { pageInfo[page].desc }
            </div>
        <form onSubmit={() => handleSubmit}>
            { formList[page] }
            <FormButtonWrap>
                <Button size="s" disabled={page === 0} onClick={goPrevPage}>{'<'}</Button>
                <Button size="s" onClick={goNextPage}>{page === 2 ? '제출' : '>'}</Button>
            </FormButtonWrap>
        </form>
        </>
    )

    return content
}

const FormHeader = styled.div`
    background-color: yellow;
`
const FormButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
`
export default FormLayout;