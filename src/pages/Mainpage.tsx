import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../css/Mainpage/mainpage.css";
import { useState } from "react";

const Mainpage = () => {
  const [form, setForm] = useState<boolean>(false);

  const handleForm = () => {
    setForm(true);
  };

  return (
    <>
      <Container>
        <div className={`main ${form ? "hide" : ""}`}>
          <div className="d-flex gap-4">
            <div className="line"></div>
            <h6>SAVEL YAKINDA HİZMETİNİZDE</h6>
            <div className="line"></div>
          </div>
          <h6 className="subtitle">
            ŞUANDA HARİKA <br /> BİR WEB SİTESİ <br /> ÜZERİNDE ÇALIŞIYORUZ.
          </h6>
          <div className="d-flex justify-content-end mt-5">
            <Button variant="success" onClick={handleForm}>
              Bana Haber Ver
            </Button>
          </div>
        </div>

        <div className={`form-container ${form ? "show" : ""}`}>
          <h5 className="text-center">İLETİŞİM FORMU</h5>
          <form
            action="https://formsubmit.co/sinan.hasil61@gmail.com"
            method="POST"
          >
            <Row>
              <Col>
                <div>
                  <small>*Adınız</small>
                  <Form.Control
                    required
                    type="text"
                    style={{ width: "226px" }}
                  />
                </div>
              </Col>
              <Col md="6" sm="12">
                <div>
                  <small>*Soyadınız</small>
                  <Form.Control
                    required
                    type="text"
                    style={{ width: "236px" }}
                  />
                </div>
              </Col>
            </Row>
            <div className="mt-4">
              <small>*email</small>
              <Form.Control required type="email" className="w-100" />
            </div>
            <Button className="w-100 mt-4" variant="success" type="submit">
              GÖNDER
            </Button>
          </form>
          <u onClick={() => setForm(false)}>Geri Dön</u>
        </div>
      </Container>
    </>
  );
};

export default Mainpage;
