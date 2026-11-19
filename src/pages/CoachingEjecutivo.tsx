import { BarChart2, Calendar, Flag, Heart, Leaf, LineChart, MessageCircle, Mountain, Search, Target, User, Users } from 'lucide-react'
import ServiceHeader from '../components/service-page/ServiceHeader'
import BackLink from '../components/service-page/BackLink'
import ServiceHero from '../components/service-page/ServiceHero'
import SectionDivider from '../components/service-page/SectionDivider'
import IconFeatureGrid from '../components/service-page/IconFeatureGrid'
import Metodologia from '../components/service-page/Metodologia'
import ServiceCTA from '../components/service-page/ServiceCTA'

const QUE_TRABAJAMOS = [
  { icon: MessageCircle, title: 'Comunicación asertiva', description: 'Conversaciones más claras, efectivas y orientadas a resultados.' },
  { icon: Users, title: 'Liderazgo de equipos', description: 'Capacidad de movilizar personas y generar compromiso.' },
  { icon: Heart, title: 'Gestión emocional', description: 'Manejo del estrés y los desafíos propios del rol.' },
  { icon: BarChart2, title: 'Resultados medibles', description: 'Objetivos concretos y seguimiento del progreso.' },
] as const

const BENEFICIOS = [
  { icon: Target, title: 'Clarificar Objetivos', description: 'Profesionales y personales.' },
  { icon: Mountain, title: 'Trabajar Desafíos', description: 'Liderazgo, toma de decisiones, comunicación, gestión del estrés.' },
  { icon: Search, title: 'Identificar Patrones', description: 'Identificar creencias y hábitos que impactan en su desempeño.' },
  { icon: Leaf, title: 'Diseño de Acciones', description: 'Diseñar acciones concretas y sostenibles en el tiempo.' },
] as const

const METODOLOGIA = [
  { number: '01', icon: Users, title: 'Reunión con la Organización', description: 'Conversación con el director de área para acordar lo que desea trabajar en sus líderes.' },
  { number: '02', icon: User, title: 'Encuentros con Líderes', description: 'Acordar de forma privada objetivo de trabajo alineando sus objetivos con los de la organización.' },
  { number: '03', icon: Calendar, title: 'Implementación', description: 'Sesiones individuales (cantidad a acordar con la organización).' },
  { number: '04', icon: LineChart, title: 'Seguimiento y Evaluación', description: 'Monitorización del progreso y compromiso del coachee.' },
  { number: '05', icon: Flag, title: 'Cierre y Reflexión', description: 'Revisión final de los logros y planificación de los próximos pasos.' },
] as const

function CoachingEjecutivo() {
  return (
    <div className="w-full bg-cream">
      <ServiceHeader />
      <BackLink />

      <ServiceHero
        eyebrow="Coaching Ejecutivo"
        title="Liderazgo con foco, claridad y resultados medibles."
        description="Es un proceso de acompañamiento profesional que ayuda a líderes y directivos a mejorar su desempeño, liderazgo y toma de decisiones, alineando sus objetivos personales con los de la organización."
        photoAlt="Coach acompañando a un directivo en una sesión de coaching ejecutivo"
      />

      <SectionDivider />
      <IconFeatureGrid eyebrow="¿Qué trabajamos?" items={QUE_TRABAJAMOS} />

      <SectionDivider />
      <IconFeatureGrid eyebrow="Beneficios" items={BENEFICIOS} />

      <SectionDivider />
      <Metodologia steps={METODOLOGIA} />

      <ServiceCTA
        title={['Líderes que crecen.', 'Organizaciones que avanzan.']}
        subtitle="Conversemos sobre cómo podemos acompañar el desarrollo de tus líderes."
      />
    </div>
  )
}

export default CoachingEjecutivo
