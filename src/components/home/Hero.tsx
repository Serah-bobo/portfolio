import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../shared/Button';
import Container from '../shared/Container';
import { Variants } from "framer-motion";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Full Stack Developer';

    // Typing effect for subtitle
    useEffect(() => {
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);

        return () => clearInterval(typingEffect);
    }, []);

    // Scroll indicator click handler
    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--bg-primary))] to-[rgb(var(--bg-secondary))]" />

            {/* Animated background particles/glow */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[rgb(var(--accent-primary))] opacity-20 blur-3xl" />
            </motion.div>

            <Container>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-12"
                >
                    {/* Left Content - Main Message */}
                    <div className="flex-1">
                        {/* Greeting */}
                        <motion.p
                            variants={itemVariants}
                            className="text-body-lg text-[rgb(var(--text-secondary))] mb-4"
                        >
                            👋 Hi, I'm
                        </motion.p>

                                            {/* Mobile Optimized Version - Light Bulb */}
                    <motion.div
                        variants={itemVariants}
                        className="md:hidden mt-8 flex justify-center"
                    >
                        <div className="relative w-32 h-32">
                            {/* Pulsing bulb background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-yellow-200 to-yellow-400 dark:from-yellow-600 dark:to-yellow-800 rounded-full opacity-90 blur-sm"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                            
                            {/* Bulb inner glow */}
                            <motion.div
                                className="absolute inset-2 bg-white dark:bg-yellow-200 rounded-full blur-md"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 0.5,
                                }}
                            />
                            
                            {/* Simple bulb base */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-[rgb(var(--bg-tertiary))] rounded-b" />
                            
                            {/* Floating icons (simplified for mobile) */}
                            <motion.div
                                className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl"
                                animate={{
                                    y: [-5, -15, -5],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}
                            >
                                💡
                            </motion.div>
                            
                            <motion.div
                                className="absolute -bottom-6 right-0 text-2xl"
                                animate={{
                                    y: [5, -5, 5],
                                    rotate: [5, -5, 5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                            >
                                ✨
                            </motion.div>

                            <motion.div
                                className="absolute -top-4 -left-4 text-2xl"
                                animate={{
                                    y: [-5, 5, -5],
                                    x: [-5, 5, -5],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                            >
                                ⚡
                            </motion.div>
                        </div>
                    </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-display-lg md:text-display-xl lg:text-display-2xl font-bold mb-4"
                        >
                            <span className="gradient-text">Serah Ndung'u</span>
                        </motion.h1>

                        {/* Typing effect subtitle */}
                        <motion.div
                            variants={itemVariants}
                            className="text-display-sm md:text-display-md text-[rgb(var(--text-secondary))] mb-6 h-12"
                        >
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-body-lg text-[rgb(var(--text-secondary))] max-w-2xl mb-8"
                        >
                            I transform complex problems into elegant, performant web applications. 
                            With a focus on user experience and clean code, I build solutions that make a difference.
                        </motion.p>


                        {/* Single CTA */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center md:justify-start"
                        >
                            <Button
                                size="lg"
                                href="/contact"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                }
                            >
                                Let's Talk
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Content - Light Bulb & Ideas (Desktop) */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 hidden md:block"
                    >
                        <div className="relative w-full h-[400px]">
                            {/* Light Bulb Base */}
                            <motion.div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Bulb Shape */}
                                <div className="relative">
                                    {/* Bulb Glass */}
                                    <motion.div
                                        className="w-32 h-32 bg-gradient-to-b from-yellow-200 to-yellow-400 dark:from-yellow-600 dark:to-yellow-800 rounded-full opacity-90 blur-sm"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                        }}
                                    />
                                    
                                    {/* Bulb Inner Glow */}
                                    <motion.div
                                        className="absolute inset-2 bg-white dark:bg-yellow-200 rounded-full blur-md"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    />

                                    {/* Bulb Base */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-[rgb(var(--bg-tertiary))] rounded-b-lg" />
                                </div>
                            </motion.div>

                            {/* Floating Ideas / Code Particles */}
                            {[
                                { icon: '💡', label: 'idea', x: 80, y: -40, delay: 0 },
                                { icon: '⚡', label: 'solve', x: -70, y: -60, delay: 0.5 },
                                { icon: '✨', label: 'create', x: 60, y: 50, delay: 1 },
                                { icon: '🚀', label: 'build', x: -50, y: 70, delay: 1.5 },
                                { icon: '🎯', label: 'focus', x: 40, y: -80, delay: 2 },
                                { icon: '🌟', label: 'innovate', x: -80, y: 30, delay: 2.5 },
                            ].map((particle, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-3xl"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        x: `calc(-50% + ${particle.x}px)`,
                                        y: `calc(-50% + ${particle.y}px)`,
                                    }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.8, 1, 0.8],
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        delay: particle.delay,
                                        repeat: Infinity,
                                    }}
                                >
                                    <span className="relative">
                                        {particle.icon}
                                        <motion.span
                                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap text-[rgb(var(--text-secondary))]"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{
                                                duration: 2,
                                                delay: particle.delay,
                                                repeat: Infinity,
                                            }}
                                        >
                                            {particle.label}
                                        </motion.span>
                                    </span>
                                </motion.div>
                            ))}

                            {/* Connection Lines - Ideas flowing to bulb */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="120"
                                    fill="none"
                                    stroke="rgb(var(--accent-primary))"
                                    strokeWidth="1"
                                    strokeDasharray="5,5"
                                    initial={{ opacity: 0.2 }}
                                    animate={{ 
                                        opacity: [0.2, 0.5, 0.2],
                                        rotate: 360,
                                    }}
                                    transition={{
                                        opacity: {
                                            duration: 2,
                                            repeat: Infinity,
                                        },
                                        rotate: {
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }
                                    }}
                                    style={{ 
                                        transformOrigin: 'center',
                                        x: '50%',
                                        y: '50%',
                                        translateX: '-50%',
                                        translateY: '-50%'
                                    }}
                                />
                            </svg>

                            {/* Small floating dots (inspiration) */}
                            {[...Array(12)].map((_, i) => {
                                const angle = (i * 30) * Math.PI / 180;
                                const radius = 140;
                                return (
                                    <motion.div
                                        key={`dot-${i}`}
                                        className="absolute w-1 h-1 bg-[rgb(var(--accent-primary))] rounded-full"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            x: `calc(-50% + ${Math.cos(angle) * radius}px)`,
                                            y: `calc(-50% + ${Math.sin(angle) * radius}px)`,
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 0.8, 0.3],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: i * 0.2,
                                            repeat: Infinity,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </motion.div>


                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll down"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-[rgb(var(--text-secondary))] rounded-full flex justify-center"
                >
                    <motion.div className="w-1 h-2 bg-[rgb(var(--accent-primary))] rounded-full mt-2" />
                </motion.div>
            </motion.button>
        </section>
    );
};

export default Hero;