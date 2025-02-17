import { useContext } from "react"
import FormContext from "../context/FormContext.tsx";
import {FormContextType} from "../global/form.interface.tsx";

const useFormContext: () => FormContextType | undefined = () => {
    return useContext(FormContext)
}

export default useFormContext