import React from 'react';
import AuthWrapper from '@/components/AuthWrapper';

const AdminPage: React.FC = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
};

export default AuthWrapper(AdminPage);