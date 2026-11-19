import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CoachingEquipos from './pages/CoachingEquipos.tsx'
import CoachingEjecutivo from './pages/CoachingEjecutivo.tsx'
import TeamBuilding from './pages/TeamBuilding.tsx'
import IdentidadOrganizacional from './pages/IdentidadOrganizacional.tsx'
import ProgramaLiderazgoGPS from './pages/ProgramaLiderazgoGPS.tsx'
import Mindfulness from './pages/Mindfulness.tsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios/coaching-de-equipos" element={<CoachingEquipos />} />
        <Route path="/servicios/coaching-ejecutivo" element={<CoachingEjecutivo />} />
        <Route path="/servicios/team-building" element={<TeamBuilding />} />
        <Route path="/servicios/identidad-organizacional" element={<IdentidadOrganizacional />} />
        <Route path="/servicios/programa-liderazgo-gps" element={<ProgramaLiderazgoGPS />} />
        <Route path="/servicios/mindfulness" element={<Mindfulness />} />
      </Routes>
      <FloatingWhatsApp />
    </BrowserRouter>
  </StrictMode>,
)
