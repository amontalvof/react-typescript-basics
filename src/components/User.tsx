import { useState } from 'react';

interface IUser {
    uid: string;
    name: string;
}

const User = () => {
    const [user, setUser] = useState<IUser>();

    const login = () => {
        setUser({
            uid: '123qwe',
            name: 'Andy Montalvo',
        });
    };

    return (
        <div className="mt-5">
            <h4>User</h4>
            <button className="btn btn-outline-primary" onClick={login}>
                Login
            </button>
            <br />
            <br />
            {!user ? (
                <pre>There is no user</pre>
            ) : (
                <pre>{JSON.stringify(user)}</pre>
            )}
        </div>
    );
};

export default User;
