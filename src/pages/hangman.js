import React, { useEffect, useState } from 'react'

import { container } from '../components/css/main.module.css'
import { letters } from '../utils/letters'
import Modal from '../components/modal'


const wordList = [
  'hangman',
  'ctf',
  'date',
  'conspiracy'
]

const initHealth = [
  '\u{2764}', '\u{2764}', '\u{2764}', '\u{2764}', '\u{2764}', '\u{2764}'
]

const HangmanPage = () => {

  const [word, setWord] = useState('')
  const [correctGuesses, setCorrectGuesses]  = useState([])
  const [health, setHealth] = useState(initHealth)
  const [count, setCount]  = useState(6)

  useEffect(() => {
    setWord(wordList[Math.floor(Math.random() * 4)])
  }, [word])

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
   


if (!hiddenWord.includes('_') || count === 0) {
    return (
      <>
        <Modal count={count} />
      </>
    )
  }

  return (
    <div className={container}>
      <main>
        <h1 style={{ textAlign: 'center' }}>CTF Hangman</h1>
        <p style={{ textAlign: 'center' }}>{health}</p>
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
  )
}

export const Head = () => <title>CTF - Hangman</title>

export default HangmanPage



