import './Experiencia.css'
export function Experiencia(){

    return(
        <>
         <section className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Mi Experiencia</h2>
                    <hr />
                </div>
            </div>
         </section>

         <section className="container">
            <div className="row">
                <div className="col-12">
                <div class="progress" role="progressbar">
                    <div class="progress-bar barra" >50%</div>
                </div>
                </div>
            </div>
         </section>
         <hr />
         <section className="container">
            <section className="row">
                <div className="col-6 mt-5">
                    <div className='card-p3 shadow'>
                        <h2>Logica de Programación</h2>
                        <img src="../../../../src/assets/img/logica de programacion.jpg" alt="" className='img-fluid' />
                        <p>Declarar variables, condicionales,ciclos</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >60%</div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-5">
                <div className='card-p3 shadow'>
                        <h2>Base de datos</h2>
                        <img src="../../../../src/assets/img/base de datos.jpg" alt=""  className='img-fluid'/>
                        <p>Conceptos basicos, modelo entidad relación, normalización, sql</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >60%</div>
                        </div>
                    </div>
                </div>
            </section>
         </section>

         <hr />

         <section className="container">
            <section className="row">
                <div className="col-6 mt-5">
                    <div className='card-p3 shadow'>
                        <h2>Maquetación html + css</h2>
                        <img src="../../../../src/assets/img/maquetacion.png" alt="" className='img-fluid' />
                        <p>construir la estructura visual y funcional de una página web, similar a crear los planos y el diseño interior de una casa. Aquí tienes una explicación clara dividida por tecnologías, header, main, footer, nav, article, section</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >80%</div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-5">
                <div className='card-p3 shadow'>
                        <h2>Programación js</h2>
                        <img src="../../../../src/assets/img/programacion js.jpg" alt="" className='img-fluid' />
                        <p>agregar interactividad, dinamismo y lógica a una página web. Mientras que HTML estructura el contenido y CSS lo diseña, JavaScript lo hace funcionar y reaccionar.</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >50%</div>
                        </div>
                    </div>
                </div>
            </section>
         </section>
         <hr />
         <section className="container">
            <section className="row">
                <div className="col-6 mt-5">
                    <div className='card-p3 shadow'>
                        <h2>Uso de git</h2>
                        <img src="../../../../src/assets/img/git foto.jpg" alt="" className='img-fluid' />
                        <p>se realiza el control de versiones de proyectos, lo que significa que puedes guardar, rastrear, comparar y recuperar diferentes versiones de tu código o archivos a lo largo del tiempo. Es una herramienta esencial para desarrolladores y equipos de trabajo.</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >40%</div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-5">
                <div className='card-p3 shadow'>
                        <h2>React</h2>
                        <img src="../../../../src/assets/img/img react.jpg" alt="" />
                        <p>que se utiliza para construir interfaces de usuario interactivas y eficientes, especialmente en aplicaciones web de una sola página (SPA). Su principal característica es el uso de componentes reutilizables que permiten dividir la interfaz en partes independientes y manejables. React utiliza JSX, una extensión de JavaScript que permite escribir código similar a HTML dentro de scripts, y actualiza automáticamente la vista cuando cambian los datos, gracias a su sistema de renderizado reactivo y el uso de un DOM virtual para mejorar el rendimiento.</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >40%</div>
                        </div>
                    </div>
                </div>
            </section>
         </section>
         <footer>
        <section class="container-fluid colorfooter p-5 mt-5">
            <div class="row">

                <div class="col-12 align-center">
                <h1>Acerca de</h1>
                <hr />
                <h5>Luisa Fernanda Henao Varelas &copy;</h5>
                <h5>luisafernandah40@gmail.com</h5>
                <h5>2025</h5>
             </div>
    
            </div>
        </section>
    </footer>

        </>
    )
}