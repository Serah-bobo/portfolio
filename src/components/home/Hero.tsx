import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../shared/Button';
import Container from '../shared/Container';
import { Variants } from "framer-motion";
import SocialIcons from '../shared/SocialIcons';

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
                    {/* Left Content */}
                    <div className="flex-1">
                        <motion.p
                            variants={itemVariants}
                            className="text-body-lg text-[rgb(var(--text-secondary))] mb-4"
                        >
                            👋 Hi, I'm
                        </motion.p>

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
                            I build full-stack applications that solve real problems.
                            Specializing in React, TypeScript, and Node.js with a focus
                            on performance and user experience.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <Button
                                size="lg"
                                href="/projects"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                }
                            >
                                View Projects
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                href="/contact"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                }
                            >
                                Contact Me
                            </Button>
                        </motion.div>

                        {/* Social Links */}
                        <SocialIcons />
                    </div>

                    {/* Right Content - 3D  */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 hidden md:block"
                    >
                        <div className="relative w-full h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] rounded-2xl opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[rgb(var(--text-secondary))]">✨ 3D Element Coming Soon ✨</span>
                            </div>
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
                <div className="flex flex-col items-center gap-2">
                    <span className="text-body-sm text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--accent-primary))] transition-colors">
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-6 h-10 border-2 border-[rgb(var(--text-secondary))] rounded-full flex justify-center"
                    >
                        <motion.div className="w-1 h-2 bg-[rgb(var(--accent-primary))] rounded-full mt-2" />
                    </motion.div>
                </div>
            </motion.button>

            <motion.div
                className="absolute top-20 left-10 w-20 h-20 border border-[rgb(var(--accent-primary))] rounded-lg opacity-20"
                animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <motion.div
                className="absolute bottom-20 right-10 w-32 h-32 bg-[rgb(var(--accent-primary))] rounded-full opacity-10"
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </section>
    );
};

export default Hero;