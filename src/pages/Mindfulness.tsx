import {
  Calendar,
  CheckCircle2,
  Flag,
  Heart,
  HeartPulse,
  LineChart,
  MessageCircle,
  Pencil,
  Search,
  Sprout,
  Target,
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
  { icon: Heart, title: 'Manejo del estrés', description: 'Herramientas para regular la respuesta al estrés diario.' },
  { icon: HeartPulse, title: 'Salud mental', description: 'Bienestar sostenido dentro y fuera del trabajo.' },
  { icon: Target, title: 'Concentración', description: 'Mayor foco y claridad en las tareas clave.' },
  { icon: Users, title: 'Liderazgo consciente', description: 'Presencia, escucha y empatía en el rol de líder.' },
] as const

const COMO_FUNCIONA = [
  {
    number: '01',
    icon: Sprout,
    title: 'Meditación guiada de 20 min + cierre reflexivo',
    items: [
      'Ejercicios simples y breves adaptados al ámbito corporativo',
      'Observación de pensamientos',
      'Pausa consciente entre reuniones',
      'Técnica STOP (Stop–Take a breath–Observe–Proceed)',
    ],
  },
  {
    number: '02',
    icon: CheckCircle2,
    title: 'Aplicación a situaciones concretas',
    items: [
      'Liderazgo (escucha, presencia, empatía)',
      'Toma de decisiones',
      'Reuniones y conversaciones difíciles',
      'Gestión del estrés y foco en tareas clave',
    ],
  },
] as const

const BENEFICIOS = [
  { icon: MessageCircle, title: 'Lenguaje Constructivista', description: 'Mejora en la comunicación, resolución de conflictos y adaptación al cambio.' },
  { icon: Target, title: 'Claridad de Objetivo', description: 'Contribuye a desaparecer el aturdimiento diario para poder seguir enfocado.' },
  { icon: Heart, title: 'Mejora del Clima Laboral', description: 'Creación de un entorno de trabajo positivo y colaborativo.' },
  { icon: Users, title: 'Crecimiento Mutuo', description: 'Entender que mis colegas importan y son parte de mi resultado.' },
] as const

const METODOLOGIA = [
  { number: '01', icon: Search, title: 'Relevamiento Organizacional', description: 'Evaluación de las necesidades y objetivos del cliente.' },
  { number: '02', icon: Pencil, title: 'Diseño de Intervención', description: 'Creación de un espacio acorde al equipo de trabajo.' },
  { number: '03', icon: Calendar, title: 'Implementación', description: 'Encuentro de 1 hora con meditación guiada y herramientas de gestión.' },
  { number: '04', icon: LineChart, title: 'Seguimiento y Evaluación', description: 'Monitorización del progreso y ajuste del programa.' },
  { number: '05', icon: Flag, title: 'Cierre y Reflexión', description: 'Revisión final de los logros y planificación de los próximos pasos.' },
] as const

function Mindfulness() {
  return (
    <div className="w-full bg-cream">
      <ServiceHeader />
      <BackLink />

      <ServiceHero
        eyebrow="Mindfulness"
        title="Presencia y claridad para liderar mejor."
        description="En esta nueva era donde el contacto personal muchas veces se encuentra en segundo plano, el Mindfulness no es relajación, es una habilidad organizacional. La meditación es un canal para correr las barreras y poder enfocar con claridad."
        photoAlt="Sesión de mindfulness corporativo en equipo"
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
        title={['Claridad para liderar.', 'Presencia para conectar.']}
        subtitle="Conversemos sobre cómo incorporar Mindfulness en tu organización."
      />
    </div>
  )
}

export default Mindfulness
