

function FormSubmittedPage() {
    const data = window.submittedData;
    console.log(data);
    return (
        <div>
            제출 내용이 보인다네
            {data && data.name}
        </div>
    );
}

export default FormSubmittedPage;