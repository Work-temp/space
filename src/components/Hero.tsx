import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink = '/services',
  imageSrc = 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imageAlt = 'AI Technology',
  overlay = true,
}) => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70"></div>
        )}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {ctaText && (
              <Link
                to={ctaLink}
                className="btn bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md transition-all duration-300"
              >
                {ctaText}
              </Link>
            )}

            {secondaryCtaText && (
              <Link
                to={secondaryCtaLink}
                className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-md transition-all duration-300 flex items-center"
              >
                {secondaryCtaText}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;