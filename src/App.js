
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShortUrl from './pages/ShortUrl';
import Header from './components/Header';

function App() {
  return (
    <div>
<BrowserRouter>

<Routes >

<Route exact path='/' element={
  <>
<Header/>
<Home />
</>

} />

<Route path='/:id' element={<ShortUrl />} />

<Route path='*' element={<NotFound />} />
</Routes>

</BrowserRouter>
     
    </div>
  );
}

export default App;
