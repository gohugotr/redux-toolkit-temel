# Temel Redux Toolkit Adımları

## Kurulum

`yarn add @reduxjs/toolkit react-redux`

### Redux toolkit kullanım aşamaları

1. **src** klasörü içinde **store.jsx** dosyası oluşturulur.

   - `import { configureStore } from "@reduxjs/toolkit";`
   - configureStore({}) fonksiyonu bir nesne alır.
   - Aldığı nesne `reducer` nesnesidir.

   ```js script
   configureStore({
     reducer: {},
   })
   ```

   - Bu fonksiyon reducer dönecek ve dışardan erişilebilmeli.

   ```js script
   export const store = configureStore({
     reducer: {},
   })
   ```

2. **store** global statelerin tutulduğu yere componentlerin erişebilmesi için **Provider** ile sarmalanmalıdır.
   Bunu da main.jsx içinde bulunan **`<App />`** componentini provider ile sarmalayarak yapabiliriz.

```js script
import { Provider } from 'react-redux'
import { store } from './store'
;<Provider store={store}>
  <App />
</Provider>
```

**_Provider_** tüm komponentlerin üstünde olmalıdır.

3. Bir **_slice_** oluşturuyoruz. Örneğimizde **counterSlice.jsx** dosyasını oluşturuyoruz.

   - Bu dosya içinde `createSlice` fonksiyonunu import ediyoruz.
     `import { createSlice } from "@reduxjs/toolkit";`
   - Başlangıç `state` tini oluşturmamız gerekiyor.

   ```js script
   const initialState = {
     value: 0,
   }
   ```

   - **_counterSlice_** fonksiyonunu oluşturuyoruz. 3 parametre alıyor.
     - name:,
     - initialState,
     - reducers: ve içinde iş mantığımız olan `action`'lar (increment ve decrement)

   ```js script
   const coounterSlice = createSlice({
     name: 'counter',
     initialState,
     reducers: {
       increment: () => {},
       decrement: () => {},
     },
   })
   ```

   - `increment` ve `decrement` fonksiyonları içinde `initialState value` değeri olan 0'ı değiştireceğiz.
     Bu amaçla `increment` ve `decrement` fonksiyonları **`state`** parametresini alır. Böylece `state.value` değerine erişip değiştirebiliriz.

   ```js script
   const counterSlice = createSlice({
     name: 'counter',
     initialState,
     reducers: {
       increment: (state) => {
         state.value += 1
       },
       decrement: (state) => {
         state.value -= 1
       },
     },
   })
   ```

   - Son olarak bunları diğer dosyalarda kullanmak üzere export edebiliriz.

   ```js script
   export const { increment, decrement } = counterSlice.actions
   export default counterSlice.reducer
   ```

4. **store.jsx** dosyasına gelip `import counterReducer from './counterSlice'` diye reducer import işlemi yaparız.
   bunu da ilgili reducerin ismine (name) atarız.
   **_store.jsx_** aşağıda gösterilmektedir.

```js script
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducers: {
    counter: counterReducer,
  },
})
```

5. **_App.jsx_** içinde bunu kullanabilmek için `useSelector` hook'ını kullanabiliriz.

   - `counter state` içindeki value değerini alıyoruz.

   ```js script
   const counter = useSelector((state) => state.counter.value)
   ```

   - `return` alanı içinde `<p>{counter}</p>` şeklinde gösterim sağlayabiliriz.
   - **counter** value değerine müdahele etmek için counterSlice reducers içindeki actionları import etmeliyiz.
     `import {increment, decrement} from './counterSlice';`
   - Olayı 2 adet buton içine onClick olayını handle ederek deneyebilriz.

   ```js script
        const handleArttir = () => {
            increment()
        }

        const handleAzalt = () => {
            decrement()
        }
       ...
       <button onClick={handleArttir}>+ Arttır</button>
       <button onClick={handleAzalt}>- Azalt</button>
   ```

   - `increment` ve `decrement` fonksiyonlarını reducers fonksiyonuna iletmek için, yani `action`'lari tetiklemek için **`useDispatch()`** hook'u kullanılır. `import { useSelector, useDispatch } from "react-redux";`

   ```js script
           const handleArttir = () => {
            dispatch(increment());
        }

        const handleAzalt = () => {
            dispatch(decrement());
        }
       ...
       <button onClick={handleArttir}>+ Arttır</button>
       <button onClick={handleAzalt}>- Azalt</button>
   ```

   ### App.jsx son hali

   ```js script
   import { useSelector, useDispatch } from 'react-redux'
   import { increment, decrement } from './counterSlice'

   export default function App() {
     const counter = useSelector((state) => state.counter.value) // `counter state` içindeki value değerini alıyoruz.

     const dispatch = useDispatch()

     const handleArttir = () => {
       dispatch(increment()) // dispatch ile reducers fonksiyonuna incerement action'i çalıştır diyoruz.
     }

     const handleAzalt = () => {
       dispatch(decrement())
     }

     return (
       <>
         <h1>Redux Toolkit</h1>
         <p style={{ marginLeft: '50px' }}>{counter}</p>
         <button onClick={handleArttir}>+ Arttır</button>
         <button onClick={handleAzalt}>- Azalt</button>
       </>
     )
   }
   ```
   
