import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementSenBelirle } from './counterSlice'
import './App.css'

export default function App() {
  const counter = useSelector((state) => state.counter.value) // `counter state` içindeki value değerini alıyoruz.

  const [sayi, setSayi] = useState(2)

  const dispatch = useDispatch()

  const handleArttir = () => {
    dispatch(increment()) // dispatch ile reducers fonksiyonuna incerement action'i çalıştır diyoruz.
  }

  const handleAzalt = () => {
    dispatch(decrement())
  }

  const handleArttirSenBelirle = () => {
    dispatch(incrementSenBelirle(+sayi))
  }

  const onChangeHandler = (e) => {
    setSayi(e.target.value)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Redux Toolkit</h1>
        <h2>{counter}</h2>
        <p>Girilen kadar arttır</p>
        <input type='number' onChange={onChangeHandler} value={sayi} />
        <br />
        <button onClick={handleArttir}>+ Arttır</button>
        <button onClick={handleAzalt}>- Azalt</button>
        <button onClick={handleArttirSenBelirle}>+ {sayi} Arttır</button>
      </header>
    </div>
  )
}
