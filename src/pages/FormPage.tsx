import FormLayout from "../components/form/FormLayout.tsx";
import {FormProvider} from "../context/FormContext.tsx";


function FormPage() {
    return (
        <>
            <FormProvider>
                <FormLayout />
            </FormProvider>
        </>
    );
}

export default FormPage;