import "./Home.css";
export function Home() {
  return (
    <>
      <div className="fondoTres">
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-6 align-self-center">
              <img
                src="../../../../src/assets/img/mosaico.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6">
              <h1>LUISA FERNANDA HENAO VARELAS</h1>
              <img
                src="../../../../src/assets/img/luisa.jpeg"
                alt=""
                className="img-fluid rounded shadow foto"
              />
              <hr />
              <p>
                Soy Técnica en Desarrollo de Software con una profunda pasión
                por la tecnología y la programación. Mi entusiasmo por lo que
                hago es mi principal motor, lo que me impulsa a aprender
                constantemente y a mejorar mis habilidades. Me encanta explorar
                nuevas herramientas, lenguajes de programación y metodologías
                que me permitan crecer tanto profesionalmente como
                personalmente. Soy perseverante y siempre busco dar lo mejor de
                mí en cada proyecto, enfrentando desafíos con una actitud
                positiva y enfocada. Mi objetivo es crear soluciones innovadoras
                y de alta calidad que tengan un impacto real. La creatividad y
                el trabajo en equipo son valores que me definen, y me esfuerzo
                por aportar ideas frescas y eficientes a cada proyecto en el que
                participo.{" "}
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            
          </div>
        </section>
      </div>

      <footer>
        <section class="container-fluid colorfooter p-5 mt-5">
            <div class="row">

                <div class="col-12 align-center">
                <h1>Acerca de</h1>
                <img src="../../../../src/assets/img/logo github.png" alt="" className="img-fluid" />
                <hr />
                <h5>Luisa Fernanda Henao Varelas &copy;</h5>
                <h5>luisafernandah40@gmail.com</h5>
                <h5>2025</h5>
             </div>
    
            </div>
        </section>
    </footer>
    </>
  );
}
