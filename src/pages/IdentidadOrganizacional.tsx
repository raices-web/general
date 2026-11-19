import {
  BarChart2,
  CheckCircle2,
  Compass,
  Heart,
  Leaf,
  Megaphone,
  Pencil,
  Search,
  Settings,
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
  { icon: Users, title: 'Quiénes somos', description: 'Como organización, con una identidad auténtica y compartida.' },
  { icon: Target, title: 'Para qué existimos', description: 'El propósito que da sentido y guía las decisiones.' },
  { icon: Leaf, title: 'Cómo hacemos las cosas', description: 'Valores y comportamientos que definen nuestra cultura.' },
] as const

const COMO_FUNCIONA = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico de la identidad actual',
    items: [
      'Historia y ADN de la empresa',
      'Valores declarados vs. valores vividos',
      'Estilo de liderazgo',
      'Cultura informal (rituales, símbolos, formas de decidir)',
    ],
  },
  {
    number: '02',
    icon: Compass,
    title: 'Definición de la Identidad Deseada',
    items: [
      'Propósito (para qué existe la empresa)',
      'Visión (a dónde quiere ir)',
      'Misión (cómo lo hace)',
      'Valores centrales',
      'Principios de liderazgo',
    ],
  },
  {
    number: '03',
    icon: Megaphone,
    title: 'Comunicación y Storytelling',
    items: [
      'Narrativa de la empresa',
      'Manual cultural (simple y práctico)',
      'Mensajes clave para líderes y equipos',
      'Materiales internos',
    ],
  },
  {
    number: '04',
    icon: Settings,
    title: 'Integración en Procesos',
    items: ['Selección y onboarding', 'Evaluación de desempeño', 'Reconocimientos', 'Desarrollo de líderes'],
  },
] as const

const BENEFICIOS = [
  { icon: Users, title: 'Alinea', description: 'Cultura y estrategia.' },
  { icon: Heart, title: 'Fortalece', description: 'El compromiso del equipo.' },
  { icon: CheckCircle2, title: 'Coherencia', description: 'Entre discurso y acción.' },
  { icon: Leaf, title: 'Acompaña', description: 'Procesos de crecimiento.' },
] as const

const METODOLOGIA = [
  { number: '01', icon: Search, title: 'Diagnóstico Cultural', description: 'Evaluación de la identidad actual de la organización.' },
  { number: '02', icon: Pencil, title: 'Diseño de Identidad', description: 'Co-creación de propósito, valores y comportamientos.' },
  { number: '03', icon: Megaphone, title: 'Plan de Despliegue Cultural', description: 'Narrativa, materiales internos y comunicación.' },
  { number: '04', icon: Settings, title: 'Integración en Procesos', description: 'Selección, onboarding, evaluación y liderazgo.' },
  { number: '05', icon: BarChart2, title: 'Medición y Sostenibilidad', description: 'Workshops, coaching y diagnóstico de seguimiento.' },
] as const

function IdentidadOrganizacional() {
  return (
    <div className="w-full bg-cream">
      <ServiceHeader />
      <BackLink />

      <ServiceHero
        eyebrow="Identidad Organizacional"
        title="El sentido que moviliza a tu organización."
        description="La identidad organizacional es mucho más que un logo, es el sentido que moviliza a las personas. Se centra en la respuesta compartida a quiénes somos, para qué existimos y cómo elegimos hacer las cosas."
        photoAlt="Equipo directivo trabajando en la identidad organizacional"
      />

      <SectionDivider />
      <IconFeatureGrid eyebrow="¿Qué trabajamos?" items={QUE_TRABAJAMOS} columns={3} />

      <SectionDivider />
      <PhaseSteps eyebrow="¿Cómo funciona?" steps={COMO_FUNCIONA} />

      <SectionDivider />
      <IconFeatureGrid eyebrow="Beneficios" items={BENEFICIOS} />

      <SectionDivider />
      <Metodologia steps={METODOLOGIA} />

      <ServiceCTA
        title={['Identidad clara.', 'Cultura que se sostiene.']}
        subtitle="Conversemos sobre cómo fortalecer la identidad de tu organización."
      />
    </div>
  )
}

export default IdentidadOrganizacional
