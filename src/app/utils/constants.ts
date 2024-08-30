import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
export const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
]

export const stats = [
    {
        num: 2,
        text: 'Years of experience',
    },
    {
        num: 6,
        text: 'Projects completed',
    },
    {
        num: 8,
        text: 'Technologies mastered',
    },
    {
        num: 500,
        text: 'code commits',
    },
]

export const services = [
    {
        num: '01',
        title: 'Web & Mobile Development',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        href: '',
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        href: '',
    },
    {
        num: '03',
        title: 'Backend Development',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        href: '',
    },
    {
        num: '04',
        title: 'AWS Experience',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        href: '',
    },
]

export const about = {
    title: 'Aboute me',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Mohamed Kabha',
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+972) 0556612423',
        },
        {
            fieldName: 'Experience',
            fieldValue: '2 years',
        },
        {
            fieldName: 'Email',
            fieldValue: 'mkabha54@gmail.com',
        },
        {
            fieldName: 'Address',
            fieldValue: 'Tel Aviv, Israel',
        },
    ],
}

export const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    items: [
        {
            company: 'Tel Aviv University',
            position: 'Python Tutor',
            duration: 'Nov 2023 - Present',
        },
        {
            company: 'Spetz Texh ltd',
            position: 'Full Stack Engineer',
            duration: 'Jul 2021 - Aug 2023',
        },
    ],
}

export const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    items: [
        {
            institution: 'Tel Aviv University',
            degree: 'Management of Technology and Information Systems',
            duration: 'Nov 2023 - Present',
        },
        {
            institution: 'Ben-Gurion University',
            degree: 'Computer Science',
            duration: 'Sep 2019 - Sep 2022',
        },
        {
            institution: 'Moveo Group',
            degree: 'React Native Mobile development',
            duration: 'Apr 2023 - June 2023',
        },
        {
            institution: 'Appleseeds',
            degree: 'AWS re/Start',
            duration: 'May 2024 - Nov 2024',
        },
    ],
}

export const skills = {
    title: 'My skills',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    skillList: [
        {
            icon: FaHtml5,
            name: 'html 5',
        },
        {
            icon: FaCss3,
            name: 'css 3',
        },
        {
            icon: FaJs,
            name: 'javascript',
        },
        {
            icon: FaReact,
            name: 'react.js',
        },
        {
            icon: SiTailwindcss,
            name: 'Tailwind',
        },
        {
            icon: SiNextdotjs,
            name: 'next.js',
        },
        {
            icon: FaNodeJs,
            name: 'node.js',
        },
        {
            icon: FaFigma,
            name: 'figma',
        },
    ],
}
