import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, BookOpen, UserPlus, 
  MessageCircle, ShoppingBag, ChevronDown, 
  ChevronUp, CheckCircle, MapPin, DollarSign 
} from 'lucide-react';

// ---const LOGO_URL = "https://ibb.co.com/7NzGWH5R"; Assets & Data ---
// Replace this URL with the actual Netrokona Bridge image path
const HERO_IMAGE = "https://raw.githubusercontent.com/limonsaha5569-star/Tutor-Verse-Netrakona/main/image_9f823a.jpg"; 

const FAQ_DATA = [
  {
    question: "What is Tutorverse Netrakona?",
    answer: "A platform connecting students with verified tutors in Netrokona."
  },
  {
    question: "How do you verify tutors?",
    answer: "We verify NID/Student IDs of all tutors to ensure safety and quality."
  },
  {
    question: "Is registration free?",
    answer: "Initial registration is free for all tutors to join the network."
  },
  {
    question: "How do I receive my products?",
    answer: "We provide home delivery within Netrokona city limits."
  }
];

const SHOP_PRODUCTS = [
  { id: 1, name: "Class 10 Math Notes", price: 150, type: "Handwritten Notes", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Physics Guide Vol 1", price: 350, type: "Book", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Chemistry Lab Manual", price: 200, type: "Handwritten Notes", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80" },
];

// --- Components ---

const Navbar = ({ cartCount, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Find a Tutor', id: 'tutor' },
    { name: 'Join as Tutor', id: 'join' },
    { name: 'Study Shop', id: 'shop' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <span className="text-slate-900 font-bold text-xl">T</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wider">TUTORVERSE <span className="text-cyan-400">NETRAKONA</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => setView(link.id)}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button className="relative p-2 text-cyan-400 hover:text-white transition-colors">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-cyan-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-cyan-500/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => { setView(link.id); setIsOpen(false); }}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ setView }) => (
  <div className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img src={https://ibb.co.com/7NzGWH5R} alt="Netrokona Bridge" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Connecting Students with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Right Tutors</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          The premier educational platform in Netrokona. Find verified tutors, buy study materials, and elevate your academic journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setView('tutor')}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            Find a Tutor
          </button>
          <button 
            onClick={() => setView('shop')}
            className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold rounded-full transition-all"
          >
            Visit Study Shop
          </button>
        </div>
      </motion.div>
    </div>
  </div>
);

const TutorForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-8 bg-slate-800/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Join as a Tutor</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-cyan-400 text-sm font-bold mb-2">Full Name</label>
          <input type="text" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="e.g. Rahim Ahmed" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-cyan-400 text-sm font-bold mb-2">University / College</label>
            <select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none">
              <option>SUST (Sylhet University)</option>
              <option>Netrokona Govt College</option>
              <option>Netrokona College</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-cyan-400 text-sm font-bold mb-2">Subject Expertise</label>
            <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none" placeholder="e.g. Mathematics, Physics" />
          </div>
        </div>
        <div>
          <label className
