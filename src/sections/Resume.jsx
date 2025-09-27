import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, Eye, FileText, Award, Briefcase, GraduationCap, ExternalLink } from 'lucide-react'
import { profile, experience, education } from '../data/siteData'

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Download my resume to learn more about my professional experience, education, and skills.
          </p>
          
          {/* Resume Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Eye className="w-5 h-5" />
              <span>View Resume</span>
            </motion.a>
            <motion.a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span>Resume Preview</span>
              </h3>
              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center space-x-1"
              >
                <span>Open in new tab</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
            
            {/* Resume Preview Content */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border-2 border-dashed border-gray-200 dark:border-gray-600">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{profile.name}</h4>
                <p className="text-lg text-gray-600 dark:text-gray-400">{profile.title}</p>
                <div className="flex justify-center space-x-4 mt-4 text-sm text-gray-500 dark:text-gray-500">
                  <span>{profile.location}</span>
                  <span>•</span>
                  <span>{profile.socials.linkedin}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Professional Experience</span>
                  </h5>
                  <div className="space-y-4">
                    {experience.slice(0, 2).map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                        <div className="flex justify-between items-start mb-1">
                          <h6 className="font-semibold text-gray-900 dark:text-white">{exp.role}</h6>
                          <span className="text-sm text-gray-500 dark:text-gray-500">{exp.start} - {exp.end}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-1">
                          {exp.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                            <span key={highlightIndex} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Education</span>
                  </h5>
                  <div className="space-y-3">
                    {education.slice(0, 1).map((edu, index) => (
                      <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                        <div className="flex justify-between items-start mb-1">
                          <h6 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h6>
                          <span className="text-sm text-gray-500 dark:text-gray-500">{edu.start} - {edu.end}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center space-x-3">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span>Experience</span>
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="card p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {exp.start} - {exp.end}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.location}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center space-x-3">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span>Education</span>
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="card p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {edu.start} - {edu.end}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and contribute to meaningful projects. 
              Let's discuss how we can work together to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
              <motion.a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume