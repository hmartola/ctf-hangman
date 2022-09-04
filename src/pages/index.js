import * as React from 'react'
import { container } from '../components/css/main.module.css'

const IndexPage = () => {
  return (
    <div className={container}>
      <main>
        <img src='https://avatars.githubusercontent.com/u/33056829?s=280&v=4' alt='Albin'></img>
      </main>
    </div>
  )
}

export const Head = () => <title>CTF - Find URL</title>

export default IndexPage