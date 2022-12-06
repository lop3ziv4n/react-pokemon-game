import React from 'react';

import egg from '../assets/egg.png';

const NoData = () => (
    <section className="vh-100 position-relative">
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="card bg-transparent text-center border-0" style={{width: '18rem'}}>
                <img src={egg} className="card-img-top" alt="no found"/>
                <div className="card-body">
                    <h4 className="card-title display-5 text-danger">Upps!!!</h4>
                    <p className="card-text text-danger">Error en la recuperación de los pokemon, por favor comprueba
                        mas tarde.</p>
                </div>
            </div>
        </div>
    </section>
);

export default NoData;
