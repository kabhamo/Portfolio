import React from 'react'
import { skills } from '@/app/utils/constants'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui/tooltip'
type Props = {}

const SkillsCard = (props: Props) => {
    return (
        <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
                    {skills.description}
                </p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => {
                    return (
                        <li key={index}>
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                            {<skill.icon />}
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="capitalize">
                                            {skill.name}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SkillsCard
