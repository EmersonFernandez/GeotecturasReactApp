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

const ProjectCard = ({ title, description }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9zvyQbFxTcvettJa9MRneoSBNpAoZboI4g&s' alt=""></img>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

const ProjectsGrid = () => {
    const projects = [
        { title: 'Proyecto 1', description: 'Una aplicación web interactiva que permite a los usuarios explorar y descubrir nuevos productos.' },
        { title: 'Proyecto 2', description: 'Un sitio web de comercio electrónico con un diseño moderno y funcionalidades avanzadas.' },
        { title: 'Proyecto 3', description: 'Una aplicación móvil de seguimiento de actividad física con funciones de análisis de datos.' },
        { title: 'Proyecto 4', description: 'Un sistema de gestión de contenido personalizado para una empresa de marketing digital.' },
        { title: 'Proyecto 5', description: 'Una plataforma de colaboración en línea para equipos de diseño y desarrollo.' },
        { title: 'Proyecto 6', description: 'Un sitio web de noticias con un diseño limpio y una experiencia de usuario intuitiva.' }
    ];

    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
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
