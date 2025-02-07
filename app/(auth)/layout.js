import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className='flex justify-center pt-80'>
            {children}
        </div>
    );
};

export default AuthLayout;
