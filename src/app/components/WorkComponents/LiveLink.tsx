import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '@/app/components/ui/tooltip'
import Link from 'next/link'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { EnumLinkType } from '@/app/utils/enums'

type Props = {
    type: EnumLinkType
    link: string
}

const LiveLink = ({ type, link }: Props) => {
    return (
        <Link
            href={link}
            target="_blank"
        >
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        {type === EnumLinkType.Live ? (
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        ) : (
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        )}
                    </TooltipTrigger>
                    <TooltipContent>
                        {type === EnumLinkType.Live ? (
                            <p>Live project</p>
                        ) : (
                            <p>Github repository</p>
                        )}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </Link>
    )
}

export default LiveLink
