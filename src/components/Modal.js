import React, { useState } from 'react';
import { Modal as ModalBS, Button } from 'react-bootstrap';

const Modal = ({ show, handleClose, title, children }) => {
//   const [productData, setProductData] = useState(product);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({
//       ...productData,
//       [name]: value
//     });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(productData);
  };

  return (
    <ModalBS show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <ModalBS.Header closeButton={true}>
        <ModalBS.Title>{title}</ModalBS.Title>
        <h1 className='absolute right-6 top-2' onClick={handleClose}>X</h1>
      </ModalBS.Header>
      <ModalBS.Body>
        {children}
      </ModalBS.Body>
    </ModalBS>
  );
};

export default Modal;