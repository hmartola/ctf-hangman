import * as React from 'react'

import { container } from '../components/css/main.module.css'
import clue from '../images/ctfAlbinV1.PNG'

const IndexPage = () => {
  return (
    <div className={container}>
      <main>
        <img src={clue} alt='Clue to next step' />
      </main>
    </div>
  )
}

export const Head = () => <title>CTF - Find URL</title>

export default IndexPage