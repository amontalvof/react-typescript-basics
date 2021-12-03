import useForm from '../hooks/useForm';

interface IFormData {
    email: string;
    username: string;
    age: number;
}

const Form = () => {
    const { formValues, handleChange } = useForm<IFormData>({
        email: 'andy@mail.com',
        username: 'Andy Montalvo',
        age: 0,
    });
    const { email, username, age } = formValues;
    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleChange}
                    value={username}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Age:</label>
                <input
                    type="number"
                    className="form-control"
                    name="age"
                    onChange={handleChange}
                    value={age}
                    min={0}
                />
            </div>
            <pre>{JSON.stringify(formValues)}</pre>
        </form>
    );
};

export default Form;
