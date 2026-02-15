import Armenian		    from '../assets/home/Armenia.png';
import English		    from "../assets/home/United-kingdom.png";
import German		    from "../assets/home/Germany.png";
import Russia		    from "../assets/home/Russia.png";
import Philosopher		from "../assets/project/Philosopher.png"
import Inception		from "../assets/project/Inception.png"
import Get_next_line	from "../assets/project/Get_next_line.png"
import Minishell		from "../assets/project/Minishell.png"
import Minitalk			from "../assets/project/Minitalk.png"
import NetPractice		from "../assets/project/Netproctice.png"
import Web_server		from "../assets/project/WebServer.png"
import Push_swap		from "../assets/project/push_swap.png"
import Cub3D			from "../assets/project/Cub3D.png"
import Solong			from "../assets/project/soLong.png"
import Ft_printf		from "../assets/project/Ft_printf.png"

import Modul00	        from "../assets/project/Modul00.jpg"
import Modul01          from "../assets/project/Modul01.jpg"
import Modul02          from "../assets/project/Modul02.jpg"
import Modul03		    from "../assets/project/Modul03.jpg"
import Modul04			from "../assets/project/Modul04.jpg"
import Modul05		    from "../assets/project/Modul05.jpg"
import Modul06		    from "../assets/project/Modul06.jpg"
import Modul07		    from "../assets/project/Modul07.jpg"
import Modul08			from "../assets/project/Modul08.jpg"
import Modul09			from "../assets/project/Modul09.jpg"

const Data = {
    languages  : [
    {icon: Armenian, alt: 'Armenian'},
    {icon: English, alt: 'English'},
    {icon: German, alt: 'German'},
    {icon: Russia, alt: 'Russia'}
    ],
    projects : {
        low_level :[
                    {
                        title: 'Web Server',
                        desc: 'A custom web server implemented in C and C++, handling HTTP requests, responses, and basic networking concepts.',
                        image: Web_server,
                        tags: ['C', 'C++', 'Networking', 'HTTP'],
                        href: "https://github.com/GhRafayel/webserv",
                    },
                    {
                        title: 'Minishell',
                        desc: 'A Unix bash implemented in C, supporting command execution, pipes, redirections, environment variables, and built-in commands.',
                        image: Minishell,
                        tags: ['C', 'Unix', 'Shell', 'Processes'],
                        href: "https://github.com/GhRafayel/minishell",
                    },
                    {
                        title: 'Philosophers',
                        desc: "A project focused on solving shared data problems using threads, mutexes, and synchronization techniques.",
                        image: Philosopher,
                        tags: ['C', 'Threads', 'Mutex', 'Concurrency'],
                        href: "https://github.com/GhRafayel/Philosopher",
                    },
                    {
                        title: 'Cub3D',
                        desc: 'A 3D raycasting game engine developed in C, inspired by Wolfenstein 3D, using MiniLibX for rendering.',
                        image: Cub3D,
                        tags: ['C', 'Raycasting', 'Game Engine', 'MiniLibX'],
                        href: "https://github.com/GhRafayel/Cub_3d",
                    },
                    {
                        title: 'So_long',
                        desc: 'A small 2D game written in C using the MiniLibX library, featuring player movement, collectibles, and map validation.',
                        image: Solong,
                        tags: ['C', 'Game Dev', 'MiniLibX', '2D'],
                        href: "https://github.com/GhRafayel/so_long",
                    },
                    {
                        title: 'Push_swap',
                        desc: 'A sorting algorithm project in C focused on stack manipulation and optimizing the number of operations.',
                        image: Push_swap,
                        tags: ['C', 'Algorithms', 'Data Structures', 'Stacks'],
                        href: 'https://github.com/GhRafayel/push_swap',
                    },	
                    {
                        title: 'Minitalk',
                        desc: 'A client-server communication project in C using UNIX signals to transmit data bit by bit between processes.',
                        image: Minitalk,
                        tags: ['C', 'Signals', 'IPC', 'Processes'],
                        href: "https://github.com/GhRafayel/minitalk",
                    },
                    {
                        title: 'Get Next Line',
                        desc: 'A C function that reads a file line by line from a file descriptor, handling memory management efficiently.',
                        image: Get_next_line,
                        tags: ['C', 'Memory Management', 'File Descriptors'],
                        href: "https://github.com/GhRafayel/Get_next_line",
                        
                    },
                    {
                        title: 'Ft_printf',
                        desc: 'A C function that replicates the behavior of printf, handling formatted output with various specifiers.',
                        image: Ft_printf,
                        tags: ['C', 'Formatting', 'Output'],
                        href: 'https://github.com/GhRafayel/Ft_printf',
                    },
                    {
                        title: 'NetPractice',
                        desc: 'A networking project focused on IP addressing, subnetting, and understanding TCP/IP communication.',
                        image: NetPractice,
                        tags: ['Networking', 'TCP/IP', 'Subnetting'],
                        href: "#",
                    },
                    {
                        title: 'Inception',
                        desc: 'A DevOps project using Docker to build and manage multiple services with containers and Docker Compose.',
                        image: Inception,
                        tags: ['Docker', 'Docker Compose', 'DevOps'],
                        href: "https://github.com/GhRafayel/Inception",
                    },
               
                   {
                        title: 'CPP Module 00',
                        desc: 'Introduction to C++ basics: namespaces, classes, member functions, stdio streams, initialization lists, static members, and fundamental object-oriented programming concepts.',
                        image: Modul00,
                        tags: ['C++', 'OOP Basics', 'Classes'],
                        href: 'https://github.com/yourusername/cpp-module-00',
                    },
                    {
                        title: 'CPP Module 01',
                        desc: 'Memory allocation, pointers to members, references, switch statements, and dynamic allocation in C++. Focus on understanding stack vs heap and proper resource management.',
                        image: Modul01,
                        tags: ['C++', 'Memory Management', 'Pointers'],
                        href: 'https://github.com/yourusername/cpp-module-01',
                    },
                    {
                        title: 'CPP Module 02',
                        desc: 'Ad-hoc polymorphism and operator overloading. Implementation of canonical class form (Orthodox Canonical Form) including constructors, copy constructor, assignment operator, and destructor.',
                        image: Modul02,
                        tags: ['C++', 'Operator Overloading', 'Canonical Form'],
                        href: 'https://github.com/yourusername/cpp-module-02',
                    },
                    {
                        title: 'CPP Module 03',
                        desc: 'Inheritance in C++. Explores base and derived classes, constructor/destructor chaining, and introduction to polymorphism.',
                        image: Modul03,
                        tags: ['C++', 'Inheritance', 'Polymorphism'],
                        href: 'https://github.com/yourusername/cpp-module-03',
                    },
                    {
                        title: 'CPP Module 04',
                        desc: 'Subtype polymorphism, abstract classes, interfaces, and deep copies. Focus on virtual functions and dynamic binding.',
                        image: Modul04,
                        tags: ['C++', 'Abstract Classes', 'Virtual Functions'],
                        href: 'https://github.com/yourusername/cpp-module-04',
                    },
                    {
                        title: 'CPP Module 05',
                        desc: 'Exception handling in C++. Designing classes with custom exceptions and managing error handling using try/catch mechanisms.',
                        image: Modul05,
                        tags: ['C++', 'Exceptions', 'Error Handling'],
                        href: 'https://github.com/yourusername/cpp-module-05',
                    },
                    {
                        title: 'CPP Module 06',
                        desc: 'C++ casting operators: static_cast, dynamic_cast, reinterpret_cast, and const_cast. Focus on type conversion and runtime type identification (RTTI).',
                        image: Modul06,
                        tags: ['C++', 'Casting', 'RTTI'],
                        href: 'https://github.com/yourusername/cpp-module-06',
                    },
                    {
                        title: 'CPP Module 07',
                        desc: 'C++ templates and generic programming. Implementation of function templates and class templates to achieve compile-time polymorphism.',
                        image: Modul07,
                        tags: ['C++', 'Templates', 'Generic Programming'],
                        href: 'https://github.com/yourusername/cpp-module-07',
                    },
                    {
                        title: 'CPP Module 08',
                        desc: 'Standard Template Library (STL) containers and algorithms. Work with containers such as vector, list, and map, including iterators and algorithm usage.',
                        image: Modul08,
                        tags: ['C++', 'STL', 'Containers'],
                        href: 'https://github.com/yourusername/cpp-module-08',
                    },
                    {
                        title: 'CPP Module 09',
                        desc: 'desc: Study and comparison of STL containers with focus on memory management and performance. Implementation of the Ford–Johnson (Merge-Insertion) sorting algorithm using the Jacobsthal sequence, analyzing container efficiency for insertion and access operations.',
                        image: Modul09,
                        tags: ['C++', 'STL', 'Algorithms'],
                        href: 'https://github.com/yourusername/cpp-module-09',
                    },

                ],
        web: []
    }

};

export default Data;