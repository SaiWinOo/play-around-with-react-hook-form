import React from 'react';
import Input from "./Input";
import {Control, Controller, FieldError} from "react-hook-form";


type FormControlInputProps = {
    control: Control<any>,
    error: FieldError | undefined;
    type: string;
    defaultValue: string;
    name: string;
}


const FormControlInput = ({control, defaultValue,name,error, type} : FormControlInputProps) => {
    return (
        <>
            <Controller
                control={control}
                defaultValue={defaultValue}
                name={name}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input
                        value={value}
                        type={type}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                )}
            />
            {error && <p>{error.message}</p>}
        </>
    );
};

export default FormControlInput;