import React from 'react'
import { ProjectType } from '@/app/utils/types'
import { EnumLinkType } from '@/app/utils/enums'
import LiveLink from './LiveLink'

type Props = {
    project: ProjectType
}

const RightWorkDetails = ({ project }: Props) => {
    return (
        <div className="w-full xl:w-[80%] xl:h-[500px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project.num}
                </div>
                {/* project category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project.category}
                </h2>
                {/* project description */}
                <p className="text-white/60">{project.description}</p>

                {/* stack */}
                <ul className="flex flex-wrap gap-3">
                    {project.stack.map((item, index) => {
                        return (
                            <li key={index} className="text-xl text-accent">
                                {item.name}
                                {index !== project.stack.length - 1 && ','}
                            </li>
                        )
                    })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* buttons */}
                <div className="flex items-center gap-4">
                    {/* Live project button */}
                    {project.live && (
                        <LiveLink
                            type={EnumLinkType.Live}
                            link={project.live}
                        />
                    )}
                    {/* github project button */}
                    <LiveLink
                        type={EnumLinkType.Github}
                        link={project.github}
                    />
                </div>
            </div>
        </div>
    )
}

export default RightWorkDetails
