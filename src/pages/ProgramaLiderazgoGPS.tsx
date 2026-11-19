import { CheckCircle2, Flag, Heart, Leaf, Mountain, Navigation, Shuffle, Target, User, Users, Wrench } from 'lucide-react'
import ServiceHeader from '../components/service-page/ServiceHeader'
import BackLink from '../components/service-page/BackLink'
import ServiceHero from '../components/service-page/ServiceHero'
import SectionDivider from '../components/service-page/SectionDivider'
import IconFeatureGrid from '../components/service-page/IconFeatureGrid'
import PhaseSteps from '../components/service-page/PhaseSteps'
import Metodologia from '../components/service-page/Metodologia'
import ServiceCTA from '../components/service-page/ServiceCTA'

const QUE_TRABAJAMOS = [
  { icon: Heart, title: 'Bajo compromiso', description: 'Falta de motivación y bajo compromiso del equipo.' },
  { icon: Mountain, title: 'Resiliencia emocional', description: 'Desafíos para sostener el foco frente a la presión.' },
  { icon: User, title: 'Liderazgo ineficaz', description: 'Falta de herramientas para gestionar al equipo.' },
  { icon: Shuffle, title: 'Adaptación al cambio', description: 'Dificultad para ajustarse a nuevos contextos.' },
] as const

const COMO_FUNCIONA = [
  {
    number: '01',
    icon: Navigation,
    title: 'GPS de Liderazgo',
    items: [
      'Metodología de diagnóstico de liderazgo',
      'Mide 15 competencias fundamentales agrupadas en 5 dimensiones',
      'GPS inicial y GPS final para medir progreso',
    ],
  },
  {
    number: '02',
    icon: Users,
    title: 'Capacitaciones',
    description: 'Encuentros prácticos grupales de distinciones fundamentales de un liderazgo integral.',
  },
  {
    number: '03',
    icon: User,
    title: 'Coaching Ejecutivo',
    description: 'Proceso personal de coaching para el alcance de objetivos. Medición por resultados.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Herramientas',
    description: 'Herramientas prácticas de aplicación diaria de las distinciones brindadas en capacitaciones.',
  },
] as const

const BENEFICIOS = [
  { icon: Target, title: 'Diagnóstico Preciso', description: '15 competencias de liderazgo medidas en 5 dimensiones.' },
  { icon: Leaf, title: 'Desarrollo Integral', description: 'Capacitaciones + coaching + herramientas prácticas.' },
  { icon: CheckCircle2, title: 'Resultados Medibles', description: 'GPS inicial y final para medir el progreso de cada líder.' },
  { icon: Wrench, title: 'Aplicación Diaria', description: 'Herramientas prácticas para el día a día.' },
] as const

const METODOLOGIA = [
  { number: '01', icon: Navigation, title: 'GPS Inicial', description: 'Diagnóstico de las 15 competencias de liderazgo.' },
  { number: '02', icon: Users, title: 'Capacitaciones Grupales', description: 'Encuentros prácticos sobre liderazgo integral.' },
  { number: '03', icon: User, title: 'Coaching Individual', description: 'Sesiones personalizadas para alcanzar objetivos.' },
  { number: '04', icon: Wrench, title: 'Herramientas Prácticas', description: 'Aplicación diaria de distinciones aprendidas.' },
  { number: '05', icon: Flag, title: 'GPS Final', description: 'Medición del progreso y planificación de próximos pasos.' },
] as const

function ProgramaLiderazgoGPS() {
  return (
    <div className="w-full bg-cream">
      <ServiceHeader />
      <BackLink />

      <ServiceHero
        eyebrow="Programa de Liderazgo GPS"
        title="Liderazgo auténtico, medido y sostenido en el tiempo."
        description='Muchas industrias se enfocan en el "qué" se vende, pero ignoran el "cómo". Nuestro programa ataca la raíz del problema: la falta de liderazgo auténtico y de herramientas para gestionar el equipo.'
        photoAlt="Líder participando de una capacitación del Programa GPS"
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
        title={['Liderazgo que se mide.', 'Equipos que avanzan.']}
        subtitle="Conversemos sobre cómo implementar el Programa GPS en tu organización."
      />
    </div>
  )
}

export default ProgramaLiderazgoGPS
