import FormLayout from "../components/Form/FormLayout.tsx";
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