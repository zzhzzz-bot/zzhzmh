import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AlbumPage from './pages/AlbumPage'
import BackgroundPatterns from './components/BackgroundPatterns'
import PrimitiveShapes from './components/FloatingDecorations'

export default function App() {
  return (
    <HashRouter>
      <BackgroundPatterns />
      <PrimitiveShapes />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
      </Routes>
    </HashRouter>
  )
}
