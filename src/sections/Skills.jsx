import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/siteData'
import { Code, Database, Cpu, Monitor, Trophy, Terminal, FileCode, Server } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredSkill, setHoveredSkill] = useState(null)

  // Skills that are currently being learned
  const loadingSkills = ['Node.js', 'Express.js', 'MongoDB']

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: skills.frontend,
      icon: Code
    },
    {
      title: "Backend Development", 
      color: "from-green-500 to-emerald-500",
      skills: skills.backend,
      icon: Server
    },
    {
      title: "Databases",
      color: "from-purple-500 to-pink-500",
      skills: skills.databases,
      icon: Database
    },
    {
      title: "Programming Languages",
      color: "from-orange-500 to-red-500",
      skills: skills.programming,
      icon: FileCode
    },
    {
      title: "Tools & Technologies",
      color: "from-indigo-500 to-purple-500",
      skills: skills.tools,
      icon: Monitor
    },
    {
      title: "Competitive Programming",
      color: "from-teal-500 to-blue-500",
      skills: skills.competitive,
      icon: Trophy
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center space-x-3">
                  <category.icon className="w-8 h-8 text-blue-500" />
                  <span>{category.title}</span>
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full mx-auto`} />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const isLoading = loadingSkills.includes(skill)
                  return (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group relative"
                    >
                      <div className="card p-4 h-full hover:shadow-2xl transition-all duration-300 cursor-pointer text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill}
                          {isLoading && (
                            <span className="ml-2 text-xs text-orange-500">(Learning)</span>
                          )}
                        </div>

                        {/* Hover Effect */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: hoveredSkill === skill ? 1 : 0,
                            y: hoveredSkill === skill ? 0 : 10
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl pointer-events-none"
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and improving my skills. 
              Currently learning about cloud architecture, machine learning, and advanced algorithms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Cloud Computing', 'Machine Learning', 'System Design', 'DevOps', 'Microservices', 'GraphQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills