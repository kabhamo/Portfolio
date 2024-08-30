'use client'

import ExperienceCard from '../components/ResumeCards/ExperienceCard'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/app/components/ui/tabs'
import { motion } from 'framer-motion'
import EducationCard from '@/app/components/ResumeCards/EducationCard'
import SkillsCard from '@/app/components/ResumeCards/SkillsCard'
import AboutCard from '@/app/components/ResumeCards/AboutCard'
import Image from 'next/image'

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education </TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="aboutme">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <ExperienceCard />
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <EducationCard />
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <SkillsCard />
                        </TabsContent>

                        {/* aboutme */}
                        <TabsContent
                            value="aboutme"
                            className="w-full text-cetnter xl:text-left"
                        >
                            <AboutCard />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume
