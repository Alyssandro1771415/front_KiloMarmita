import React, { useState } from 'react';

const AdminPage = () => {
    const [selectedTab, setSelectedTab] = useState('products');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div>
            <h1>Administrador - Gestão Kilomarmita</h1>

            <div className='d-flex justify-content-between'>
                <button onClick={() => handleTabChange('products')}>Administração de Produto</button>
                <button onClick={() => handleTabChange('admins')}>Administradores</button>
                <button onClick={() => handleTabChange('users')}>Administração de Usuários</button>
                <button onClick={() => handleTabChange('economics')}>Levantamentos Financeiros</button>
            </div>

            {selectedTab === 'products' && <ProductCRUD />}
            {selectedTab === 'admins' && <AdminCRUD />}
            {selectedTab === 'users' && <UserCRUD />}
            {selectedTab === 'economics' && <EconomicData />}
        </div>
    );
};

const ProductCRUD = () => {

    return (
        <div>Administração de Produtos</div>
    )
};

const AdminCRUD = () => {

    return (
        <div>Administradores</div>
    )
};

const UserCRUD = () => {

    return (
        <div>Administração de Usuários</div>
    )
};

const EconomicData = () => {

    return (
        <div>Levantamentos Financeiros</div>
    )
};

export default AdminPage;
