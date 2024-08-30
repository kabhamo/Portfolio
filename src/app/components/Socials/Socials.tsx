import Link from 'next/link'
import { socials } from '@/app/utils/constants'

type Props = {
    containerStyles: string
    iconStyles: string
}
const Socials = ({ containerStyles, iconStyles }: Props) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        target="_blank"
                        className={iconStyles}
                    >
                        {<item.icon size={24} />}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
