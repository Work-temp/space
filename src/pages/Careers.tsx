import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = 'Careers - SPADE Solutions';
  }, []);

  // Job openings data
  const jobOpenings = [
    {
      id: 1,
      title: 'AI Research Scientist',
      type: 'Full-time',
      location: 'Hyderabad, India',
      description: 'We are looking for an AI Research Scientist to join our team and help develop cutting-edge AI solutions.',
      responsibilities: [
        'Conduct research on machine learning algorithms and techniques',
        'Develop and implement new AI models',
        'Collaborate with cross-functional teams to apply research to real-world problems',
        'Stay up-to-date with the latest developments in AI and machine learning',
      ],
      requirements: [
        'PhD or Master\'s degree in Computer Science, AI, or related field',
        'Strong experience in machine learning and deep learning',
        'Proficiency in Python and relevant ML frameworks (TensorFlow, PyTorch)',
        'Publication record in top-tier AI conferences is a plus',
      ],
    },
    {
      id: 2,
      title: 'AI Solutions Engineer',
      type: 'Full-time',
      location: 'Hyderabad, India',
      description: 'Join our team as an AI Solutions Engineer to design and implement AI solutions for our clients.',
      responsibilities: [
        'Design and develop AI solutions based on client requirements',
        'Translate research innovations into practical applications',
        'Implement and optimize machine learning models for production',
        'Collaborate with the client success team to ensure solution effectiveness',
      ],
      requirements: [
        'Bachelor\'s or Master\'s degree in Computer Science or related field',
        'At least 3 years of experience in developing AI solutions',
        'Strong programming skills in Python and relevant frameworks',
        'Experience with cloud platforms (AWS, Azure, GCP)',
      ],
    },
    {
      id: 3,
      title: 'AI Career Counselor',
      type: 'Full-time',
      location: 'Hybrid (Hyderabad, India)',
      description: 'We are seeking an AI Career Counselor to help guide individuals in their AI career journey.',
      responsibilities: [
        'Provide personalized career guidance to students and professionals',
        'Develop and conduct workshops on AI career paths',
        'Stay informed about the latest trends in AI job market',
        'Create resources and content for career development',
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science, Psychology, or related field',
        'At least 3 years of experience in career counseling or HR',
        'Strong understanding of the AI industry and job market',
        'Excellent communication and interpersonal skills',
      ],
    },
  ];

  // Internship programs data
  const internshipPrograms = [
    {
      id: 1,
      title: 'AI Research Internship',
      duration: '3-6 months',
      description: 'Join our research team to work on cutting-edge AI technologies and contribute to innovative projects.',
    },
    {
      id: 2,
      title: 'Machine Learning Engineering Internship',
      duration: '3-6 months',
      description: 'Get hands-on experience in developing and implementing machine learning models for real-world applications.',
    },
    {
      id: 3,
      title: 'AI Product Development Internship',
      duration: '3-6 months',
      description: 'Work with our product team to design and build AI-powered products from concept to deployment.',
    },
  ];

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
              Careers at SPADE Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Join our team and be part of the AI revolution. Explore job opportunities and internship programs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team Collaboration"
                className="rounded-lg shadow-custom"
              />
            </motion.div>

            <div>
              <SectionHeading
                title="Why Join SPADE Solutions"
                subtitle="We offer a dynamic work environment where innovation and growth are part of everyday life."
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Cutting-Edge Work</h3>
                      <p className="text-gray-600">
                        Work on innovative AI projects that push the boundaries of technology and make a real impact on businesses and individuals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                      <p className="text-gray-600">
                        Continuous learning and development opportunities through mentorship, workshops, and access to the latest AI resources.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                      <p className="text-gray-600">
                        A supportive and inclusive work environment where teamwork and knowledge sharing are encouraged and valued.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
                      <p className="text-gray-600">
                        Attractive compensation packages, flexible work arrangements, and additional perks to support your wellbeing.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Current Job Openings"
            subtitle="Explore our open positions and find the perfect role to match your skills and career goals."
            center
          />

          <div className="space-y-8 mt-12">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-custom overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center text-gray-600">
                          <Briefcase size={16} className="mr-2" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="btn btn-primary"
                    >
                      Apply Now
                    </Link>
                  </div>

                  <p className="text-gray-600 mb-6">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Internship Opportunities"
            subtitle="Gain practical experience and mentorship through our structured internship programs."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {internshipPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>{program.duration}</span>
                </div>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <Link
                  to="/contact"
                  className="text-primary font-medium hover:text-primary-dark transition-colors flex items-center"
                >
                  Apply Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Application Process"
            subtitle="A simple and transparent process designed to find the best match for both you and us."
            center
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-primary/20"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:pl-12 relative"
                >
                  {/* Timeline marker */}
                  <div className="hidden md:block absolute left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold mb-3">1. Application Submission</h3>
                  <p className="text-gray-600">
                    Submit your application through our website, including your resume and cover letter. Be sure to highlight your relevant skills and experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:pl-12 relative"
                >
                  {/* Timeline marker */}
                  <div className="hidden md:block absolute left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold mb-3">2. Initial Screening</h3>
                  <p className="text-gray-600">
                    Our HR team reviews your application and conducts an initial phone interview to assess your qualifications and fit for the role.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:pl-12 relative"
                >
                  {/* Timeline marker */}
                  <div className="hidden md:block absolute left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold mb-3">3. Technical Assessment</h3>
                  <p className="text-gray-600">
                    Depending on the role, you may be asked to complete a technical assessment or project to demonstrate your skills and problem-solving abilities.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:pl-12 relative"
                >
                  {/* Timeline marker */}
                  <div className="hidden md:block absolute left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold mb-3">4. In-depth Interview</h3>
                  <p className="text-gray-600">
                    Meet with our team for a comprehensive interview to discuss your experience, technical skills, and alignment with our culture and values.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:pl-12 relative"
                >
                  {/* Timeline marker */}
                  <div className="hidden md:block absolute left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold mb-3">5. Offer & Onboarding</h3>
                  <p className="text-gray-600">
                    If you're the right fit, we'll extend an offer and welcome you to the SPADE Solutions team with a comprehensive onboarding process.
                  </p>
                </motion.div>
              </div>
            </div>
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
              Ready to Join Our Team?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Explore our current openings or submit your resume for future opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md transition-all duration-300"
              >
                Apply Now
              </Link>
              <a
                href="mailto:careers@spade.com"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md transition-all duration-300"
              >
                Email Your Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;