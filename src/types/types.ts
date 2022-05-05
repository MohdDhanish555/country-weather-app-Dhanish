
export type FormType = {
    onSubmit : (event : React.FormEvent<HTMLFormElement>) => void;
    onChange :  (event : React.ChangeEvent<HTMLInputElement>) => void;
    value : string;
};

export type CountryDetailsType = {
    data : Array<string | number>;
    onClick : (event: React.MouseEvent<HTMLButtonElement>) => void;
}
