/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Titre from "./Titre";
import Modal from "react-modal";
import { useState } from "react";

const Candidate = (props) => {
  const { id, name, applicationId } = props.candidate;
  const [showModal, setShowModal] = useState(false);
  const hideModal = (event) => {
    event.preventDefault();
    setShowModal({
      showModal: !showModal,
    });
  };
  return (
    <div
      className="home__candidates-container__element"
      onClick={(event) => {
        event.preventDefault();
        setShowModal(!showModal);
      }}
    >
      <Titre name={name} />
      <span>Application number {applicationId}</span>
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
              <span>application number : {applicationId}</span>
              <br />              
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Candidate;
