import React from 'react';
import FormControlInput from "./FormControlInput";
import {useForm} from "react-hook-form";

const Example = () => {

    const {control, register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            password: ''
        }
    });

    register('name');
    register('password');

    const onSubmit = (data: FormData) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControlInput control={control} name={'name'} error={errors.name} type={'text'} defaultValue={''}/>
                <FormControlInput control={control} name={'password'} error={errors.password} type={'text'}
                                  defaultValue={''}/>
                <button type={'submit'}>Submit</button>
            </form>
        </div>
    );

}
    export default Example;