import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Recycle, Award, Leaf, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero-image.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const missionCards = [
    {
      icon: Recycle,
      title: 'Reduce Textile Waste',
      description: 'Join the movement to reduce textile waste and extend the life of clothes through mindful swapping.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Fashion',
      description: 'Promote sustainable fashion practices by choosing to swap instead of buying new.',
    },
    {
      icon: Users,
      title: 'Community of Exchange',
      description: 'Be part of a growing community of mindful fashion enthusiasts who value sustainability.',
    },
    {
      icon: Heart,
      title: 'Local & Ethical',
      description: 'Support local artisans and ethical fashion practices through our platform.',
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: 'Upload an Item',
      description: 'List your gently used clothing items with photos and details.',
    },
    {
      number: 2,
      title: 'Earn Points',
      description: 'Receive points for each item you upload based on its value.',
    },
    {
      number: 3,
      title: 'Swap Items',
      description: 'Browse and swap items using your earned points.',
    },
    {
      number: 4,
      title: 'Keep the Cycle',
      description: 'Receive your new items and continue the sustainable cycle.',
    },
  ];

  return (
    <div className="min-h-screen bg-darker-surface">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src={heroImage}
          alt="Sustainable Fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            ReWear - Redefining Fashion, The Sustainable Way
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl"
          >
            Join India's growing community of mindful swappers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/register" className="inline-flex items-center justify-center px-6 py-3 bg-green-400 text-black font-medium rounded-lg hover:bg-green-500 transition">
              Start Swapping
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionCards.map((card, index) => (
            <motion.div
              key={card.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400/10 mb-4">
                  <card.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">How ReWear Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-400 text-white font-bold">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="container mx-auto px-4 py-16 bg-darker-surface">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-4xl font-bold text-white mb-2">1,200+</h3>
              <p className="text-sm text-muted-foreground">Items Swapped</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-4xl font-bold text-white mb-2">300+</h3>
              <p className="text-sm text-muted-foreground">KG Waste Saved</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-4xl font-bold text-white mb-2">4.8</h3>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">"ReWear has completely changed the way I think about fashion. It's amazing to see how we can make a difference by simply swapping clothes instead of buying new ones."</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Sarita</h3>
                    <p className="text-sm text-muted-foreground">Fashion Enthusiast</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
