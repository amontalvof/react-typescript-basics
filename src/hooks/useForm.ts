import { ChangeEvent, useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormValues({ ...formValues, [name]: value });
    };

    return { formValues, handleChange };
};

export default useForm;
