import React, { useEffect, useState } from 'react'

import { container } from '../components/css/main.module.css'
import { letters } from '../utils/letters'
import Modal from '../components/modal'
import logo from '../images/date.png'

const initHealth = [
  '\u{2764}', '\u{2764}', '\u{2764}', '\u{2764}', '\u{2764}', '\u{2764}'
]

const HangmanPage = () => {

  const [word, setWord] = useState('__________')
  const [correctGuesses, setCorrectGuesses]  = useState([])
  const [health, setHealth] = useState(initHealth)
  const [count, setCount]  = useState(6)

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?number=1000&length=10')
      .then(res => res.json())
      .then(data => {
        setWord(data[Math.floor(Math.random() * 1000)])
        //console.log(data)   // dev only
      })
      .catch(error => console.log(error))
  }, [])

  const hiddenWord = word.split('').map(ltr => 
    correctGuesses.includes(ltr) ? ltr : "_").join(" ")

  const validateGuess = (e, letter) =>  {
    e.currentTarget.disabled = true
    if (word.includes(letter)) {
      setCorrectGuesses(correctGuesses => [...correctGuesses, letter])
    } else {
      setCount(count => (count - 1))
      setHealth(health => (health.slice(0, -1)))
    }
  }

  return (
    <>
      <div className={container}>
        <main>
          <div style={{ textAlign: 'center' }}>
            <img src={logo} alt='DaTe logo' width='150' height='150' />
          </div>
          <h1 style={{ textAlign: 'center' }}>CTF Hangman</h1>
          <p style={{ textAlign: 'center', fontSize: 20 }}>Lives left: {health}</p>
          <p style={{ textAlign: 'center', fontSize: 30 }}>{hiddenWord}</p>
          {letters.map((letter, i) => 
            <button 
              key={i}
              onClick={(e) => validateGuess(e, letter.toLowerCase())}
              style={{ fontSize: 15, margin: 1.5, padding: 5 }}
            >
              {letter}
            </button>
          )}
          <p style={{ textAlign: 'center' }}>Guess the correct word by choosing the above letters</p>
        </main>
      </div>
      {(!hiddenWord.includes('_') || count === 0) && <Modal count={count} />}
    </>
  )
}

export const Head = () => <title>CTF - Game</title>

export default HangmanPage



