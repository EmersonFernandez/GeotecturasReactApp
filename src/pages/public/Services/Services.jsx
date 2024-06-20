import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'primereact/carousel';
import logo1 from '../../../assets/img-servicies/bi.jpg'
import logo2 from '../../../assets/img-servicies/bogota.png'
import logo3 from '../../../assets/img-servicies/pot_1.jpg'
import logo4 from '../../../assets/img-servicies/pot.jpg'
import logo5 from '../../../assets/img-servicies/ciudadela.jpg'
import logo6 from '../../../assets/img-servicies/inmobiliario.png'
import './Services.css'


export default function Services() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        setProducts([
            {
                name: 'Ecosistemas Digitales',
                description: 'Transformación Digital con metodologías de BI-AI-BIGDATA.',
                image: logo1,
                url: '/'
            },
            {
                name: 'Gemelo Digital Smart City',
                description: 'Transformación Digital con modelos CIM a escala de ciudad.',
                image: logo2,
                url: '/'
            },
            {
                name: 'Gemelo Digital P.O.T.',
                description: 'Modelo CIM con el Plan de Ordenamiento Territorial a escala de ciudad.',
                image: logo3,
                url: '/'
            },
            {
                name: 'Gemelo Digital P.D.M',
                description: 'Modelo CIM con el Plan de Desarrollo Municipal a escala de ciudad.',
                image: logo4,
                url: '/'
            },
            {
                name: 'Gemelo Digital Macroproyectos',
                description: 'Modelo CIM de instrumentos de segundo y tercer nivel territorial',
                image: logo5,
                url: '/'
            },
            {
                name: 'Gemelo Digital Inmobiliario',
                description: 'Modelo CIM Proptech para el Sector Inmobiliario y la Gestión del Suelo.',
                image: logo6,
                url: '/'
            },
        ]);
    }, []);

    const handleClick = (event, url) => {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace
        navigate(url); // Redirige a la nueva ruta
    };

    const productTemplate = (product) => {
        return (
            <div className="m-2 text-center _box_card">
                <img src={product.image} alt={product.name} className="shadow-2" />
                <div className='info'>
                    <h3 className="mb-1">{product.name}</h3>
                    <p className="mt-0 mb-3" style={{ fontSize: '0.8rem' }}>{product.description}</p>
                    <a className="btn-detalle" onClick={(e) => handleClick(e, product.url)}>Ver más</a>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='box-home'>
                <div className='title-servicies'>
                    <p className='h1'>NUESTROS SERVICIOS</p>
                    <p className='h2 text-center'>Ecosistemas virtuales para la Transformación Digital</p>
                </div>
                <div className="card mb-1 mt-1">
                    <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
                </div>
            </div>
        </>
    )
}