import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/course-details.css';

const CourseDetails = () => {
    const { courseId } = useParams();
    
    // This would typically come from an API or database
    const courseDetails = {
        'vue': {
            id: 'vue',
            title: 'Vue.js Development',
            description: 'Learn Vue.js, a progressive JavaScript framework for building user interfaces. This course covers everything from basic concepts to advanced features.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
            duration: '8 weeks',
            level: 'Intermediate',
            prerequisites: ['HTML', 'CSS', 'JavaScript'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Introduction to Vue.js',
                'Vue.js Fundamentals',
                'Components and Props',
                'Directives and Events',
                'Computed Properties and Watchers',
                'Vue Router',
                'Vuex State Management',
                'Advanced Vue.js Features',
                'Testing Vue.js Applications',
                'Deployment and Best Practices'
            ],
            instructor: {
                // name: 'John Doe',
                // bio: 'Senior Frontend Developer with 8+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/1.jpg'
            },
            price: '$199',
            rating: 4.8,
            reviews: 125
        },
        'angular': {
            id: 'angular',
            title: 'Angular Development',
            description: 'Master Angular, a powerful framework for building dynamic web applications. Learn TypeScript, components, services, and more.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
            duration: '10 weeks',
            level: 'Intermediate',
            prerequisites: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Introduction to Angular',
                'TypeScript Fundamentals',
                'Components and Templates',
                'Directives and Pipes',
                'Services and Dependency Injection',
                'Routing and Navigation',
                'Forms and Validation',
                'HTTP and Observables',
                'State Management',
                'Testing and Deployment'
            ],
            instructor: {
                // name: 'Jane Smith',
                // bio: 'Angular Expert with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/1.jpg'
            },
            price: '$249',
            rating: 4.7,
            reviews: 98
        },
        'nextjs': {
            id: 'nextjs',
            title: 'Next.js Development',
            description: 'Learn Next.js, the React framework for production. Build server-rendered applications with ease.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            duration: '8 weeks',
            level: 'Intermediate',
            prerequisites: ['React', 'JavaScript'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Next.js Fundamentals',
                'Pages and Routing',
                'Data Fetching',
                'API Routes',
                'Authentication',
                'Deployment',
                'Performance Optimization',
                'Advanced Features'
            ],
            instructor: {
                // name: 'Mike Johnson',
                // bio: 'Full Stack Developer with 7+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/2.jpg'
            },
            price: '$179',
            rating: 4.9,
            reviews: 87
        },
        'tailwind': {
            id: 'tailwind',
            title: 'Tailwind CSS',
            description: 'Master utility-first CSS framework for rapid UI development.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            duration: '5 weeks',
            level: 'Beginner',
            prerequisites: ['HTML', 'CSS'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Introduction to Tailwind CSS',
                'Utility-First Approach',
                'Responsive Design',
                'Customization',
                'Best Practices',
                'Advanced Techniques'
            ],
            instructor: {
                // name: 'Sarah Wilson',
                // bio: 'UI/UX Designer with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/2.jpg'
            },
            price: '$99',
            rating: 4.8,
            reviews: 65
        },
        'bootstrap': {
            id: 'bootstrap',
            title: 'Bootstrap Development',
            description: 'Learn Bootstrap framework for creating responsive and mobile-first websites.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
            duration: '4 weeks',
            level: 'Beginner',
            prerequisites: ['HTML', 'CSS'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Bootstrap Fundamentals',
                'Grid System',
                'Components',
                'Utilities',
                'Customization',
                'Best Practices'
            ],
            instructor: {
                // name: 'David Brown',
                // bio: 'Frontend Developer with 4+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/3.jpg'
            },
            price: '$79',
            rating: 4.6,
            reviews: 72
        },
        'nodejs': {
            id: 'nodejs',
            title: 'Node.js Development',
            description: 'Learn Node.js for building scalable server-side applications with JavaScript.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            duration: '10 weeks',
            level: 'Intermediate',
            prerequisites: ['JavaScript'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Node.js Fundamentals',
                'Modules and NPM',
                'Asynchronous Programming',
                'File System Operations',
                'HTTP and Web Servers',
                'Express.js Framework',
                'Database Integration',
                'Authentication',
                'Deployment',
                'Performance Optimization'
            ],
            instructor: {
                // name: 'Alex Turner',
                // bio: 'Backend Developer with 8+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/4.jpg'
            },
            price: '$229',
            rating: 4.7,
            reviews: 112
        },
        'express': {
            id: 'express',
            title: 'Express.js Development',
            description: 'Master Express.js framework for building robust web applications and APIs.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            duration: '8 weeks',
            level: 'Intermediate',
            prerequisites: ['Node.js', 'JavaScript'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Express.js Fundamentals',
                'Routing',
                'Middleware',
                'Error Handling',
                'Template Engines',
                'API Development',
                'Authentication',
                'Security',
                'Testing',
                'Deployment'
            ],
            instructor: {
                // name: 'Emily Davis',
                // bio: 'Full Stack Developer with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/3.jpg'
            },
            price: '$199',
            rating: 4.8,
            reviews: 89
        },
        'php': {
            id: 'php',
            title: 'PHP Development',
            description: 'Learn PHP for server-side web development and dynamic website creation.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
            duration: '10 weeks',
            level: 'Beginner to Intermediate',
            prerequisites: ['HTML', 'CSS'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'PHP Fundamentals',
                'Variables and Data Types',
                'Control Structures',
                'Functions',
                'Arrays',
                'Forms and User Input',
                'File Handling',
                'Database Integration',
                'Security',
                'Best Practices'
            ],
            instructor: {
                // name: 'Robert Wilson',
                // bio: 'PHP Developer with 7+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/5.jpg'
            },
            price: '$179',
            rating: 4.6,
            reviews: 78
        },
        'django': {
            id: 'django',
            title: 'Django Development',
            description: 'Master Django framework for building secure and maintainable web applications.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
            duration: '12 weeks',
            level: 'Intermediate',
            prerequisites: ['Python'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Django Fundamentals',
                'Models and Databases',
                'Views and Templates',
                'Forms',
                'Authentication',
                'REST Framework',
                'Testing',
                'Deployment',
                'Security',
                'Performance Optimization'
            ],
            instructor: {
                // name: 'Lisa Anderson',
                // bio: 'Python Developer with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/4.jpg'
            },
            price: '$249',
            rating: 4.9,
            reviews: 95
        },
        'flask': {
            id: 'flask',
            title: 'Flask Development',
            description: 'Learn Flask framework for building lightweight and flexible web applications.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
            duration: '8 weeks',
            level: 'Intermediate',
            prerequisites: ['Python'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Flask Fundamentals',
                'Routing',
                'Templates',
                'Forms',
                'Database Integration',
                'Authentication',
                'REST APIs',
                'Testing',
                'Deployment'
            ],
            instructor: {
                // name: 'Tom Harris',
                // bio: 'Python Developer with 4+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/6.jpg'
            },
            price: '$179',
            rating: 4.7,
            reviews: 82
        },
        'rails': {
            id: 'rails',
            title: 'Ruby on Rails Development',
            description: 'Master Ruby on Rails framework for rapid web application development.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original.svg',
            duration: '12 weeks',
            level: 'Intermediate',
            prerequisites: ['Ruby'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Rails Fundamentals',
                'Models and Databases',
                'Controllers and Views',
                'Forms',
                'Authentication',
                'API Development',
                'Testing',
                'Deployment',
                'Security',
                'Performance Optimization'
            ],
            instructor: {
                // name: 'Rachel Green',
                // bio: 'Ruby Developer with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/5.jpg'
            },
            price: '$229',
            rating: 4.8,
            reviews: 76
        },
        'aspnet': {
            id: 'aspnet',
            title: 'ASP.NET Development',
            description: 'Learn ASP.NET for building enterprise-grade web applications.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
            duration: '12 weeks',
            level: 'Intermediate',
            prerequisites: ['C#'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'ASP.NET Fundamentals',
                'MVC Architecture',
                'Entity Framework',
                'Authentication',
                'Web API',
                'Testing',
                'Deployment',
                'Security',
                'Performance Optimization'
            ],
            instructor: {
                // name: 'Mark Taylor',
                // bio: '.NET Developer with 8+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/7.jpg'
            },
            price: '$249',
            rating: 4.7,
            reviews: 88
        },
        'mysql': {
            id: 'mysql',
            title: 'MySQL Database',
            description: 'Learn MySQL for relational database management and optimization.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            duration: '8 weeks',
            level: 'Beginner to Intermediate',
            prerequisites: ['Basic SQL'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'MySQL Fundamentals',
                'Database Design',
                'SQL Queries',
                'Indexes and Optimization',
                'Stored Procedures',
                'Triggers',
                'Security',
                'Backup and Recovery'
            ],
            instructor: {
                // name: 'James Wilson',
                // bio: 'Database Administrator with 7+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/8.jpg'
            },
            price: '$149',
            rating: 4.8,
            reviews: 92
        },
        'postgresql': {
            id: 'postgresql',
            title: 'PostgreSQL Database',
            description: 'Master PostgreSQL for advanced database management and features.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            duration: '8 weeks',
            level: 'Intermediate',
            prerequisites: ['Basic SQL'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'PostgreSQL Fundamentals',
                'Advanced SQL',
                'Indexes and Performance',
                'Stored Procedures',
                'Triggers',
                'Partitioning',
                'Replication',
                'Security'
            ],
            instructor: {
                // name: 'Sophie Brown',
                // bio: 'Database Expert with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/6.jpg'
            },
            price: '$179',
            rating: 4.9,
            reviews: 78
        },
        'mongodb': {
            id: 'mongodb',
            title: 'MongoDB Database',
            description: 'Learn MongoDB for NoSQL database management and document storage.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            duration: '8 weeks',
            level: 'Intermediate',
            prerequisites: ['Basic Database Concepts'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'MongoDB Fundamentals',
                'Document Design',
                'CRUD Operations',
                'Indexing',
                'Aggregation',
                'Replication',
                'Sharding',
                'Security'
            ],
            instructor: {
                // name: 'Kevin Lee',
                // bio: 'NoSQL Expert with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/9.jpg'
            },
            price: '$169',
            rating: 4.7,
            reviews: 85
        },
        'firebase': {
            id: 'firebase',
            title: 'Firebase Development',
            description: 'Master Firebase for real-time database and backend services.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
            duration: '6 weeks',
            level: 'Intermediate',
            prerequisites: ['JavaScript'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Firebase Fundamentals',
                'Authentication',
                'Realtime Database',
                'Cloud Firestore',
                'Cloud Functions',
                'Hosting',
                'Storage',
                'Security Rules'
            ],
            instructor: {
                // name: 'Emma Davis',
                // bio: 'Mobile Developer with 4+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/7.jpg'
            },
            price: '$149',
            rating: 4.8,
            reviews: 67
        },
        'oracle': {
            id: 'oracle',
            title: 'Oracle Database',
            description: 'Learn Oracle Database for enterprise-level database management.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
            duration: '10 weeks',
            level: 'Advanced',
            prerequisites: ['SQL', 'Database Concepts'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Oracle Fundamentals',
                'Advanced SQL',
                'PL/SQL Programming',
                'Performance Tuning',
                'Backup and Recovery',
                'Security',
                'High Availability',
                'Cloud Integration'
            ],
            instructor: {
                // name: 'Michael Chen',
                // bio: 'Oracle DBA with 10+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/10.jpg'
            },
            price: '$299',
            rating: 4.9,
            reviews: 45
        },
        'sqlite': {
            id: 'sqlite',
            title: 'SQLite Development',
            description: 'Master SQLite for lightweight database management.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
            duration: '4 weeks',
            level: 'Beginner',
            prerequisites: ['Basic SQL'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'SQLite Fundamentals',
                'Database Design',
                'SQL Queries',
                'Transactions',
                'Performance',
                'Integration'
            ],
            instructor: {
                // name: 'Sarah Johnson',
                // bio: 'Database Developer with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/8.jpg'
            },
            price: '$99',
            rating: 4.7,
            reviews: 58
        },
        'redis': {
            id: 'redis',
            title: 'Redis Development',
            description: 'Learn Redis for in-memory data structure storage and caching.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
            duration: '6 weeks',
            level: 'Intermediate',
            prerequisites: ['Basic Database Concepts'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Redis Fundamentals',
                'Data Types',
                'Commands',
                'Persistence',
                'Replication',
                'Clustering',
                'Security',
                'Performance'
            ],
            instructor: {
                // name: 'David Kim',
                // bio: 'System Architect with 7+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/11.jpg'
            },
            price: '$129',
            rating: 4.8,
            reviews: 63
        },
        'aws': {
            id: 'aws',
            title: 'AWS Cloud Development',
            description: 'Master Amazon Web Services for cloud computing and infrastructure.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
            duration: '12 weeks',
            level: 'Intermediate to Advanced',
            prerequisites: ['Basic Cloud Concepts'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'AWS Fundamentals',
                'EC2 and VPC',
                'S3 and Storage',
                'RDS and Databases',
                'Lambda and Serverless',
                'CloudFormation',
                'Security and IAM',
                'Monitoring and Logging',
                'DevOps Practices',
                'Best Practices'
            ],
            instructor: {
                // name: 'Alex Rodriguez',
                // bio: 'Cloud Solutions Architect with 8+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/12.jpg'
            },
            price: '$299',
            rating: 4.9,
            reviews: 112
        },
        'gcp': {
            id: 'gcp',
            title: 'Google Cloud Development',
            description: 'Learn Google Cloud Platform for cloud computing and services.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
            duration: '10 weeks',
            level: 'Intermediate',
            prerequisites: ['Basic Cloud Concepts'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'GCP Fundamentals',
                'Compute Engine',
                'Cloud Storage',
                'Cloud SQL',
                'Cloud Functions',
                'Kubernetes Engine',
                'Security and IAM',
                'Monitoring',
                'DevOps Practices'
            ],
            instructor: {
                // name: 'Laura Martinez',
                // bio: 'Cloud Engineer with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/9.jpg'
            },
            price: '$279',
            rating: 4.8,
            reviews: 89
        },
        'azure': {
            id: 'azure',
            title: 'Microsoft Azure Development',
            description: 'Master Microsoft Azure for cloud computing and enterprise solutions.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
            duration: '10 weeks',
            level: 'Intermediate',
            prerequisites: ['Basic Cloud Concepts'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Azure Fundamentals',
                'Virtual Machines',
                'Storage',
                'Databases',
                'Functions',
                'Kubernetes Service',
                'Security and Identity',
                'Monitoring',
                'DevOps Practices'
            ],
            instructor: {
                // name: 'Chris Wilson',
                // bio: 'Azure Solutions Architect with 7+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/13.jpg'
            },
            price: '$289',
            rating: 4.7,
            reviews: 94
        },
        'docker': {
            id: 'docker',
            title: 'Docker Development',
            description: 'Learn Docker for containerization and deployment.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            duration: '6 weeks',
            level: 'Intermediate',
            prerequisites: ['Basic Linux Commands'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Docker Fundamentals',
                'Containers',
                'Images',
                'Networking',
                'Volumes',
                'Docker Compose',
                'Docker Swarm',
                'Best Practices'
            ],
            instructor: {
                // name: 'Daniel Brown',
                // bio: 'DevOps Engineer with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/14.jpg'
            },
            price: '$149',
            rating: 4.8,
            reviews: 76
        },
        'kubernetes': {
            id: 'kubernetes',
            title: 'Kubernetes Development',
            description: 'Master Kubernetes for container orchestration and management.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
            duration: '8 weeks',
            level: 'Advanced',
            prerequisites: ['Docker'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Kubernetes Fundamentals',
                'Pods and Services',
                'Deployments',
                'ConfigMaps and Secrets',
                'Storage',
                'Networking',
                'Security',
                'Monitoring',
                'Best Practices'
            ],
            instructor: {
                // name: 'Sophia Lee',
                // bio: 'DevOps Expert with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/10.jpg'
            },
            price: '$249',
            rating: 4.9,
            reviews: 68
        },
        'terraform': {
            id: 'terrafom',
            title: 'Terraform Development',
            description: 'Learn Terraform for infrastructure as code and automation.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
            duration: '6 weeks',
            level: 'Intermediate',
            prerequisites: ['Basic Cloud Concepts'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Terraform Fundamentals',
                'HCL Language',
                'Resources',
                'Modules',
                'State Management',
                'Workspaces',
                'Best Practices',
                'Advanced Features'
            ],
            instructor: {
                // name: 'Ryan Taylor',
                // bio: 'Infrastructure Engineer with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/15.jpg'
            },
            price: '$179',
            rating: 4.7,
            reviews: 59
        },
        'reactnative': {
            id: 'reactnative',
            title: 'React Native Development',
            description: 'Learn React Native for cross-platform mobile app development.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            duration: '10 weeks',
            level: 'Intermediate',
            prerequisites: ['React', 'JavaScript'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'React Native Fundamentals',
                'Components',
                'Navigation',
                'State Management',
                'APIs and Networking',
                'Native Features',
                'Testing',
                'Deployment',
                'Performance'
            ],
            instructor: {
                // name: 'Jessica Chen',
                // bio: 'Mobile Developer with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/11.jpg'
            },
            price: '$229',
            rating: 4.8,
            reviews: 87
        },
        'flutter': {
            id: 'flutter',
            title: 'Flutter Development',
            description: 'Master Flutter for beautiful and fast cross-platform mobile apps.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
            duration: '12 weeks',
            level: 'Intermediate',
            prerequisites: ['Dart', 'Basic Programming'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Flutter Fundamentals',
                'Widgets',
                'State Management',
                'Navigation',
                'APIs and Networking',
                'Local Storage',
                'Testing',
                'Deployment',
                'Performance'
            ],
            instructor: {
                // name: 'Michael Brown',
                // bio: 'Mobile Developer with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/16.jpg'
            },
            price: '$249',
            rating: 4.9,
            reviews: 92
        },
        'ethicalhacking': {
            id: 'ethicalhacking',
            title: 'Ethical Hacking',
            description: 'Learn ethical hacking techniques and security best practices.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            duration: '16 weeks',
            level: 'Advanced',
            prerequisites: ['Networking', 'Linux'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Ethical Hacking Fundamentals',
                'Networking Security',
                'System Hacking',
                'Web Application Security',
                'Wireless Security',
                'Cryptography',
                'Penetration Testing',
                'Security Tools',
                'Legal and Ethical Aspects'
            ],
            instructor: {
                // name: 'David White',
                // bio: 'Security Expert with 10+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/17.jpg'
            },
            price: '$399',
            rating: 4.9,
            reviews: 78
        },
        'networksecurity': {
            id: 'networksecurity',
            title: 'Network Security',
            description: 'Master network security principles and implementation.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            duration: '12 weeks',
            level: 'Advanced',
            prerequisites: ['Networking'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Network Security Fundamentals',
                'Firewalls',
                'Intrusion Detection',
                'VPNs',
                'Wireless Security',
                'Network Monitoring',
                'Security Policies',
                'Incident Response'
            ],
            instructor: {
                // name: 'Sarah Thompson',
                // bio: 'Network Security Specialist with 8+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/12.jpg'
            },
            price: '$349',
            rating: 4.8,
            reviews: 65
        },
        'websecurity': {
            id: 'websecurity',
            title: 'Web Application Security',
            description: 'Learn web application security and penetration testing.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            duration: '10 weeks',
            level: 'Advanced',
            prerequisites: ['Web Development'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Web Security Fundamentals',
                'OWASP Top 10',
                'Authentication Security',
                'Session Management',
                'Input Validation',
                'Security Headers',
                'Penetration Testing',
                'Secure Coding'
            ],
            instructor: {
                // name: 'James Wilson',
                // bio: 'Security Consultant with 7+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/18.jpg'
            },
            price: '$299',
            rating: 4.7,
            reviews: 72
        },
        'machinelearning': {
            id: 'machinelearning',
            title: 'Machine Learning',
            description: 'Learn machine learning algorithms and implementation.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            duration: '16 weeks',
            level: 'Advanced',
            prerequisites: ['Python', 'Mathematics'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Machine Learning Fundamentals',
                'Supervised Learning',
                'Unsupervised Learning',
                'Neural Networks',
                'Deep Learning',
                'Natural Language Processing',
                'Computer Vision',
                'Model Deployment'
            ],
            instructor: {
                // name: 'Dr. Emily Chen',
                // bio: 'Data Scientist with 8+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/13.jpg'
            },
            price: '$399',
            rating: 4.9,
            reviews: 95
        },
        'deeplearning': {
            id: 'deeplearning',
            title: 'Deep Learning',
            description: 'Master deep learning concepts and neural networks.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
            duration: '16 weeks',
            level: 'Advanced',
            prerequisites: ['Machine Learning', 'Python'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Deep Learning Fundamentals',
                'Neural Networks',
                'Convolutional Networks',
                'Recurrent Networks',
                'Transfer Learning',
                'GANs',
                'Natural Language Processing',
                'Computer Vision'
            ],
            instructor: {
                // name: 'Dr. Michael Brown',
                // bio: 'AI Researcher with 10+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/19.jpg'
            },
            price: '$449',
            rating: 4.9,
            reviews: 82
        },
        'dataanalysis': {
            id: 'dataanalysis',
            title: 'Data Analysis',
            description: 'Learn data analysis with Python and visualization techniques.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            duration: '12 weeks',
            level: 'Intermediate',
            prerequisites: ['Python'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Data Analysis Fundamentals',
                'Pandas',
                'NumPy',
                'Data Visualization',
                'Statistical Analysis',
                'Time Series Analysis',
                'Data Cleaning',
                'Reporting'
            ],
            instructor: {
                // name: 'Lisa Anderson',
                // bio: 'Data Analyst with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/14.jpg'
            },
            price: '$279',
            rating: 4.8,
            reviews: 88
        },
        'git': {
            id: 'GitHub',
            title: 'Git & GitHub',
            description: 'Master version control with Git and GitHub collaboration.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            duration: '4 weeks',
            level: 'Beginner',
            prerequisites: ['Basic Programming'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Git Fundamentals',
                'Basic Commands',
                'Branching',
                'Merging',
                'GitHub',
                'Collaboration',
                'Best Practices'
            ],
            instructor: {
                // name: 'Tom Wilson',
                // bio: 'DevOps Engineer with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            price: '$99',
            rating: 4.7,
            reviews: 102
        },
        'agile': {
            id: 'agile',
            title: 'Agile & Scrum',
            description: 'Learn Agile methodologies and Scrum framework.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
            duration: '6 weeks',
            level: 'Beginner',
            prerequisites: ['Basic Project Management'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Agile Fundamentals',
                'Scrum Framework',
                'Roles and Responsibilities',
                'Sprints',
                'User Stories',
                'Estimation',
                'Retrospectives',
                'Tools and Practices'
            ],
            instructor: {
                // name: 'Rachel Smith',
                // bio: 'Agile Coach with 7+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/15.jpg'
            },
            price: '$149',
            rating: 4.8,
            reviews: 76
        },
        'unity': {
            id: 'unity',
            title: 'Unity Game Development',
            description: 'Learn Unity game development with C#.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
            duration: '16 weeks',
            level: 'Intermediate',
            prerequisites: ['C#'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Unity Fundamentals',
                'Game Objects',
                'Scripting',
                'Physics',
                'Animation',
                'UI',
                'Audio',
                'Publishing'
            ],
            instructor: {
                // name: 'John Davis',
                // bio: 'Game Developer with 8+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/21.jpg'
            },
            price: '$299',
            rating: 4.8,
            reviews: 89
        },
        'unreal': {
            id: 'unreal',
            title: 'Unreal Engine Development',
            description: 'Master Unreal Engine for game development.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg',
            duration: '16 weeks',
            level: 'Advanced',
            prerequisites: ['C++'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Unreal Engine Fundamentals',
                'Blueprints',
                'C++ Programming',
                'Materials',
                'Lighting',
                'Animation',
                'AI',
                'Publishing'
            ],
            instructor: {
                // name: 'Mike Johnson',
                // bio: 'Game Developer with 10+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            price: '$349',
            rating: 4.9,
            reviews: 75
        },
        'godot': {
            id: 'godot',
            title: 'Godot Game Development',
            description: 'Learn Godot game engine for 2D and 3D game development.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg',
            duration: '12 weeks',
            level: 'Intermediate',
            prerequisites: ['Basic Programming'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Godot Fundamentals',
                'Nodes and Scenes',
                'Scripting',
                '2D Game Development',
                '3D Game Development',
                'Physics',
                'Animation',
                'Publishing'
            ],
            instructor: {
                // name: 'Sarah Wilson',
                // bio: 'Game Developer with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/16.jpg'
            },
            price: '$199',
            rating: 4.7,
            reviews: 68
        },
        'wordpress': {
            id: 'wordpress',
            title: 'WordPress Development',
            description: 'Learn WordPress for website development and management.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
            duration: '6 weeks',
            level: 'Beginner',
            prerequisites: ['Basic Web Concepts'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'WordPress Fundamentals',
                'Themes',
                'Plugins',
                'Customization',
                'Security',
                'Performance',
                'SEO',
                'Maintenance'
            ],
            instructor: {
                // name: 'David Brown',
                // bio: 'WordPress Developer with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/23.jpg'
            },
            price: '$129',
            rating: 4.6,
            reviews: 92
        },
        'blockchain': {
            id: 'blockchain',
            title: 'Blockchain Development',
            description: 'Learn blockchain fundamentals and development.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
            duration: '12 weeks',
            level: 'Intermediate',
            prerequisites: ['JavaScript', 'Basic Cryptography'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'Blockchain Fundamentals',
                'Smart Contracts',
                'Solidity',
                'DApps',
                'Web3.js',
                'Security',
                'Testing',
                'Deployment'
            ],
            instructor: {
                // name: 'Alex Chen',
                // bio: 'Blockchain Developer with 5+ years of experience',
                // image: 'https://randomuser.me/api/portraits/men/24.jpg'
            },
            price: '$299',
            rating: 4.8,
            reviews: 78
        },
        'iot': {
            id: ' iot',
            title: 'IoT Development',
            description: 'Learn Internet of Things development and implementation.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
            duration: '12 weeks',
            level: 'Intermediate',
            prerequisites: ['Python', 'Basic Electronics'],
            status: [
                'We are sorry, this course is currently under development. Our team is working hard to bring it to you soon!In the meantime, feel free to explore similar content on other platforms. Click the "Learn More" button below to read detailed documents and tutorials from trusted sources.'
            ],
            syllabus: [
                'IoT Fundamentals',
                'Sensors and Actuators',
                'Microcontrollers',
                'Communication Protocols',
                'Cloud Integration',
                'Security',
                'Data Analysis',
                'Project Development'
            ],
            instructor: {
                // name: 'Emily Wilson',
                // bio: 'IoT Engineer with 6+ years of experience',
                // image: 'https://randomuser.me/api/portraits/women/17.jpg'
            },
            price: '$249',
            rating: 4.7,
            reviews: 65
        }
    };

     // Links to your separately designed detailed pages
    //  const CoursePages = {
    //     vue: '/vue-detailed',     
    //     angular: '/angular-detailed',
    //     react: '/react-detailed',
    //     unity: '/unity-detailed',
    //     unreal: '/unreal-detailed',
    //     godot: '/godot-detailed',
    //     wordpress: '/wordpress-detailed',
    //     blockchain: '/blockchain-detailed',
    //     iot: '/iot-detailed'
    // };

    const course = courseDetails[courseId];

    if (!course) {
        return (
            <div className="not-found">
                <h2>Course not found</h2>
                <Link to="/courses">Back to Courses</Link>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <PageHeader title={course.title} path="/courses" name="Courses" />
            <div className="course-details-page">
                <div className="container">
                    <div className="course-header">
                        <div className="course-image">
                            <img src={course.image} alt={course.title} />
                        </div>
                        <div className="course-info">
                            <h1>{course.title}</h1>
                            <div className="course-meta">
                                <span className="duration">Duration: {course.duration}</span>
                                <span className="level">Level: {course.level}</span>
                                <span className="rating">Rating: {course.rating} ({course.reviews} reviews)</span>
                            </div>
                            <p className="description">{course.description}</p>
                            <div className="price">${course.price}</div>









                            
                            {/* <Link to={`/courses/${course.id}.jsx`} target="_blank" rel="noopener noreferrer" className="enroll-button">Enroll Now</Link> */}
                            {/* Updated Button with External Link */}
                        <a href={
                            courseId === 'vue' ? 'https://vuejs.org/' :
                            courseId === 'angular' ? 'https://angular.dev/' :
                            courseId === 'react' ? 'https://reactjs.org/' :
                            courseId === 'nextjs' ? 'https://nextjs.org/' :
                            courseId === 'tailwind' ? 'https://tailwindcss.com/' :
                            courseId === 'bootstrap' ? 'https://getbootstrap.com/' :
                            courseId === 'nodejs' ? 'https://nodejs.org/' :
                            courseId === 'express' ? 'https://expressjs.com/' :
                            courseId === 'php' ? 'https://www.php.net/' :
                            courseId === 'django' ? 'https://www.djangoproject.com/' :
                            courseId === 'flask' ? 'https://flask.palletsprojects.com/' :
                            courseId === 'rails' ? 'https://rubyonrails.org/' :
                            courseId === 'aspnet' ? 'https://dotnet.microsoft.com/en-us/apps/aspnet' :
                            courseId === 'mysql' ? 'https://dev.mysql.com/doc/' :
                            courseId === 'postgresql' ? 'https://www.postgresql.org/docs/' :
                            courseId === 'mongodb' ? 'https://www.mongodb.com/docs/' :
                            courseId === 'firebase' ? 'https://firebase.google.com/docs' :
                            courseId === 'oracle' ? 'https://docs.oracle.com/en/database/' :
                            courseId === 'sqlite' ? 'https://www.sqlite.org/docs.html' :
                            courseId === 'redis' ? 'https://redis.io/docs' :
                            courseId === 'aws' ? 'https://docs.aws.amazon.com/' :
                            courseId === 'gcp' ? 'https://cloud.google.com/docs' :
                            courseId === 'azure' ? 'https://learn.microsoft.com/en-us/azure/' :
                            courseId === 'docker' ? 'https://docs.docker.com/' :
                            courseId === 'kubernetes' ? 'https://kubernetes.io/docs/' :
                            courseId === 'terraform' ? 'https://developer.hashicorp.com/terraform/docs' :
                            courseId === 'reactnative' ? 'https://reactnative.dev/' :
                            courseId === 'flutter' ? 'https://flutter.dev/' :
                            courseId === 'ethicalhacking' ? 'https://www.eccouncil.org/' :
                            courseId === 'networksecurity' ? 'https://www.cisco.com/c/en/us/products/security/index.html' :
                            courseId === 'websecurity' ? 'https://owasp.org/' :
                            courseId === 'machinelearning' ? 'https://scikit-learn.org/stable/documentation.html' :
                            courseId === 'deeplearning' ? 'https://www.tensorflow.org/learn' :
                            courseId === 'dataanalysis' ? 'https://pandas.pydata.org/docs/' :
                            courseId === 'git' ? 'https://git-scm.com/doc' :
                            courseId === 'agile' ? 'https://www.agilealliance.org/agile101/' :
                            courseId === 'unity' ? 'https://docs.unity3d.com/' :
                            courseId === 'unreal' ? 'https://docs.unrealengine.com/' :
                            courseId === 'godot' ? 'https://docs.godotengine.org/' :
                            courseId === 'wordpress' ? 'https://learn.wordpress.org/' :
                            courseId === 'blockchain' ? 'https://ethereum.org/en/developers/docs/' :
                            courseId === 'iot' ? 'https://learn.microsoft.com/en-us/azure/iot-fundamentals/' :
                            '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="enroll-button"
                        >
                            Learn More
                        </a>







                        </div>
                    </div>

                    <div className="course-content">
                        <div className="syllabus-section">
                            <div className="syllabus-section">
                            <h2>Course Status</h2>
                            <ul className="syllabus-list">
                                {course.status.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </div>

                            <h2>Course Syllabus</h2>
                            <ul className="syllabus-list">
                                {course.syllabus.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="prerequisites-section">
                            <h2>Prerequisites</h2>
                            <ul className="prerequisites-list">
                                {course.prerequisites.map((prereq, index) => (
                                    <li key={index}>{prereq}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="instructor-section">
                            <h2>Instructor</h2>
                            <div className="instructor-profile">
                                <img src={course.instructor.image} alt={course.instructor.name} />
                                <div className="instructor-info">
                                    <h3>{course.instructor.name}</h3>
                                    <p>{course.instructor.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
};

export default CourseDetails; 