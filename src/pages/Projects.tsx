import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Projects - SPADE Solutions';
  }, []);

  // Project categories
  const categories = [
    'All',
    'Healthcare',
    'Finance',
    'Retail',
    'Education',
    'Manufacturing',
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  // Project data
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Assistant',
      category: 'Healthcare',
      description: 'An intelligent system that helps healthcare providers analyze patient data and improve diagnosis accuracy.',
      imageSrc: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Smart Retail Analytics Platform',
      category: 'Retail',
      description: 'AI-driven analytics solution that helps retailers optimize inventory and enhance customer experience.',
      imageSrc: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Automated Financial Advisor',
      category: 'Finance',
      description: 'AI-based financial advisory platform that provides personalized investment recommendations based on user goals.',
      imageSrc: 'https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'Personalized Learning Platform',
      category: 'Education',
      description: 'Adaptive learning system that tailors educational content to individual student needs and learning styles.',
      imageSrc: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'Predictive Maintenance System',
      category: 'Manufacturing',
      description: 'AI solution that predicts equipment failures before they occur, reducing downtime and maintenance costs.',
      imageSrc: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      title: 'Medical Imaging Analysis Tool',
      category: 'Healthcare',
      description: 'Advanced computer vision system that assists radiologists in detecting abnormalities in medical images.',
      imageSrc: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 7,
      title: 'Supply Chain Optimization System',
      category: 'Manufacturing',
      description: 'AI-powered solution that optimizes supply chain operations to reduce costs and improve efficiency.',
      imageSrc: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 8,
      title: 'Fraud Detection Platform',
      category: 'Finance',
      description: 'Machine learning system that identifies suspicious financial transactions and prevents fraud in real-time.',
      imageSrc: 'https://images.pexels.com/photos/6863254/pexels-photo-6863254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 9,
      title: 'Student Performance Predictor',
      category: 'Education',
      description: 'Predictive analytics tool that helps educators identify at-risk students and provide timely interventions.',
      imageSrc: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-24 bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Explore our innovative AI solutions across various industries that demonstrate our expertise and capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Featured Projects"
            subtitle="Our portfolio of AI projects showcases our ability to deliver impactful solutions across different sectors."
            center
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                imageSrc={project.imageSrc}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Project Approach"
            subtitle="We follow a systematic methodology for every project to ensure quality outcomes and client satisfaction."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-custom text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Discovery</h3>
              <p className="text-gray-600">
                We analyze your requirements, challenges, and objectives to define the project scope.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-custom text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Design</h3>
              <p className="text-gray-600">
                We create a detailed project plan and architecture that aligns with your needs and goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-custom text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Development</h3>
              <p className="text-gray-600">
                Our expert team builds the solution using the latest technologies and best practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-custom text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Deployment</h3>
              <p className="text-gray-600">
                We implement the solution in your environment, provide training, and ensure smooth adoption.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Trusted by Industry Leaders"
            subtitle="We've collaborated with companies across various industries to deliver impactful AI solutions."
            center
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">Client {index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your AI Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Let's discuss how we can help you leverage AI to solve your business challenges and achieve your goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;