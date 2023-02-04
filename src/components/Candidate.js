/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Titre from "./Titre";
import Modal from "react-modal";
import { useState } from "react";
import {applications, questions} from "../api.json";

const Candidate = (props) => {
  const { id, name, applicationId } = props.candidate;
  const [showModal, setShowModal] = useState(false);
  const [application, setApplication] = useState(null);
  const [videos, setVideos] = useState([]);
  const hideModal = (event) => {
    event.preventDefault();
    setShowModal({
      showModal: !showModal,
    });
  };
  useEffect(() => {
    if(parseInt(applicationId)) { 
      // Get the application
      const foundApplication = applications.find(({id}) => id === applicationId );
      
      // Attach questions to application videos
      const videosWithQuestions = {...foundApplication}.videos.map((video) => {
        let attachedQuestion = "";
        if(parseInt(video.questionId)) {
          const {question} = questions.find(({id}) => id === video.questionId )
          attachedQuestion = question
        }
        return {
          ...video,
          attachedQuestion
        }
      })

      delete foundApplication.videos
      foundApplication.videos = videosWithQuestions

      setApplication(foundApplication)
      setVideos(videosWithQuestions)
    }
  }, []);
  return (
    <div
      className="home__candidates-container__element"
      onClick={(event) => {
        console.log("videos", videos)
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
            <div>
              <h3 className="modal-title">Identity</h3>
              <span>name : {name}</span>
            </div>
             <div>
              {parseInt(applicationId) ? 
                <>
                  <span>application number for candidate : {applicationId} </span><br/>
                  {
                    videos.map((video) => 
                      (
                        <>
                          <p> Question: {video.attachedQuestion}</p> <br/>
                          <p>Video Answer: <a target="_blank" href={video.src} rel="noreferrer">{video.src}</a> </p><br/>
                        </>
                      )
                    )
                  }
                </> : 
                <p>This candidate has no application or candidature</p>
              }
              </div>                         
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Candidate;
