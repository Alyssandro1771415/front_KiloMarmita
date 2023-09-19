import React, { useState } from 'react';
import image1 from "../Componentes/images/Artboard1.png";
import ApexChartLine from '../Componentes/Charts/ChartLine';
import ApexChartMixed from '../Componentes/Charts/ChartMixed';

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

    const products = [{ image: image1, Name: "Produto 1", Category: "Acompanhamentos" },
    { image: image1, Name: "Produto 1", Category: "Acompanhamentos" },
    { image: image1, Name: "Produto 1", Category: "Acompanhamentos" },
    { image: image1, Name: "Produto 1", Category: "Acompanhamentos" },
    { image: image1, Name: "Produto 1", Category: "Acompanhamentos" },
    { image: image1, Name: "Produto 1", Category: "Acompanhamentos" },
    { image: image1, Name: "Produto 1", Category: "Acompanhamentos" }];

    return (
        <div className='d-flex flex-column'>

            <h3 className='text-success mb-5 mt-3'>Administração de Produtos</h3>
            <div className='d-flex flex-row justify-content-around'>
                <div className='border border-secundary w-25 p-2'>
                    <h2>Cadastrar Novo Produto</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image:</label>
                            <input type="file" className="form-control" id="image" name="image" accept="image/*" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category:</label>
                            <input type="text" className="form-control" id="category" name="category" required />
                        </div>

                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </form>
                </div>

                <div className='w-75 h-50 ms-5'>
                    <div className='table-responsive' style={{ maxHeight: '400px' }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr>
                                        <td className='w-25'><img className='w-25 h-25' src={product.image} /></td>
                                        <td>{product.Name}</td>
                                        <td>{product.Category}</td>
                                        <td><input type='button' value={"Remove"} className='btn btn-danger'></input></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

const AdminCRUD = () => {

    return (
        <div>
            <h3 className='text-success'>Administradores</h3>

        </div>
    )
};

const UserCRUD = () => {

    return (
        <div>
            <h3 className='text-success'>Administração de Usuários</h3>

        </div>
    )
};

const EconomicData = () => {

    return (
        <div>
            <h3 className='text-success'>Levantamentos Financeiros</h3>
            <ApexChartLine></ApexChartLine>
            <ApexChartMixed></ApexChartMixed>
        </div>
    )
};

export default AdminPage;
