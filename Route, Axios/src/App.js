import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Tambahkan rute untuk halaman lain di sini */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;