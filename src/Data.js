/* eslint-disable react-refresh/only-export-components */
export const PROJECTS = [
    {
        id: "case-1",
        image: "/truckScaleIntegration.jpg",
        title: "Streamlining Truck Scale Integration Across Terminals",
        shorts: "Unifying TCP configurations across 11 truck scales to a single scalable architecture.",
        tags: ["Integration", "Optimization", "Workflow"],
        theme: "blue",
        context: "The port system integrates with multiple truck scales across terminals to capture weight data for billing and operational processing. Each scale required its own TCP configuration, creating a complex and fragmented setup.",
        problem: [
            "High setup and maintenance effort",
            "Increased risk of configuration errors",
            "Limited scalability when adding new terminals",
            "Delays in onboarding new equipment"
        ],
        role: [
            "Analyzed communication patterns between the system and scales",
            "Identified redundancy in TCP configuration logic",
            "Collaborated with technical teams to define a scalable solution",
            "Translated operational requirements into system behavior"
        ],
        solution: [
            "Dynamic handling of multiple scales through a single configuration layer",
            "Centralized management of communication settings",
            "Simplified onboarding of new devices"
        ],
        impact: [
            "Reduced configuration time by ~75%",
            "Improved system scalability across terminals",
            "Minimized configuration errors",
            "Simplified maintenance and support operations"
        ],
        takeaway: "Simplifying integration layers in complex systems significantly improves scalability and operational efficiency."
    },
    {
        id: "case-2",
        image: "/ExportReturns.jpg",
        title: "Designing a Reliable Export Returns Workflow",
        shorts: "Re-engineered functional flow to eliminate manual entry errors in export returns processing.",
        tags: ["Process Design", "Data Integrity", "Workflow"],
        theme: "green",
        context: "Export containers occasionally required returns processing due to customs or operational constraints. The existing system lacked a structured workflow to handle these cases effectively.",
        problem: [
            "No clear system support for export returns",
            "Data inconsistencies across workflows",
            "Manual interventions leading to errors",
            "Lack of traceability in the process"
        ],
        role: [
            "Conducted deep-dive sessions with stakeholders",
            "Mapped current (AS-IS) processes and identified gaps",
            "Designed a structured (TO-BE) workflow",
            "Defined validation rules and system logic"
        ],
        solution: [
            "Clear process stages and system states",
            "Data validation mechanisms to ensure consistency",
            "Integration with existing modules to maintain flow continuity",
            "User-friendly process handling within the system"
        ],
        impact: [
            "Ensured 100% data integrity across export return transactions",
            "Reduced manual errors and inconsistencies",
            "Improved traceability and operational visibility",
            "Enhanced user confidence in system workflows"
        ],
        takeaway: "Well-structured workflows are essential for maintaining data integrity and operational clarity in complex systems."
    },
    {
        id: "case-3",
        image: "/TruckImpoundment.jpg",
        title: "Building a Structured Truck Impoundment System",
        shorts: "Decoupled state management model for legal compliance and operational tracking.",
        tags: ["Compliance", "System Architecture", "Governance"],
        theme: "purple",
        context: "Truck impoundment is a critical process involving compliance, billing, and operational tracking. The system initially lacked a standardized way to handle impounded trucks.",
        problem: [
            "No centralized workflow for impoundment",
            "Limited visibility on truck status",
            "Inconsistent handling across teams",
            "Difficulty in enforcing compliance rules"
        ],
        role: [
            "Facilitated workshops with operations, billing, and compliance teams",
            "Defined business rules and edge cases",
            "Designed system architecture for the process",
            "Ensured alignment between stakeholders and technical teams"
        ],
        solution: [
            "Defined lifecycle states for impounded trucks",
            "Automated validation and rule enforcement",
            "Integration with billing and operational modules",
            "Clear tracking and reporting capabilities"
        ],
        impact: [
            "Standardized impoundment handling across all terminals",
            "Improved compliance and auditability",
            "Reduced process ambiguity and manual handling",
            "Enabled better monitoring and reporting of impounded trucks"
        ],
        takeaway: "Designing structured system workflows enables better governance, compliance, and operational control."
    }
]
export const COMMING_SOON = [
    {
        id: "10",
        name: 'POS Retail System',
        image: 'pos-375x475.png',
        shorts: 'Desktop web based Application POS system with full inventory management',
        description: 'A desktop web based application work locally for retail stores with full inventory management and order management, Users Privileges and more',
        link: '/#contact',
        hasLink: false,
        usedLibs: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'electron', 'nodejs', 'DataTable',],
        functions: ['NoSQL', 'users & Permissions', 'bills history', 'sorting', 'Export data CSV', 'Export data PDF', 'stock alarm', 'Standalone app'],
        responsive: false,
    }
]


export const CERTIFICATS = [
    {
        id: 1,
        name: 'ERP Systems',
        pdf: '/certificates/ERP.png',
    },
    {
        id: 2,
        name: 'JavaScript',
        pdf: '/certificates/javascript.png',
    },
    {
        id: 3,
        name: 'SQL',
        pdf: '/certificates/sql.png',
    },
    {
        id: 4,
        name: 'React',
        pdf: '/certificates/react-2.png',
    },
    {
        id: 5,
        name: 'Frontend',
        pdf: '/certificates/frontEnd.png',
    },
    {
        id: 6,
        name: 'HTML - CSS',
        pdf: '/certificates/HTML.png',
    },
    {
        id: 7,
        name: 'React',
        pdf: '/certificates/react-1.png',
    }
]


export const timeline = [
  {
    title: "Operational System Support",
    subtitle: "Systems Support Analyst (2021–2023)",
    points: [
      "Supported RFID, POS, Scales in port operations",
      "Maintained system stability",
      "Resolved live incidents"
    ],
    insight: "Learned how systems fail in real-world operations"
  },
  {
    title: "Business Analysis & Process Optimization",
    subtitle: "Business Analyst (2023–Present)",
    points: [
      "Modeled workflows using BPMN",
      "Led requirements elicitation",
      "Optimized system processes"
    ],
    insight: "Shifted from solving issues to understanding root causes"
  },
  {
    title: "Product Ownership & System Design",
    subtitle: "Product Owner / Functional Lead",
    points: [
      "Owned backlog and workflows",
      "Led UAT and releases",
      "Defined system behavior"
    ],
    insight: "Driving system evolution based on real operational needs"
  }
];
