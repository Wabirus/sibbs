export interface Career {
    id: string;
    title: string;
    department: string;
    location: string;
    type: "Full-time" | "Part-time" | "Contract";
    experience: string;
    salary: string;
    description: string;
    requirements: string[];
    benefits: string[];
    postedDate: string;
}

export const careers: Career[] = [
    {
        id: "1",
        title: "Senior Real Estate Agent",
        department: "Sales",
        location: "Los Angeles, CA",
        type: "Full-time",
        experience: "5+ years",
        salary: "$80,000 – $150,000 + Commission",
        description:
            "We're looking for an experienced real estate agent to join our luxury property division. You'll work with high-net-worth clients and manage premium listings across the West Coast.",
        requirements: [
            "Active real estate license",
            "5+ years of luxury real estate experience",
            "Proven track record of $10M+ annual sales",
            "Strong network in the luxury market",
            "Excellent negotiation and communication skills",
        ],
        benefits: [
            "Competitive base salary + uncapped commission",
            "Premium listing assignments",
            "Marketing budget for each listing",
            "Health, dental, and vision insurance",
            "401(k) with company match",
        ],
        postedDate: "Feb 8, 2025",
    },
    {
        id: "2",
        title: "Marketing Manager",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        experience: "3+ years",
        salary: "$70,000 – $95,000",
        description:
            "Lead our digital marketing efforts across all channels. You'll drive brand awareness, generate qualified leads, and manage our content strategy for luxury real estate.",
        requirements: [
            "3+ years of digital marketing experience",
            "Experience in real estate or luxury brands preferred",
            "Proficiency with Google Analytics, Meta Ads, and CRM tools",
            "Strong copywriting and content strategy skills",
            "Data-driven mindset with A/B testing experience",
        ],
        benefits: [
            "Fully remote position",
            "Flexible working hours",
            "Annual marketing conference budget",
            "Health insurance",
            "Home office stipend",
        ],
        postedDate: "Feb 5, 2025",
    },
    {
        id: "3",
        title: "Property Photographer",
        department: "Creative",
        location: "New York, NY",
        type: "Contract",
        experience: "2+ years",
        salary: "$500 – $1,500 per shoot",
        description:
            "Capture stunning property photography and virtual tours for our luxury listings. You'll work with some of the most beautiful properties in NYC.",
        requirements: [
            "Professional portfolio of real estate photography",
            "Own professional camera and lighting equipment",
            "Experience with Matterport or similar 3D tour technology",
            "Drone photography certification (FAA Part 107)",
            "Post-processing skills (Lightroom, Photoshop)",
        ],
        benefits: [
            "Flexible schedule",
            "Access to premium properties",
            "Ongoing contract with steady work",
            "Equipment allowance",
            "Portfolio exposure on our platform",
        ],
        postedDate: "Feb 1, 2025",
    },
    {
        id: "4",
        title: "Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "3+ years",
        salary: "$100,000 – $140,000",
        description:
            "Build and maintain our property platform, including search features, CRM integrations, and client-facing applications. Work with a modern tech stack including Next.js and TypeScript.",
        requirements: [
            "3+ years of full-stack development experience",
            "Proficiency with React/Next.js and TypeScript",
            "Experience with PostgreSQL or similar databases",
            "API design and integration experience",
            "Understanding of CI/CD pipelines",
        ],
        benefits: [
            "Fully remote with async culture",
            "Latest MacBook Pro provided",
            "Annual learning budget ($3,000)",
            "Health, dental, and vision insurance",
            "4 weeks PTO + unlimited sick days",
        ],
        postedDate: "Jan 28, 2025",
    },
    {
        id: "5",
        title: "Client Success Manager",
        department: "Operations",
        location: "Miami, FL",
        type: "Full-time",
        experience: "2+ years",
        salary: "$55,000 – $75,000",
        description:
            "Be the primary point of contact for our clients throughout their property journey. Ensure smooth transactions and exceptional service from first contact to closing.",
        requirements: [
            "2+ years in client-facing roles",
            "Real estate knowledge preferred",
            "Exceptional communication and empathy",
            "CRM proficiency (Salesforce, HubSpot)",
            "Ability to handle multiple clients simultaneously",
        ],
        benefits: [
            "Beautiful Miami office",
            "Performance bonuses",
            "Professional development opportunities",
            "Health insurance",
            "Team retreats and social events",
        ],
        postedDate: "Jan 22, 2025",
    },
];

export const companyValues = [
    {
        title: "Integrity First",
        description:
            "We believe transparency builds trust. Every interaction, every transaction — honesty is non-negotiable.",
        icon: "shield",
    },
    {
        title: "Client Obsession",
        description:
            "Your dream home is our mission. We go above and beyond to understand your needs and exceed your expectations.",
        icon: "heart",
    },
    {
        title: "Innovation",
        description:
            "From virtual tours to AI-powered matching, we leverage cutting-edge technology to give you an edge in the market.",
        icon: "lightbulb",
    },
    {
        title: "Community Impact",
        description:
            "We invest in the communities we serve. Every sale contributes to local housing initiatives and education programs.",
        icon: "users",
    },
];

export const teamMembers = [
    {
        name: "Marcus Lee",
        role: "Founder & CEO",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        bio: "15+ years in luxury real estate. Previously VP at Sotheby's International.",
    },
    {
        name: "Sarah Chen",
        role: "Head of Sales",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
        bio: "Top-producing agent with $200M+ in career sales across three continents.",
    },
    {
        name: "David Okonkwo",
        role: "Head of Marketing",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        bio: "Former brand director at Compass. Expert in luxury real estate marketing.",
    },
    {
        name: "Elena Rodriguez",
        role: "Chief Technology Officer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        bio: "Built PropTech platforms serving 50K+ agents. Stanford CS graduate.",
    },
];

export const companyStats = [
    { value: "2,500+", label: "Properties Sold" },
    { value: "$1.8B", label: "Total Sales Volume" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years of Experience" },
];
