import React from 'react';
import './style.css'
import { Avatar } from 'primereact/avatar';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-image">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" className="mr-2" style={{width:'100%', height:'100%'}} shape="circle" />
            </div>
            <h1>Aurlin Cuesta</h1>
            <p>Desarrollador web apasionado por crear soluciones innovadoras y atractivas. Especializado en React, Node.js y diseño UI/UX.</p>
        </div>
    );
};

const ProjectCard = ({ title, description, img }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={img} alt=""></img>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

const ProjectsGrid = () => {
    const projects = [
        { title: 'Observatorio Geoespacial', description: 'Líder en la construcción, diseño y coordinación del Observatorio Inmobiliario.', img:'https://apigeotecturas.onrender.com/api/image/3' },
        { title: 'Ordenamiento Agropecuario', description: 'Modelación del Plan de Ordenamiento Territorial Agropecuario.', img:'https://apigeotecturas.onrender.com/api/image/4' },
        { title: 'Macroestrategias Turísticas', description: 'Formulación de un modelo de macroestrategias turísticas para Antioquia.', img:'https://apigeotecturas.onrender.com/api/image/5' },
        { title: 'AIE Transversalidades', description: 'Apoyo en la Formulación de Áreas de Intervención Estratégica de Medellín.', img:'https://apigeotecturas.onrender.com/api/image/6' },
        { title: 'Modelo de Desarrollo', description: 'Gemelo Digital de modelo de Alianza para el Desarrollo de Antioquia.', img:'https://apigeotecturas.onrender.com/api/image/7' },
        { title: 'Plan Corregimental', description: 'Formulación de un instrumento de planificación en el suelo rural de Itagüí.', img:'https://apigeotecturas.onrender.com/api/image/8' },
        { title: 'Ciudadela Agroindustrial', description: 'Modelo de ciudadelas Agroindustriales para Antioquia.', img:'https://apigeotecturas.onrender.com/api/image/9' },
        { title: 'Plan de Movilidad Guatapé', description: 'Aplicación de herramientas de City Information Modeling -CIM.', img:'https://apigeotecturas.onrender.com/api/image/10' },
        { title: 'Remodelación Estadio', description: 'Modelación de propesta urbana para la renovación del Estadio de Medellín.', img:'https://apigeotecturas.onrender.com/api/image/11' },
    ];

    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    img={project.img}
                />
            ))}
        </div>
    );
};


export default function Project() {

    return (
        <div className="app">
            <Profile />
            <ProjectsGrid />
        </div>
    );
}
