import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementSenBelirle } from './counterSlice'

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
    <>
      <h1>Redux Toolkit</h1>
      <p style={{ marginLeft: '50px' }}>{counter}</p>
      <p>Girilen Sayı kadar arttır:</p>
      <input type='number' onChange={onChangeHandler} value={sayi} />
      <br/>
      <button onClick={handleArttir}>+ Arttır</button>
      <button onClick={handleAzalt}>- Azalt</button>
      <button onClick={handleArttirSenBelirle}>+ {sayi} Arttır</button>
    </>
  )
}
