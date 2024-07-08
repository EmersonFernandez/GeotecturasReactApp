import { Divider } from 'primereact/divider';
import logo from '../../assets/img_main.png'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className='__home'>
                {/* header */}
                <header>
                    <div className='__box__textHeader'>
                        <h1> TECNOLOGÍA PARA LA GESTIÓN URBANA</h1>
                        <h2>INNOVACIÓN-CREACIÓN-DISRUPCIÓN</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aut ex eum itaque veniam.</p>
                        <a className='__btnContact'>Contáctanos</a>
                    </div>
                </header>
                {/* Contenido */}
                <div className='flex justify-content-center'>
                    <div className='card m-5 __boxAbout'>
                        <div className='flex flex-column box-about-son'>
                            {/* Quienes somos */}
                            <div className='flex gap-5 __aboutSection'>
                                <img src={logo} alt="" className='__imgAbout' />
                                <div>
                                    <p className='__titleHome text-2xl'>¿Quiénes Somos?</p>
                                    <p className='p-contended'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sint accusamus possimus eius dignissimos quae nobis? Culpa voluptatem laudantium quis nihil dolores! Quisquam, esse quas. Iste facilis rerum architecto reprehenderit.</p>
                                </div>
                            </div>
                            <Divider />
                            {/* Que ofrecemos */}
                            <div className='flex gap-5 about-section __reverser'>
                                <img src={logo} alt="" className='__imgAbout' />
                                <div>
                                    <p className='__titleHome text-2xl'>¿Qué Ofrecemos?</p>
                                    <p className='p-contended'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae consectetur, possimus ex quo, fugit molestiae nostrum fugiat aperiam deleniti eius omnis quis unde totam eaque sed similique adipisci qui doloribus.</p>
                                </div>
                            </div>
                            <Divider />
                            {/* Que hacemos */}
                            <div className='flex gap-5 about-section'>
                                <img src={logo} alt="" className='__imgAbout' />
                                <div>
                                    <p className='__titleHome text-2xl'>¿Qué Hacemos?</p>
                                    <p className='p-contended me-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ullam cupiditate quo itaque asperiores delectus perferendis, quasi aspernatur? Debitis atque laboriosam facilis amet odit eveniet dolores repudiandae minima voluptatibus nesciunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
