import React from "react";
import { 
  modalBackground, 
  modal, 
  container,
  modalTitle, 
} 
from '../components/css/main.module.css'

const Modal = ({ count }) => {

  if (count === 0) {
    return (
      <div className={modalBackground}>
        <div className={container}>
          <div className={modal}>
            <h3>
              <a href='https://www.youtube.com/watch?v=2WQNPw46cyA'>Game over!</a>
            </h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={modalBackground}>
      <div className={container}>
        <div className={modal}>
          <div className={modalTitle}>
            <h2>Winner winner chicken dinner!</h2>
          </div>
          <div>
            <p>flag placeholder</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal