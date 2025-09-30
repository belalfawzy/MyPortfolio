import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Award, Calendar, Building, X, Eye } from 'lucide-react'
import { certificates } from '../data/siteData'

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCertificate, setSelectedCertificate] = useState(null)

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
    <section id="certificates" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise in various technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group card overflow-hidden cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                {certificate.image ? (
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-64 object-contain bg-gray-100 dark:bg-gray-700"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white">
                    <Award className="w-16 h-16" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {certificate.title}
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  <Building className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {certificate.issuer}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {certificate.issued}
                    {certificate.expired && ` - ${certificate.expired}`}
                  </span>
                </div>
                {certificate.credentialId && (
                  <div className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                    ID: {certificate.credentialId}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {certificate.link ? 'Verified' : 'Certificate'}
                  </span>
                  {certificate.link && (
                    <motion.a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {certificates.length}+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Professional Certificates
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Completion Rate
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  2022-2025
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Learning Period
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-blue-500">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedCertificate.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {selectedCertificate.issuer}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedCertificate(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </motion.button>
                </div>

                <div className="space-y-6">
                  {/* Certificate Image */}
                  {selectedCertificate.image ? (
                    <div className="w-full rounded-xl overflow-hidden">
                      <img 
                        src={selectedCertificate.image} 
                        alt={selectedCertificate.title}
                        className="w-full h-auto object-contain bg-gray-100 dark:bg-gray-700"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white">
                      <Award className="w-20 h-20" />
                    </div>
                  )}

                  {/* Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Certificate Details
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-gray-700 dark:text-gray-300">
                            Issued: {selectedCertificate.issued}
                          </span>
                        </div>
                        {selectedCertificate.expired && (
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">
                              Expires: {selectedCertificate.expired}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center space-x-3">
                          <Building className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {selectedCertificate.issuer}
                          </span>
                        </div>
                        {selectedCertificate.credentialId && (
                          <div className="flex items-center space-x-3">
                            <Award className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">
                              ID: {selectedCertificate.credentialId}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Status
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {selectedCertificate.link ? 'Verified Online' : 'Certificate Issued'}
                          </span>
                        </div>
                        {selectedCertificate.expired && (
                          <div className="text-sm text-orange-600 dark:text-orange-400">
                            Expires {selectedCertificate.expired}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  {selectedCertificate.link && (
                    <div className="flex justify-center">
                      <motion.a
                        href={selectedCertificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Verify Certificate</span>
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates