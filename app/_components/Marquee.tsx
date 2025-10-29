import { useEffect, useRef, useState } from 'react'
// import skillList from './data.ts'
 const skillList = [
  {
    name: 'JavaScript',
    logo: 'https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/icon-javscript.png?updatedAt=1730199511694',
  },
  {
    name: 'TypeScript',
    logo: 'https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/icon-typescript.png?updatedAt=1730199511629',
  },
  {
    name: 'React.js',
    logo: 'https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/icon-react.png?updatedAt=1730199511618',
  },
  {
    name: 'Next.js',
    logo: 'https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/icon-nextjs.png?updatedAt=1730199511621',
  },
  {
    name: 'Node.js',
    logo: 'https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/icon-nodejs.png?updatedAt=1730199511721',
  },
  {
    name: 'Express.js',
    logo: 'https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/icon-express.png?updatedAt=1730199511600',
  },
  {
    name: 'Nest.js',
    logo: 'https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/icon-nest.png?updatedAt=1730199511689',
  },
  {
    name: 'Socket.io',
    logo: 'https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/icon-socket.png?updatedAt=1730199511649',
  },
]

type MarqueeAnimationType = (
  element: HTMLElement,
  elementWidth: number,
  windowWidth: number,
) => void

const marqueeAnimation: MarqueeAnimationType = (element, elementWidth, windowWidth) => {
  element.animate(
    [{ transform: 'translateX(0)' }, { transform: `translateX(${windowWidth - elementWidth}px)` }],
    {
      duration: 6000,
      easing: 'linear',
      direction: 'alternate',
      iterations: Infinity,
    },
  )
}

type MarqueeProps = {
  skills: { name: string; logo: string }[]
}

const Marquee: React.FC<MarqueeProps> = ({ skills = skillList }) => {
  const skillsElementRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    if (skillsElementRef.current) {
      const elementWidth = skillsElementRef.current.getBoundingClientRect().width
      marqueeAnimation(skillsElementRef.current as HTMLElement, elementWidth, windowWidth)
    }

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth])

  return (
    <div className="relative overflow-x-hidden bg-transparent">
      <div id="skills" className="w-max whitespace-nowrap p-5 lg:p-7" ref={skillsElementRef}>
        <div className="flex gap-8 lg:gap-24">
          {skills.map(({ name, logo }, index) => (
            <span key={index} className="flex items-center text-lg text-[#607B96] lg:text-base">
              <img src={logo} alt={name} className="mx-2 size-11 lg:size-14" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee