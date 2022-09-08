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
  function _0x426f(){const _0x250534=['cc3ec5fe359414ce76f98af679ac01e7b59ec094befd1f214c14285bdcfc4e43rSlT9svo/itW2PZvnI/n4/G1cu63B68E7DyuxYEu+FY=29c6ec1f133344eaf7bf2ae99265d048f8456178b5132739c92ad29214f13385','4285488YkmKiw','24wtQbvm','2935635esauph','5885559TmUYOm','8437842JXsuJl','37374efKbcs','171QvpIKS','951408gHZUNt','2696268brfXRx'];_0x426f=function(){return _0x250534;};return _0x426f();}const _0x156333=_0x4783;function _0x4783(_0x36da37,_0x2da60f){const _0x426fb1=_0x426f();return _0x4783=function(_0x478355,_0x29c487){_0x478355=_0x478355-0x1b3;let _0x5270b6=_0x426fb1[_0x478355];return _0x5270b6;},_0x4783(_0x36da37,_0x2da60f);}(function(_0x127717,_0x3e5eed){const _0x3c6e0a=_0x4783,_0x4e864c=_0x127717();while(!![]){try{const _0x210cc9=parseInt(_0x3c6e0a(0x1b7))/0x1+-parseInt(_0x3c6e0a(0x1b5))/0x2*(-parseInt(_0x3c6e0a(0x1b6))/0x3)+-parseInt(_0x3c6e0a(0x1ba))/0x4+-parseInt(_0x3c6e0a(0x1bc))/0x5+-parseInt(_0x3c6e0a(0x1b8))/0x6+-parseInt(_0x3c6e0a(0x1b4))/0x7+parseInt(_0x3c6e0a(0x1bb))/0x8*(parseInt(_0x3c6e0a(0x1b3))/0x9);if(_0x210cc9===_0x3e5eed)break;else _0x4e864c['push'](_0x4e864c['shift']());}catch(_0x2bf718){_0x4e864c['push'](_0x4e864c['shift']());}}}(_0x426f,0xa2631));const decrypted=sc['decrypt'](_0x156333(0x1b9))  

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