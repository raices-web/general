import { BarChart2, CheckCircle2, Heart, Leaf, MessageCircle, Search, Shuffle, Target, User, Users } from 'lucide-react'
import ServiceHeader from '../components/service-page/ServiceHeader'
import BackLink from '../components/service-page/BackLink'
import ServiceHero from '../components/service-page/ServiceHero'
import SectionDivider from '../components/service-page/SectionDivider'
import IconFeatureGrid from '../components/service-page/IconFeatureGrid'
import PhaseSteps from '../components/service-page/PhaseSteps'
import Metodologia from '../components/service-page/Metodologia'
import ServiceCTA from '../components/service-page/ServiceCTA'

const QUE_TRABAJAMOS = [
  { icon: MessageCircle, title: 'Comunicación asertiva', description: 'Conversaciones más claras y efectivas dentro del equipo.' },
  { icon: Shuffle, title: 'Adaptabilidad al cambio', description: 'Capacidad de ajustar el rumbo frente a nuevos desafíos.' },
  { icon: Heart, title: 'Feedback efectivo', description: 'Intercambios honestos que fortalecen la confianza.' },
  { icon: User, title: 'Delegar efectivamente', description: 'Distribuir responsabilidades con claridad y confianza.' },
] as const

const COMO_FUNCIONA = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico inicial del equipo',
    items: [
      'Cómo toman decisiones',
      'Cómo se comunican',
      'Qué conflictos existen',
      'Qué tan alineados están con la estrategia',
    ],
  },
  {
    number: '02',
    icon: Users,
    title: 'Encuentros grupales',
    intro: 'El coach:',
    items: [
      'Reflexiona sobre su forma de trabajar',
      'Detecta patrones limitantes',
      'Practica nuevas formas de interacción',
      'Brinda herramientas (feedback, escucha, pedidos efectivos)',
    ],
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Evaluación de resultados',
    items: ['Resultados del negocio', 'Clima laboral', 'Productividad', 'Engagement', 'Calidad de decisiones'],
  },
] as const

const BENEFICIOS = [
  { icon: Target, title: 'Alineación', description: 'Entre líderes y equipo, con foco en objetivos compartidos.' },
  { icon: CheckCircle2, title: 'Responsabilidad', description: 'Compromiso con el proceso.' },
  { icon: Shuffle, title: 'Gestión de Conflictos', description: 'Ayuda a identificar variables e identificar la acción necesaria.' },
  { icon: Leaf, title: 'Diseño', description: 'Diseñar acciones concretas y sostenibles en el tiempo.' },
] as const

const METODOLOGIA = [
  { number: '01', icon: Users, title: 'Reunión con la Organización', description: 'Conversación con el director de área para acordar lo que desea trabajar.' },
  { number: '02', icon: MessageCircle, title: 'Encuentros con Equipo', description: 'Acordar objetivo de trabajo alineando sus objetivos con los de la organización.' },
  { number: '03', icon: Users, title: 'Implementación', description: 'Encuentros grupales (cantidad a acordar con la organización).' },
  { number: '04', icon: BarChart2, title: 'Seguimiento y Evaluación', description: 'Monitorización del progreso y compromiso del equipo.' },
  { number: '05', icon: CheckCircle2, title: 'Cierre y Reflexión', description: 'Revisión final de los logros y planificación de los próximos pasos.' },
] as const

function CoachingEquipos() {
  return (
    <div className="w-full bg-cream">
      <ServiceHeader />
      <BackLink />

      <ServiceHero
        eyebrow="Coaching de Equipos"
        title="Equipos que se comunican mejor, deciden mejor y logran más."
        description="Es un proceso de acompañamiento profesional que ayuda a los equipos a mejorar su forma de comunicarse, colaborar y tomar decisiones. Se enfoca en el funcionamiento colectivo para alinear objetivos, fortalecer vínculos y lograr resultados de manera sostenible."
        photoAlt="Equipo trabajando en conjunto durante una sesión de coaching"
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
        title={['Equipos que colaboran mejor.', 'Resultados que se sostienen.']}
        subtitle="Conversemos sobre cómo podemos acompañar a tu equipo en su proceso de coaching."
      />
    </div>
  )
}

export default CoachingEquipos
