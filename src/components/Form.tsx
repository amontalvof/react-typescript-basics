import { ChangeEvent, useState } from 'react';

const Form = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        username: '',
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={formValues.email}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleChange}
                    value={formValues.username}
                />
            </div>
            <pre>{JSON.stringify(formValues)}</pre>
        </form>
    );
};

export default Form;
