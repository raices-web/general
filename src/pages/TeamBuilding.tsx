import {
  Calendar,
  CheckCircle2,
  Flag,
  Heart,
  HeartHandshake,
  LineChart,
  MessageCircle,
  Pencil,
  Search,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import ServiceHeader from '../components/service-page/ServiceHeader'
import BackLink from '../components/service-page/BackLink'
import ServiceHero from '../components/service-page/ServiceHero'
import SectionDivider from '../components/service-page/SectionDivider'
import IconFeatureGrid from '../components/service-page/IconFeatureGrid'
import PhaseSteps from '../components/service-page/PhaseSteps'
import Metodologia from '../components/service-page/Metodologia'
import ServiceCTA from '../components/service-page/ServiceCTA'

const QUE_TRABAJAMOS = [
  { icon: TrendingUp, title: 'Compromiso y motivación', description: 'Aumentar el involucramiento genuino con los objetivos comunes.' },
  { icon: HeartHandshake, title: 'Clima laboral', description: 'Reducir conflictos y mejorar la convivencia diaria.' },
  { icon: Users, title: 'Cooperación entre áreas', description: 'Potenciar el trabajo conjunto más allá de los equipos.' },
  { icon: Target, title: 'Cultura y estrategia', description: 'Alinear a los equipos con la cultura y la estrategia.' },
] as const

const COMO_FUNCIONA = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico previo',
    description: 'Se define el foco: comunicación entre áreas, liderazgo, integración post fusión, etc.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Dinámicas experienciales',
    description: 'Actividades diseñadas para simular situaciones reales del trabajo en un entorno lúdico.',
  },
  {
    number: '03',
    icon: MessageCircle,
    title: 'Reflexión guiada (debrief)',
    items: [
      '¿Qué pasó?',
      '¿Qué funcionó y qué no?',
      '¿Qué se parece a nuestro día a día?',
      '¿Qué aprendizajes nos llevamos?',
    ],
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Aterrizaje a la práctica',
    items: [
      'Nuevas formas de comunicarse',
      'Acuerdos de feedback',
      'Rituales de equipo',
      'Principios de trabajo compartidos',
    ],
  },
] as const

const BENEFICIOS = [
  { icon: Heart, title: 'Fortalecer Vínculos', description: 'Entre los miembros del equipo.' },
  { icon: MessageCircle, title: 'Mejora la Comunicación', description: 'Contribuye a la colaboración mutua para alcanzar objetivos.' },
  { icon: HeartHandshake, title: 'Mejora del Clima', description: 'Creación de un entorno de trabajo positivo y colaborativo.' },
  { icon: Users, title: 'Pertenencia', description: 'Sentido de pertenencia alineado a los objetivos comunes.' },
] as const

const METODOLOGIA = [
  { number: '01', icon: Search, title: 'Relevamiento', description: 'Evaluación de las necesidades y objetivos del cliente.' },
  { number: '02', icon: Pencil, title: 'Diseño de Intervención', description: 'Creación de un espacio acorde al equipo de trabajo.' },
  { number: '03', icon: Calendar, title: 'Implementación', description: 'Encuentro de jornada completa o media jornada.' },
  { number: '04', icon: LineChart, title: 'Seguimiento y Evaluación', description: 'Qué se logró trabajar y qué espacios de oportunidad encontramos.' },
  { number: '05', icon: Flag, title: 'Cierre y Reflexión', description: 'Revisión final de los logros y planificación de los próximos pasos.' },
] as const

function TeamBuilding() {
  return (
    <div className="w-full bg-cream">
      <ServiceHeader />
      <BackLink />

      <ServiceHero
        eyebrow="Team Building"
        title="Vínculos más fuertes. Equipos más cohesionados."
        description="Los equipos no se construyen solo con procesos, sino con vínculos y propósito compartido. El Team Building es una herramienta estratégica de desarrollo organizacional diseñada para aumentar el compromiso, reducir conflictos y potenciar la cooperación entre áreas."
        photoAlt="Equipo participando de una dinámica de Team Building"
      />

      <SectionDivider />
      <IconFeatureGrid eyebrow="¿Qué trabajamos?" items={QUE_TRABAJAMOS} />

      <SectionDivider />
      <PhaseSteps eyebrow="¿Cómo funciona?" steps={COMO_FUNCIONA} />

      <SectionDivider />
      <IconFeatureGrid eyebrow="Beneficios" items={BENEFICIOS} />

      <SectionDivider />
      <Metodologia steps={METODOLOGIA} />

      <ServiceCTA
        title={['Equipos conectados.', 'Culturas que se fortalecen.']}
        subtitle="Conversemos sobre cómo diseñar una experiencia de Team Building para tu equipo."
      />
    </div>
  )
}

export default TeamBuilding
