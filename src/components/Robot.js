import React from "react";
import Image from "./Image";
import Lien from "./Lien";
import Titre from "./Titre";
import Modal from "react-modal";
import { useState } from "react";

const Robot = (props) => {
  const { id, name, email, username, address } = props.robot;
  const [showModal, setShowModal] = useState(false);
  const hideModal = (event) => {
    event.preventDefault();
    setShowModal({
      showModal: !showModal,
    });
  };
  return (
    <div
      className="home__robots-container__element"
      onClick={(event) => {
        event.preventDefault();
        setShowModal(!showModal);
      }}
    >
      <Image id={id} alt={name} />
      <Titre name={name} />
      <Lien email={email} />
      <Modal isOpen={showModal} className="modal">
        <span className="closeModal" onClick={hideModal}>
          x
        </span>
        <h2 className="titleModal">{name}</h2>
        <div className="modal-content">
          <div className="modal-identity">
            <div className="modal-identity__image">
              <img
                src={`https://robohash.org/${id}`}
                className="identity__image"
              />
            </div>
            <div className="modal-identity__description">
              <h3 className="modal-title">Identity</h3>
              <span>name : {name}</span>
              <br />
              <span>username : {username}</span>
              <br />
              <span>email : {email}</span>
              <br />
              <hr />
              <h3 className="modal-title">Address</h3>
              <span>city : {address.city}</span>
              <br />
              <span>street : {address.street}</span>
              <br />
              <span>suite : {address.suite}</span>
              <br />
              <span>zipcode : {address.zipcode}</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Robot;
