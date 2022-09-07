import * as React from 'react'

import { container } from '../components/css/main.module.css'
import albin from '../images/ctfAlbinAscii.png'

const IndexPage = () => {
  return (
    <div className={container}>
      <main>
        <img src={albin} alt='Albin' />
      </main>
    </div>
  )
}

export const Head = () => <title>CTF - ???</title>

export default IndexPage