import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'

import { AiOutlineDotNet } from 'react-icons/ai'
import { BiLogoPostgresql, BiLogoMongodb, BiLogoAws } from 'react-icons/bi'
import { TbBrandRedux } from 'react-icons/tb'
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkedAlt,
    FaGithub,
    FaLinkedin,
    FaDocker,
} from 'react-icons/fa'

import {
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
    SiCsharp,
    SiMysql,
} from 'react-icons/si'

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

export const homePageData = {
    title: 'Full Stack Engineer',
    hello: "Hello I'm",
    name: 'Mohamed Kabha',
    introduction:
        'Innovative Full Stack Engineer with over 2 years of experience. Proficient in Python, JavaScript and C#, with expertise in Web and Mobile development. Seeking a dynamic and challenging role.',
}

export const socials = [
    {
        icon: FaGithub,
        path: 'https://github.com/kabhamo',
    },
    {
        icon: FaLinkedin,
        path: 'https://www.linkedin.com/in/mohamed-kabha/',
    },
]

export const stats = [
    {
        num: 2,
        text: 'Years of experience',
    },
    {
        num: 10,
        text: 'Projects completed',
    },
    {
        num: 12,
        text: 'Technologies mastered',
    },
    {
        num: 641,
        text: 'code commits',
    },
]

export const services = [
    {
        num: '01',
        title: 'Web & Mobile Development',
        description:
            'With a strong foundation in both web and mobile development, I bring over 2 years of experience in creating dynamic, user-friendly applications.  I specialize in building responsive, high-performance applications that deliver seamless user experiences on both web and mobile platforms.',
        href: '',
    },
    {
        num: '02',
        title: 'Full-Stack Development',
        description:
            'I offer a comprehensive skill set that covers the entire development process. I excel in using modern frameworks like React and Next.js for building interactive user interfaces, while also having robust experience with Node.js and ASP.NET for developing scalable and secure backend systems. With hands-on experience in deploying and maintaining applications on AWS services.',
        href: '',
    },
    {
        num: '03',
        title: 'Backend Development',
        description:
            'My experience includes working with ASP.NET Core, Node.js, and implementing Clean Architecture principles to build maintainable and high-performance applications. I have a proven track record of developing critical infrastructure, such as a push-notification system serving over 29,000 subscriptions, and managing large-scale data with Microsoft SQL Server.',
        href: '',
    },
    {
        num: '04',
        title: 'Amazon Web Services',
        description:
            'My practical knowledge in AWS services like RDS, EC2, S3, and Amplify further enhances my ability to deliver backend solutions that are both powerful and cloud-optimized.',
        href: '',
    },
]

export const about = {
    title: 'Aboute me',
    description:
        'Innovative Full Stack Engineer with over 2 years of experience. Proficient in Python, JavaScript and C#, with expertise in Web and Mobile development. Seeking a dynamic and challenging role.',
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
            fieldValue: 'Einstein St 65, Tel Aviv-Yafo, Israel',
        },
    ],
}

export const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description:
        'I am driven by a passion for continuous learning and a strong desire to work on high-scalable products and distributed systems. I am eager to contribute to projects that challenge me to innovate and deliver solutions that are robust, efficient, and future-proof.',
    items: [
        {
            company: 'Tel Aviv University',
            position: 'Python Tutor',
            duration: 'Nov 2023 - Present',
        },
        {
            company: 'Spetz Tech',
            position: 'Full Stack Engineer',
            duration: 'Jul 2021 - Aug 2023',
        },
    ],
}

export const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description:
        'I gained a solid foundation in algorithms, data structures, and programming languages. My academic journey has equipped me with both the theoretical knowledge and practical skills necessary to excel in the fast-paced world of technology.',
    items: [
        {
            institution: 'Tel Aviv University',
            degree: 'MSc in Management of Technology and Information Systems',
            duration: 'Nov 2023 - Present',
        },
        {
            institution: 'Ben-Gurion University',
            degree: 'BSc in Computer Science',
            duration: 'Sep 2019 - Sep 2022',
        },
        {
            institution: 'Appleseeds',
            degree: 'AWS re/Start',
            duration: 'May 2024 - Nov 2024',
        },
        {
            institution: 'Moveo Group',
            degree: 'React Native Mobile development',
            duration: 'Apr 2023 - June 2023',
        },
    ],
}

export const skills = {
    title: 'My skills',
    description:
        'I possess a diverse skill set that spans front-end and back-end development for building robust backend systems, ensuring optimal performance and scalability.',
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
            icon: SiTypescript,
            name: 'typescript',
        },
        {
            icon: AiOutlineDotNet,
            name: 'ASP.NET',
        },
        {
            icon: SiCsharp,
            name: 'C#',
        },
        {
            icon: SiMysql,
            name: 'MySQL',
        },
        {
            icon: BiLogoPostgresql,
            name: 'PostgreSQL',
        },
        {
            icon: BiLogoMongodb,
            name: 'MongoDB',
        },
        {
            icon: TbBrandRedux,
            name: 'Redux',
        },
        {
            icon: BiLogoAws,
            name: 'AWS',
        },
        {
            icon: FaDocker,
            name: 'Docker',
        },
    ],
}

export const projects = [
    {
        num: '01',
        category: 'MKSTOCK',
        description:
            'Inventory Management Dashboard is a robust, full-featured web application designed to help businesses manage their inventory efficiently. The dashboard provides real-time data visualization, intuitive management of inventory items, and seamless integration with AWS for scalability and reliability.',
        stack: [
            { name: 'TypeScript' },
            { name: 'Next.js' },
            { name: 'Tailwind CSS' },
            { name: 'Redux Toolkit' },
            { name: 'Node.js' },
            { name: 'Prisma' },
            { name: 'Amplify' },
            { name: 'API Gateway' },
            { name: 'EC2' },
            { name: 'RDS' },
            { name: 'S3' },
        ],
        image: '/assets/work/thumb1.png',
        live: 'https://main.dedg1mqcj1stq.amplifyapp.com/',
        github: 'https://github.com/kabhamo/inverntory-management-project/tree/main',
    },
    {
        num: '02',
        category: 'Dispatcher',
        description:
            'React Native application that provides live top and breaking news headlines based on the users location. Leveraging the Google News API, the app curates articles from various news sources and blogs across the web, offering users timely updates on current events.',
        stack: [
            { name: 'TypeScript' },
            { name: 'React Native' },
            { name: 'Firestore' },
            { name: 'Redux Toolkit' },
            { name: 'React Navigation' },
            { name: 'Local Device Storage' },
        ],
        image: '/assets/work/thumb2.png',
        live: '',
        github: 'https://github.com/kabhamo/DispatcherKabha',
    },
]

export const info = [
    {
        icon: FaPhoneAlt,
        title: 'phone',
        describtion: '(+972) 0556612423',
    },
    {
        icon: FaEnvelope,
        title: 'Email',
        describtion: 'mkabha54@gmail.com',
    },
    {
        icon: FaMapMarkedAlt,
        title: 'Address',
        describtion: 'Tel Aviv, Israel',
    },
]
