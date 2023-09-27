import React, {FC, HTMLProps} from 'react';

interface InputProps  extends HTMLProps<HTMLInputElement>{
    value : string,
    type : string,
}
const Input : FC<InputProps> = ({value, type, ...rest}) => {
    return (
        <>
            <input type={type}  value={value} {...rest}/>
        </>
    );
};

export default Input;