export interface FormDataType {
    agreement: string;
    name: string;
    email: string;
    phone: string;
    role: string;
}

export interface PageInfoType {
    title: string;
    desc: string;
}

export interface FormContextType {
    page: number;
    setPage: (page: number) => void;
    data: FormDataType | undefined;
    setData: (data: FormDataType) => void;
    pageInfo: { [key: string]: PageInfoType };
}