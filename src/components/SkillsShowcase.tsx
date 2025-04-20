import React from 'react'
import { FaAws, FaNodeJs, FaReact, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiServerless, SiMongodb, SiPostgresql } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { MdArchitecture } from 'react-icons/md'

const SkillsShowcase = () => {
  const skills = [
    { name: 'AWS', icon: <FaAws size={24} /> },
    { name: 'NodeJS', icon: <FaNodeJs size={24} /> },
    { name: 'React', icon: <FaReact size={24} /> },
    { name: 'TypeScript', icon: <SiTypescript size={24} /> },
    { name: 'NextJS', icon: <TbBrandNextjs size={24} /> },
    { name: 'Serverless', icon: <SiServerless size={24} /> },
    { name: 'Docker', icon: <FaDocker size={24} /> },
    { name: 'MongoDB', icon: <SiMongodb size={24} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={24} /> },
    { name: 'Scalable Architecture', icon: <MdArchitecture size={24} /> },
  ]

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-backgroundSecondary rounded-lg hover:bg-backgroundHover transition-colors"
          >
            <div className="text-[#e4d5bd] mb-2">{skill.icon}</div>
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsShowcase
