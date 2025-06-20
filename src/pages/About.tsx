import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Award, Users, Target } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TeamMember from '../components/TeamMember';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - SPADECODE Solutions';
  }, []);

  // Team members data
  // const teamMembers = [
  //   {
  //     name: 'Dr. Rajesh Kumar',
  //     role: 'Founder & CEO',
  //     bio: 'PhD in AI with 15+ years of experience in AI research and development. Former lead at a major tech company.',
  //     imageSrc: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     social: {
  //       linkedin: '#',
  //       twitter: '#',
  //     },
  //   },
  //   {
  //     name: 'Priya Sharma',
  //     role: 'Head of AI Research',
  //     bio: 'Specialist in machine learning algorithms with experience in developing cutting-edge AI solutions.',
  //     imageSrc: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     social: {
  //       linkedin: '#',
  //       github: '#',
  //     },
  //   },
  //   {
  //     name: 'Arun Patel',
  //     role: 'Director of Education',
  //     bio: 'Education expert with a passion for making AI accessible and developing effective learning programs.',
  //     imageSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     social: {
  //       linkedin: '#',
  //       twitter: '#',
  //     },
  //   },
  //   {
  //     name: 'Meera Desai',
  //     role: 'AI Solutions Architect',
  //     bio: 'Talented engineer specializing in designing custom AI solutions for complex business problems.',
  //     imageSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     social: {
  //       linkedin: '#',
  //       github: '#',
  //     },
  //   },
  // ];

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
              About SPADECODE Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              We're on a mission to make AI accessible, practical, and impactful for businesses and individuals alike.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="SPADECODE Solutions was founded in 2020 with a clear vision: to bridge the gap between AI innovation and practical application."
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-6">
                  Our journey began when a team of AI researchers and educators recognized a significant challenge: while AI technology was advancing rapidly, there was a growing gap between these innovations and their practical implementation in businesses and careers.
                </p>
                <p className="text-gray-600 mb-6">
                  We set out to create a company that not only develops cutting-edge AI solutions but also helps individuals navigate the evolving landscape of AI careers through education and guidance. Today, SPADECODE Solutions stands at the intersection of technology and education, providing comprehensive services that enable both businesses and individuals to thrive in the AI-driven future.
                </p>
                <p className="text-gray-600">
                  Based in Hyderabad's thriving tech hub, we continue to grow our team of experts who share our passion for making AI accessible and impactful for everyone.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SPADECODE Solutions Story"
                className="rounded-lg shadow-custom"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="These core principles guide everything we do at SPADECODE Solutions."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-custom text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new ideas and technologies to create solutions that push boundaries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-custom text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in everything we do, from code to customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-custom text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p className="text-gray-600">
                We believe in equipping people with the knowledge and tools they need to succeed in AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-custom text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">
                We focus on creating solutions and educational programs that deliver real, measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Our diverse team of experts brings together experience from various domains of AI and education."
            center
          />

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageSrc={member.imageSrc}
                social={member.social}
                delay={0.1 * index}
              />
            ))}
          </div>
        {/* </div> */}
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-xl text-white/80">AI Projects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <p className="text-xl text-white/80">Students Mentored</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-xl text-white/80">Team Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-xl text-white/80">Business Clients</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;