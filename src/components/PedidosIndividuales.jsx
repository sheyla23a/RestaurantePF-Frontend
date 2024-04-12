import React, { useState } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hamburguesa from "../assets/hamburguesa.png";
import DetallePedido from './DetallePedido';

const PedidosIndividuales = ({producto}) => {

  const [quantity, setQuantity] = React.useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="p-3 fondo-pedidos mb-3">
      <Row>
        <Col xs={12} md={6} className="d-flex align-items-center card-pedido-individual">
          <img className='img-fluid' src={hamburguesa} alt="Hamburguesa" style={{ maxWidth: '150px', marginRight: '10px' }} />
          <div className='text-center ms-lg-3'>
            <h5>{producto.nombre}</h5>
            <Link to='/' className='btn btn-primary mt-lg-3 '>Editar</Link>
            <DetallePedido />
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-md-end align-items-center mt-3 mt-md-0 pedido-precio">
          <p className='mr-3 my-lg-4 mx-lg-3'>{producto.precio}</p>
          <ButtonGroup>
            <Button variant="outline-danger" onClick={handleDecrement}>
              <i className="bi bi-dash"></i>
            </Button>
            <Button variant="outline-secondary" disabled>
              {quantity}
            </Button>
            <Button variant="outline-success" onClick={handleIncrement}>
              <i className="bi bi-plus"></i>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </section>
  );
};

export default PedidosIndividuales;
