# Temel Redux Toolkit Adımları

## Kurulum

`yarn add @reduxjs/toolkit react-redux`

### Redux toolkit kullanım aşamaları

1. **src** klasörü içinde **store.jsx** dosyası oluşturulur.
    * `import { configureStore } from "@reduxjs/toolkit";`
    * configureStore({}) fonksiyonu bir nesne alır.
    * Aldığı nesne `reducer` nesnesidir.

    ```js script
    configureStore({
        reducer: {}
    });
    ```
    * Bu fonksiyon reducer dönecek ve dışardan erişilebilmeli.
    ```js script
    export const store = configureStore({
        reducer: {}
    });
    ```
2. **store** global statelerin tutulduğu yere componentlerin kullanabilmesi için **Provider** ile sarmalanmalıdır.
Bunu da main.jsx içinde bulunan **<App />** componentini provider ile sarmalayarak yapabiliriz.
```js script
import { Provider } from 'react-redux'
import {store} from "./store"

    <Provider store={store}>
      <App />
    </Provider>
```
***Provider*** tüm komponentlerin üstünde olmalıdır.

3. Bir ***slice*** oluşturuyoruz. Örneğimizde **counterSlice.jsx** dosyasını oluşturuyoruz.
    * Bu dosya içinde `createSlice` fonksiyonunu import ediyoruz. 
    `import { createSlice } from "@reduxjs/toolkit";` 
    *
