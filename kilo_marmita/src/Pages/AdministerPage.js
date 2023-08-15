import React, { useState } from 'react';

const AdminPage = () => {
    const [selectedTab, setSelectedTab] = useState('products');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="container">
          <h1 className="mt-4">Página de Administração</h1>
          
          <div className="btn-group mt-3" role="group">
            <button
              type="button"
              className={`btn btn-${selectedTab === 'products' ? 'primary' : 'secondary'}`}
              onClick={() => handleTabChange('products')}
            >
              Administração de Produtos
            </button>
            <button
              type="button"
              className={`btn btn-${selectedTab === 'admins' ? 'primary' : 'secondary'}`}
              onClick={() => handleTabChange('admins')}
            >
              Administradores
            </button>
            <button
              type="button"
              className={`btn btn-${selectedTab === 'users' ? 'primary' : 'secondary'}`}
              onClick={() => handleTabChange('users')}
            >
              Administração de Usuários
            </button>
            <button
              type="button"
              className={`btn btn-${selectedTab === 'economics' ? 'primary' : 'secondary'}`}
              onClick={() => handleTabChange('economics')}
            >
              Levantamentos Financeiros
            </button>
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
        <h3 className='text-success'>Administração de Produtos</h3>
    )
};

const AdminCRUD = () => {

    return (
        <h3 className='text-success'>Administradores</h3>
    )
};

const UserCRUD = () => {

    return (
        <h3 className='text-success'>Administração de Usuários</h3>
    )
};

const EconomicData = () => {

    return (
        <h3 className='text-success'>Levantamentos Financeiros</h3>
    )
};

export default AdminPage;
