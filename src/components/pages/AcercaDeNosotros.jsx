import { Card, Col, Container, Row, Image } from "react-bootstrap";
import "../../style/acercaDeNosotros.css";
import integrante1 from "../../img/Equipo/Sheyla.jpg";
import integrante2 from "../../img/Equipo/Thiago.jpg";
import integrante3 from "../../img/Equipo/Javier.jpg";
import integrante4 from "../../img/Equipo/Natalia.jpg";
import integrante5 from "../../img/Equipo/Daniel.jpg";

const AcercaDeNostros = () => {
  return (
    <section className="colorFondoAN">
      <Container>
        <h2 className="colorTituloAN text-center pt-3 pt-md-5 letraTitulos tamanioLetraTituloAN">
          Nuestro equipo
        </h2>
        <Row className="justify-content-center py-3 py-md-5 colorFondoAN">
          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <div className="tamanioImg">
                <Image
                  src={integrante1}
                  alt="Sheyla Astorga"
                  className="imagenCirculo"
                  roundedCircle
                />
              </div>
              <Card.Body className="paddingSubtitulo">
                <Card.Title className="letraSubtitulos tamanioSubtitulo">
                  Sheyla Astorga
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.linkedin.com/in/sheyla-luciana-astorga-40013a248/">
                  <i className="bi bi-linkedin colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
                <Card.Link href="https://github.com/SheylaAstorga">
                  <i className="bi bi-github colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <div className="tamanioImg">
                <Image
                  src={integrante2}
                  alt="Thiago Benjamín Fiol"
                  className="imagenCirculo"
                  roundedCircle
                />
              </div>
              <Card.Body className="paddingSubtitulo">
                <Card.Title className="letraSubtitulos tamanioSubtitulo">
                  Thiago Benjamín Fiol
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.linkedin.com/in/thiago-benjamin-fiol-440310287/">
                  <i className="bi bi-linkedin colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
                <Card.Link href="https://github.com/elFiol">
                  <i className="bi bi-github colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <div className="tamanioImg">
                <Image
                  src={integrante3}
                  alt="Javier Exequiel Jiménez"
                  className="imagenCirculo"
                  roundedCircle
                />
              </div>
              <Card.Body className="paddingSubtitulo">
                <Card.Title className="letraSubtitulos tamanioSubtitulo">
                  Javier Exequiel Jiménez
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.linkedin.com/in/javier-jimenez-sniguel359/">
                  <i className="bi bi-linkedin colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
                <Card.Link href="https://github.com/Javier359">
                  <i className="bi bi-github colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <div className="tamanioImg">
                <Image
                  src={integrante4}
                  alt="Natalia del Valle Morales"
                  className="imagenCirculo"
                  roundedCircle
                />
              </div>
              <Card.Body className="paddingSubtitulo">
                <Card.Title className="letraSubtitulos tamanioSubtitulo">
                  Natalia del Valle Morales
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.linkedin.com/in/natalia-morales-ing-sis/">
                  <i className="bi bi-linkedin colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
                <Card.Link href="https://github.com/NatiMorales">
                  <i className="bi bi-github colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <div className="tamanioImg">
                <Image
                  src={integrante5}
                  alt="Daniel Emmanuel Santi Araoz"
                  className="imagenCirculo"
                  roundedCircle
                />
              </div>
              <Card.Body className="paddingSubtitulo">
                <Card.Title className="letraSubtitulos tamanioSubtitulo">
                  Daniel Emmanuel Santi Araoz
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.linkedin.com/in/manusantiaraoz/">
                  <i className="bi bi-linkedin colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
                <Card.Link href="https://github.com/manusantiaraoz">
                  <i className="bi bi-github colorIconoCardAN fs-4 fs-md-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AcercaDeNostros;
