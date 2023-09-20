import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Room from './pages/Room';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main}></Route>
        <Route path="/room/:id" Component={Room}></Route>
        <Route path="*" Component={NotFound404}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
