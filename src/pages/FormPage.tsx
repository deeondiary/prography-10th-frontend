import FormLayout from "../components/Form/FormLayout.tsx";
import {FormProvider} from "../context/FormContext.tsx";


function FormPage() {
    return (
        <div>
            <FormProvider>
                <FormLayout />
            </FormProvider>
        </div>
    );
}

export default FormPage;