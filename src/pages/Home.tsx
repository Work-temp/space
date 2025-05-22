import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, LightbulbIcon, RocketIcon, GraduationCap, Users, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'SPADE Solutions - AI Technology & Career Guidance';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Innovative AI Solutions for Future Growth"
        subtitle="Empowering businesses and individuals with cutting-edge artificial intelligence technologies and education."
        ctaText="Get Started"
        secondaryCtaText="Explore Services"
      />

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="We provide comprehensive AI solutions and educational services to help individuals and businesses thrive in the AI-driven future."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="AI Solutions"
              description="Custom AI solutions designed to address specific business challenges and improve operational efficiency."
              delay={0.1}
            />
            <ServiceCard
              icon={LightbulbIcon}
              title="Career Guidance"
              description="Expert guidance to help you navigate the rapidly evolving AI landscape and build a successful career."
              delay={0.2}
            />
            <ServiceCard
              icon={RocketIcon}
              title="AI Projects"
              description="Collaborative AI project development to bring innovative ideas to life with cutting-edge technology."
              delay={0.3}
            />
            <ServiceCard
              icon={GraduationCap}
              title="AI Internships"
              description="Hands-on learning opportunities for students and professionals looking to gain practical experience in AI."
              delay={0.4}
            />
            <ServiceCard
              icon={Users}
              title="Consulting Services"
              description="Strategic AI consulting to help businesses identify opportunities and implement effective AI solutions."
              delay={0.5}
            />
            <ServiceCard
              icon={LightbulbIcon}
              title="AI Workshops"
              description="Interactive workshops to develop AI skills and knowledge for individuals and corporate teams."
              delay={0.6}
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
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
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SPADE Solutions Team"
                className="rounded-lg shadow-custom"
              />
            </motion.div>

            <div>
              <SectionHeading
                title="Who We Are"
                subtitle="SPADE Solutions is a leading provider of AI technology solutions and educational services, committed to bridging the gap between innovation and application."
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-6">
                  Founded by a team of AI experts and educators, we're passionate about making advanced technology accessible and helping individuals build successful careers in AI. Our team combines technical expertise with industry experience to deliver solutions that drive real results.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Industry-leading expertise</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Practical career guidance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Cutting-edge AI solutions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Hands-on learning approach</span>
                  </div>
                </div>

                <Link to="/about" className="btn btn-outline flex items-center w-fit">
                  Learn More About Us <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Projects"
            subtitle="Explore some of our innovative AI projects across various industries."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="AI-Powered Healthcare Assistant"
              category="Healthcare"
              description="An intelligent system that helps healthcare providers analyze patient data and improve diagnosis accuracy."
              imageSrc="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0.1}
            />
            <ProjectCard
              title="Smart Retail Analytics Platform"
              category="Retail"
              description="AI-driven analytics solution that helps retailers optimize inventory and enhance customer experience."
              imageSrc="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0.2}
            />
            <ProjectCard
              title="Autonomous Drone Navigation"
              category="Robotics"
              description="Advanced computer vision system for autonomous drone navigation in complex environments."
              imageSrc="https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0.3}
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
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
              Ready to Accelerate Your AI Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Whether you're looking for innovative AI solutions or guidance on your AI career path, we're here to help you succeed.
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
                Contact Us Today
              </Link>
              <Link
                to="/services"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;