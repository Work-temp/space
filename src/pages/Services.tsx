import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, LightbulbIcon, RocketIcon, GraduationCap, Users, Briefcase, School, LineChart } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Services - SPADE Solutions';
  }, []);

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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Comprehensive AI solutions and educational services to help you succeed in the AI-driven world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="What We Offer"
            subtitle="Our core services span technology development and education, providing a complete ecosystem for AI innovation and career growth."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="AI Solutions"
              description="Custom AI solutions designed to address specific business challenges and improve operational efficiency. We develop tailored algorithms and models that solve real-world problems."
              delay={0.1}
            />
            <ServiceCard
              icon={LightbulbIcon}
              title="Career Guidance"
              description="Expert guidance to help you navigate the rapidly evolving AI landscape and build a successful career. Get personalized advice from industry professionals on skills, education, and job opportunities."
              delay={0.2}
            />
            <ServiceCard
              icon={RocketIcon}
              title="AI Projects"
              description="Collaborative AI project development to bring innovative ideas to life with cutting-edge technology. From concept to implementation, we help you create impactful AI applications."
              delay={0.3}
            />
            <ServiceCard
              icon={GraduationCap}
              title="AI Internships"
              description="Hands-on learning opportunities for students and professionals looking to gain practical experience in AI. Work on real projects with experienced mentors in a supportive environment."
              delay={0.4}
            />
            <ServiceCard
              icon={Briefcase}
              title="Consulting Services"
              description="Strategic AI consulting to help businesses identify opportunities and implement effective AI solutions. We analyze your needs and recommend the best approach for integrating AI into your operations."
              delay={0.5}
            />
            <ServiceCard
              icon={School}
              title="AI Workshops & Training"
              description="Interactive workshops and training programs to develop AI skills and knowledge for individuals and corporate teams. Learn from experts in practical, hands-on sessions."
              delay={0.6}
            />
            <ServiceCard
              icon={LineChart}
              title="AI Implementation"
              description="End-to-end implementation services to seamlessly integrate AI solutions into your existing systems and workflows, ensuring minimal disruption and maximum benefit."
              delay={0.7}
            />
            <ServiceCard
              icon={Users}
              title="Team Building"
              description="Recruit and build high-performing AI teams with our talent acquisition and team development services. We help you find the right people and create effective collaborative structures."
              delay={0.8}
            />
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Service Process"
            subtitle="We follow a structured approach to ensure that every project delivers maximum value."
            center
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:text-right"
                >
                  <div className="bg-white p-6 rounded-lg shadow-custom mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-3 text-primary">1. Discovery</h3>
                    <p className="text-gray-600">
                      We begin by understanding your needs, goals, and challenges through in-depth consultations and research.
                    </p>
                  </div>
                </motion.div>
                <div className="hidden md:block"></div>
                {/* Timeline marker for step 1 */}
                <div className="hidden md:block absolute left-1/2 top-[10%] w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 shadow-md"></div>
              </div>

              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-custom">
                    <h3 className="text-xl font-semibold mb-3 text-primary">2. Planning & Strategy</h3>
                    <p className="text-gray-600">
                      We develop a tailored strategy and roadmap, identifying the most effective solutions and approaches for your specific situation.
                    </p>
                  </div>
                </motion.div>
                {/* Timeline marker for step 2 */}
                <div className="hidden md:block absolute left-1/2 top-[35%] w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 shadow-md"></div>
              </div>

              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:text-right"
                >
                  <div className="bg-white p-6 rounded-lg shadow-custom mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-3 text-primary">3. Implementation</h3>
                    <p className="text-gray-600">
                      Our expert team executes the plan with precision, developing solutions, providing guidance, or delivering educational content.
                    </p>
                  </div>
                </motion.div>
                <div className="hidden md:block"></div>
                {/* Timeline marker for step 3 */}
                <div className="hidden md:block absolute left-1/2 top-[60%] w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 shadow-md"></div>
              </div>

              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-custom">
                    <h3 className="text-xl font-semibold mb-3 text-primary">4. Review & Optimization</h3>
                    <p className="text-gray-600">
                      We continuously monitor results, gather feedback, and make improvements to ensure optimal outcomes and client satisfaction.
                    </p>
                  </div>
                </motion.div>
                {/* Timeline marker for step 4 */}
                <div className="hidden md:block absolute left-1/2 top-[85%] w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it – hear from those who have experienced our services firsthand."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The AI solution developed by SPADE transformed our customer service operations. Their team's expertise and hands-on approach made the implementation process smooth and effective."
              </p>
              <div>
                <p className="font-semibold">Vikram Mehta</p>
                <p className="text-gray-500 text-sm">CTO, TechInnovate</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The career guidance I received from SPADE was invaluable. Their personalized approach helped me identify the right AI specialization and path forward. I landed my dream job within months."
              </p>
              <div>
                <p className="font-semibold">Ananya Singh</p>
                <p className="text-gray-500 text-sm">Data Scientist, Global Analytics</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The internship program at SPADE provided real-world experience that was impossible to get elsewhere. The mentorship was exceptional, and it prepared me perfectly for my AI career."
              </p>
              <div>
                <p className="font-semibold">Rahul Sharma</p>
                <p className="text-gray-500 text-sm">ML Engineer, StartupX</p>
              </div>
            </motion.div>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Contact us today to discuss your needs and discover how our services can help you achieve your AI goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;