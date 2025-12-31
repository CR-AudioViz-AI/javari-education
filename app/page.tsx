'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Award, Users, Code, Palette,
  TrendingUp, Briefcase, CheckCircle, ArrowRight, Star,
  Play, Clock, Trophy, Target
} from 'lucide-react';

const categories = [
  { id: 'tech', name: 'Technology', icon: Code, courses: 250, color: 'from-blue-500 to-cyan-600' },
  { id: 'business', name: 'Business', icon: Briefcase, courses: 180, color: 'from-emerald-500 to-teal-600' },
  { id: 'design', name: 'Design', icon: Palette, courses: 120, color: 'from-purple-500 to-pink-600' },
  { id: 'marketing', name: 'Marketing', icon: TrendingUp, courses: 95, color: 'from-orange-500 to-red-600' },
];

const featuredCourses = [
  { id: 1, title: 'AI & Machine Learning Fundamentals', instructor: 'Dr. Sarah Chen', rating: 4.9, students: '45K', hours: 32, price: 79, category: 'Technology' },
  { id: 2, title: 'Digital Marketing Mastery', instructor: 'Mark Thompson', rating: 4.8, students: '38K', hours: 24, price: 59, category: 'Marketing' },
  { id: 3, title: 'UX/UI Design Complete Course', instructor: 'Emma Rodriguez', rating: 4.9, students: '32K', hours: 40, price: 89, category: 'Design' },
  { id: 4, title: 'Project Management Professional', instructor: 'James Wilson', rating: 4.7, students: '28K', hours: 28, price: 69, category: 'Business' },
];

const stats = [
  { value: '500+', label: 'Courses' },
  { value: '100K+', label: 'Students' },
  { value: '50+', label: 'Certifications' },
  { value: '4.8/5', label: 'Average Rating' },
];

const features = [
  { icon: Play, title: 'Learn at Your Pace', desc: 'Access courses anytime, anywhere on any device' },
  { icon: Award, title: 'Earn Certificates', desc: 'Get recognized credentials for your achievements' },
  { icon: Users, title: 'Expert Instructors', desc: 'Learn from industry professionals and thought leaders' },
  { icon: Target, title: 'Practical Projects', desc: 'Apply your skills with hands-on assignments' },
];

export default function EducationPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Javari Education</span>
                <span className="text-blue-400 text-xs block -mt-1">by CR AudioViz AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#courses" className="text-gray-300 hover:text-white transition">Courses</a>
              <a href="#certifications" className="text-gray-300 hover:text-white transition">Certifications</a>
              <a href="#business" className="text-gray-300 hover:text-white transition">For Business</a>
              <a href="#start" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Start Learning
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 mb-8"
          >
            <Trophy className="w-4 h-4" />
            <span>Industry-recognized certifications</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Learn Skills That<br/>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Advance Your Career
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Access world-class courses from industry experts. 
            Earn certificates and transform your career.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#courses" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-2">
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#business" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition">
              For Business
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse Categories</h2>
            <p className="text-xl text-gray-400">Find the perfect course for your goals</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-6 bg-white/5 border rounded-xl text-center transition-all hover:scale-105 ${
                  selectedCategory === cat.id ? 'border-blue-500 bg-blue-500/10' : 'border-white/10'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${cat.color} mb-4`}>
                  <cat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-400">{cat.courses} courses</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-400">Our most popular learning paths</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-blue-500/50 transition group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    {course.category}
                  </span>
                  <span className="text-2xl font-bold text-white">${course.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">by {course.instructor}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {course.rating}
                    </span>
                    <span>{course.students} students</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.hours}h
                    </span>
                  </div>
                  <button className="text-blue-400 font-medium group-hover:text-blue-300 transition flex items-center gap-1">
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl text-center"
              >
                <feature.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-20 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of learners advancing their careers</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/signup" className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/plans" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition">
              View Plans
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">Javari Education</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
