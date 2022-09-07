import React from "react";
import SimpleCrypto from 'simple-crypto-js'

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

  const sc = new SimpleCrypto('conspiracy')
  const _0x55e082=_0x1f0b;function _0x166a(){const _0x5ce8bc=['27ZPUckd','3923925saPcnY','48sIhjNu','266462ETbwEn','1871720aYjLSI','408080EKYvWu','664YPaMcB','6257930Goucqw','1379664cLNjjj','1713UjpkoH','29c4014c80d56154303bdca06778636f80f98c68cca54feb9d938a22c2943a9dzBNT+xLLvDf5oeUeaiq6jQ==ea02fe9ef9cd13fd20d51461bfa0f668e9a22db69b2b477aad3a948efee61c00'];_0x166a=function(){return _0x5ce8bc;};return _0x166a();}(function(_0x4c0934,_0x15404c){const _0x14313b=_0x1f0b,_0x16afb2=_0x4c0934();while(!![]){try{const _0x3f4d48=parseInt(_0x14313b(0x13d))/0x1+-parseInt(_0x14313b(0x13c))/0x2+-parseInt(_0x14313b(0x141))/0x3*(parseInt(_0x14313b(0x13e))/0x4)+-parseInt(_0x14313b(0x144))/0x5+parseInt(_0x14313b(0x140))/0x6+-parseInt(_0x14313b(0x13b))/0x7*(parseInt(_0x14313b(0x13a))/0x8)+-parseInt(_0x14313b(0x143))/0x9*(-parseInt(_0x14313b(0x13f))/0xa);if(_0x3f4d48===_0x15404c)break;else _0x16afb2['push'](_0x16afb2['shift']());}catch(_0x216791){_0x16afb2['push'](_0x16afb2['shift']());}}}(_0x166a,0x73218));function _0x1f0b(_0x10ece5,_0x19119a){const _0x166a19=_0x166a();return _0x1f0b=function(_0x1f0bab,_0x322475){_0x1f0bab=_0x1f0bab-0x13a;let _0x5991c8=_0x166a19[_0x1f0bab];return _0x5991c8;},_0x1f0b(_0x10ece5,_0x19119a);}const decrypted=sc['decrypt'](_0x55e082(0x142))
  
  return (
    <div className={modalBackground}>
      <div className={container}>
        <div className={modal}>
          <div className={modalTitle}>
            <h2>Congratulations!</h2>
          </div>
          <div>
            <p>{decrypted}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal