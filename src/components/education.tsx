'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, ExternalLink, BookOpen } from 'lucide-react';

interface EducationItem {
    id: string;
    institution: string;
    degree: string;
    field?: string;
    location: string;
    period: string;
    type: 'university' | 'study-abroad' | 'certification';
    description?: string;
    achievements?: string[];
    gpa?: string;
    relevantCourses?: string[];
    status: 'completed' | 'in-progress' | 'expected';
    logo?: string;
    url?: string;
}

interface CertificationItem {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    url?: string;
    skills: string[];
    description?: string;
}

const education: EducationItem[] = [
    {
        id: '1',
        institution: 'New York University Abu Dhabi',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        location: 'Abu Dhabi, UAE',
        period: '2022 - 2026',
        type: 'university',
        status: 'in-progress',
        description: 'Pursuing a Computer Science degree with focus on AI, software engineering, and data science. Minors in Applied Maths and Natural Sciences.',
        gpa: '3.8/4.0',
        relevantCourses: [
            'Data Structures',
            'Algorithms',
            'Machine Learning',
            'Software Engineering',
            'Database Systems',
            'Computer Networks',
            'Operating Systems',
            'Computer System Organization',
        ],
        url: 'https://nyuad.nyu.edu/'
    },
    {
        id: '2',
        institution: 'New York University',
        degree: 'Study Away Program',
        field: 'Computer Science',
        location: 'New York, NY',
        period: 'Fall 2024',
        type: 'study-abroad',
        status: 'completed',
        description: 'Semester abroad at NYU\'s main campus in New York City, taking advanced computer science courses and exploring the tech industry through internships and networking events. Completed graduate level Database Systems and Data Communnication and Networks courses in College of Arts and Science',
        relevantCourses: [
            'Database Systems',
            'Data Communication and Networks',
            'Computer System Organization',
            'Projects in Programming and Data Science'
        ],
        url: 'https://www.nyu.edu/'
    }
];

const certifications: CertificationItem[] = [
    {
        id: '1',
        name: 'Fundamentals of Machine Learning in Healthcare',
        issuer: 'Stanford University',
        date: 'March 2025',
        credentialId: 'AWS-CCP-2024',
        skills: ['Machine Learning', 'Healthcare'],
        url: 'https://coursera.org/share/7220f5cf44dfae56e78d2801afc5dc1f'
    },
    
];

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'in-progress':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'expected':
                return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'university':
                return <GraduationCap className="h-5 w-5" />;
            case 'study-abroad':
                return <BookOpen className="h-5 w-5" />;
            case 'certification':
                return <Award className="h-5 w-5" />;
            default:
                return <GraduationCap className="h-5 w-5" />;
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-8 space-y-12">
            {/* Education Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
                >
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    Education
                </motion.h2>

                <div className="grid gap-6">
                    {education.map((edu) => (
                        <motion.div key={edu.id} variants={itemVariants}>
                            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 hover:border-l-purple-500">
                                 <CardHeader>
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <CardTitle className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                                {getTypeIcon(edu.type)}
                                                {edu.degree}
                                                {edu.field && <span className="text-muted-foreground">in {edu.field}</span>}
                                            </CardTitle>
                                            <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                                                <span className="font-medium text-lg">{edu.institution}</span>
                                                {edu.url && (
                                                    <a href={edu.url} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="h-3 w-3 opacity-60 hover:opacity-100 transition-opacity" />
                                                    </a>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{edu.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="h-3 w-3" />
                                                    <span>{edu.location}</span>
                                                </div>
                                                {edu.gpa && (
                                                    <div className="text-foreground font-medium">
                                                        GPA: {edu.gpa}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <Badge className={`${getStatusColor(edu.status)} border-0 text-xs font-medium px-3 py-1`}>
                                            {edu.status === 'in-progress' ? 'In Progress' :
                                                edu.status === 'completed' ? 'Completed' : 'Expected'}
                                        </Badge>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {edu.description && (
                                        <p className="text-muted-foreground leading-relaxed">
                                            {edu.description}
                                        </p>
                                    )}

                                    {edu.achievements && edu.achievements.length > 0 && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                                            <ul className="space-y-1">
                                                {edu.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-green-500 font-bold mt-1">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.relevantCourses.map((course, idx) => (
                                                    <Badge
                                                        key={idx}
                                                        variant="secondary"
                                                        className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground"
                                                    >
                                                        {course}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
                >
                    <Award className="h-6 w-6 text-purple-600" />
                    Certifications
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <motion.div key={cert.id} variants={itemVariants}>
                            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-purple-600 transition-colors flex items-center gap-2">
                                        <Award className="h-4 w-4" />
                                        {cert.name}
                                    </CardTitle>
                                    <div className="text-sm text-muted-foreground">
                                        <span className="font-medium">{cert.issuer}</span>
                                        <span className="mx-2">•</span>
                                        <span>{cert.date}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-3">
                                    {cert.description && (
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {cert.description}
                                        </p>
                                    )}

                                    {cert.credentialId && (
                                        <div className="text-xs text-muted-foreground">
                                            <span className="font-medium">Credential ID:</span> {cert.credentialId}
                                        </div>
                                    )}

                                    <div>
                                        <h4 className="text-sm font-semibold text-foreground mb-2">Skills:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {cert.skills.map((skill, idx) => (
                                                <Badge
                                                    key={idx}
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {cert.url && (
                                        <div className="pt-2">
                                            <a
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                                            >
                                                <ExternalLink className="h-3 w-3" />
                                                View Certificate
                                            </a>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Education;
