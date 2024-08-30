'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper'
import 'swiper/css'

import { projects } from '../utils/constants'
import Image from 'next/image'
import WorkSliderBtns from '@/app/components/WorkComponents/WorkSliderBtns'
import RightWorkDetails from '@/app/components/WorkComponents/RightWorkDetails'
const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper: SwiperCore) => {
        // Get current slide index
        const currentIndex = swiper.activeIndex
        // Update project state based on current slide index
        setProject(projects[currentIndex])
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <RightWorkDetails project={project} />
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div
                                            className={`h-[460px] relative group flex justify-center items-center ${project.num !== '02' && 'bg-pink-50/20'}`}
                                        >
                                            {/* overlay */}
                                            <div
                                                className={`absolute top-0 bottom-0 w-full h-full ${project.num !== '02' && 'bg-black/10'} z-10`}
                                            ></div>
                                            {/* iamge */}
                                            {project.num !== '02' ? (
                                                <div className="w-full h-full">
                                                    <Image
                                                        src={project.image}
                                                        className="object-cover"
                                                        alt="thumb"
                                                        quality={100}
                                                        fill
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-[375px] h-[55vh]">
                                                    <Image
                                                        src={project.image}
                                                        alt="phone screen shot"
                                                        quality={100}
                                                        layout="fill"
                                                        objectFit="contain"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                iconStyles=""
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work
