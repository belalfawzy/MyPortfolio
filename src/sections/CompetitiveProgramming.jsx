import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Target, TrendingUp, Calendar, ExternalLink, Code2 } from 'lucide-react'
import { competitive } from '../data/siteData'

const CompetitiveProgramming = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [cfData, setCfData] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock data for Codeforces profile (in case API is not accessible)
  const mockData = {
    handle: competitive.handle,
    rating: 1456,
    rank: 'specialist',
    maxRating: 1523,
    maxRank: 'specialist',
    contribution: 156,
    friendsCount: 89,
    contestCount: 45,
    problemsSolved: 234,
    lastOnlineTimeSeconds: Date.now() / 1000 - 3600
  }

  useEffect(() => {
    // Try to fetch real data from Codeforces API
    const fetchCodeforcesData = async () => {
      try {
        const response = await fetch(`https://codeforces.com/api/user.info?handles=${competitive.handle}`)
        if (response.ok) {
          const data = await response.json()
          if (data.status === 'OK' && data.result.length > 0) {
            setCfData(data.result[0])
          } else {
            setCfData(mockData)
          }
        } else {
          setCfData(mockData)
        }
      } catch (error) {
        console.log('Using mock data for Codeforces profile')
        setCfData(mockData)
      } finally {
        setLoading(false)
      }
    }

    fetchCodeforcesData()
  }, [])

  const getRankColor = (rank) => {
    const colors = {
      'newbie': 'text-gray-500',
      'pupil': 'text-green-500',
      'specialist': 'text-cyan-500',
      'expert': 'text-blue-500',
      'candidate master': 'text-purple-500',
      'master': 'text-orange-500',
      'international master': 'text-red-500',
      'grandmaster': 'text-red-600',
      'international grandmaster': 'text-red-700',
      'legendary grandmaster': 'text-red-800'
    }
    return colors[rank] || 'text-gray-500'
  }

  const getRankBgColor = (rank) => {
    const colors = {
      'newbie': 'bg-gray-100 dark:bg-gray-800',
      'pupil': 'bg-green-100 dark:bg-green-900/20',
      'specialist': 'bg-cyan-100 dark:bg-cyan-900/20',
      'expert': 'bg-blue-100 dark:bg-blue-900/20',
      'candidate master': 'bg-purple-100 dark:bg-purple-900/20',
      'master': 'bg-orange-100 dark:bg-orange-900/20',
      'international master': 'bg-red-100 dark:bg-red-900/20',
      'grandmaster': 'bg-red-100 dark:bg-red-900/20',
      'international grandmaster': 'bg-red-100 dark:bg-red-900/20',
      'legendary grandmaster': 'bg-red-100 dark:bg-red-900/20'
    }
    return colors[rank] || 'bg-gray-100 dark:bg-gray-800'
  }

  const achievements = [
    {
      title: 'Codeforces Specialist',
      description: 'Achieved specialist rank with rating above 1400',
      icon: Trophy,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/20'
    },
    {
      title: 'Problem Solver',
      description: 'Solved 200+ problems across different platforms',
      icon: Target,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      title: 'Contest Participant',
      description: 'Participated in 40+ competitive programming contests',
      icon: Calendar,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      title: 'Consistent Growth',
      description: 'Maintained consistent improvement in problem-solving skills',
      icon: TrendingUp,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    }
  ]

  const platforms = [
    {
      name: 'Codeforces',
      handle: competitive.handle,
      url: competitive.url,
      rating: cfData?.rating || 1456,
      rank: cfData?.rank || 'specialist',
      problemsSolved: cfData?.problemsSolved || 234,
      color: 'text-red-500',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    },
    {
      name: 'HackerRank',
      handle: 'belalfawzy',
      url: 'https://www.hackerrank.com/belalfawzy',
      rating: 1850,
      rank: 'expert',
      problemsSolved: 156,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    }
  ]

  if (loading) {
    return (
      <section id="competitive-programming" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading competitive programming data...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="competitive-programming" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Competitive <span className="gradient-text">Programming</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about algorithmic problem solving and competitive programming. 
            Always striving to improve my skills and tackle challenging problems.
          </p>
        </motion.div>

        {/* Codeforces Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  BF
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {cfData?.handle || competitive.handle}
                  </h3>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRankBgColor(cfData?.rank || 'specialist')} ${getRankColor(cfData?.rank || 'specialist')}`}>
                    {cfData?.rank || 'specialist'}
                  </div>
                </div>
              </div>
              <motion.a
                href={competitive.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Profile</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {cfData?.rating || 1456}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Current Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {cfData?.maxRating || 1523}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Max Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {cfData?.problemsSolved || 234}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {cfData?.contestCount || 45}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Contests</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Platform Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="card p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {platform.name}
                  </h4>
                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </motion.a>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                    <span className={`font-semibold ${platform.color}`}>
                      {platform.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Rank:</span>
                    <span className={`font-semibold ${platform.color}`}>
                      {platform.rank}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Solved:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {platform.problemsSolved}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <Code2 className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Solve Problems Together?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on challenging problems and learn from fellow competitive programmers.
            </p>
            <motion.a
              href={competitive.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Connect on Codeforces</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompetitiveProgramming