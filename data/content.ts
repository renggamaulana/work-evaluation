// Content data for all slides - centralized for easy editing

export interface Project {
  title: string;
  description: string[];
  techTags: string[];
  icon: string;
  color: string;
  images?: string[];
}

export const coverContent = {
  tag: 'PERFORMANCE REVIEW 2026',
  statusLabel: 'IDENTITY VERIFICATION: SUCCESSFUL',
  title: 'Backend Developer',
  // highlightedWord: '3-Month',
  terminalLine: 'root@rengga:~/performance-review-2026 --init',
  candidate: 'Rengga Maulana',
  evaluationDate: 'Thursday, 30 July 2026',
  hint: 'Press → or Space to begin',
};

export const scopeOfWorkContent = {
  title: 'Scope of Work',
  categories: [
    {
      title: 'Backend Development',
      icon: 'Code',
      color: 'bg-blue-500/20 text-blue-400',
      items: [
        'Develop & maintain backend service',
        'Integrasi API antar sistem',
        'Database management & optimization',
        'Database mapping',
        'Bug fixing & troubleshooting',
      ],
    },
    {
      title: 'Data Integration',
      icon: 'Database',
      color: 'bg-emerald-500/20 text-emerald-400',
      items: [
        'Monitoring alur data antar sistem',
        'Rekonsiliasi data',
        'Analisis data mismatch',
      ],
    },
    {
      title: 'Deployment & Maintenance',
      icon: 'Server',
      color: 'bg-violet-500/20 text-violet-400',
      items: [
        'Deployment aplikasi',
        'Server configuration',
        'Monitoring middleware',
      ],
    },
  ],
};

export const projectsContent = {
  title: 'Projects Handled',
  projects: [
    {
      title: 'Dashboard Dakgar',
      description: [
        'Rekonsiliasi data (query gap analysis vs vendor E-Tilang & ETLENAS)',
        'Setup project & desain API',
        'Integrasi frontend–backend',
        'Pengembangan fitur dashboard V2',
      ],
      // techTags: ['Next.js', 'Material UI', 'Fastify', 'PostgreSQL'],
      icon: 'LayoutDashboard',
      color: 'bg-teal-500/20 text-teal-400',
      images: [
        '/images/dashboard/ss001.png',
        '/images/dashboard/ss002.png',
        '/images/dashboard/ss003.png',
        '/images/dashboard/ss004.png',
        '/images/dashboard/ss1.png',
        '/images/dashboard/ss2.png',
        '/images/dashboard/ss3.png',
        '/images/dashboard/ss4.png',
        '/images/dashboard/ss5.png',
        '/images/dashboard/ss6.png',
        '/images/dashboard/ss7.png',
      ],
    },
    {
      title: 'ETLE — Middleware Monitoring',
      description: [
        'Monitoring middleware',
        'Analisis error',
        'Database checking',
        'Troubleshooting sistem',
      ],
      techTags: [],
      icon: 'Activity',
      color: 'bg-orange-500/20 text-orange-400',
      images: [
        '/images/etle/ss1.png',
        '/images/etle/ss2.png',
        '/images/etle/ss3.png',
        '/images/etle/ss4.png',
        '/images/etle/ss5.png',
        '/images/etle/ss6.png',
        '/images/etle/ss7.png',
      ],
    },
    {
      title: 'Tristan Company Profile',
      description: [
        'Development menggunakan Next.js',
        'Deployment ke server',
        'Konfigurasi environment',
        'Testing production',
      ],
      techTags: ['Next.js'],
      icon: 'Globe',
      color: 'bg-cyan-500/20 text-cyan-400',
      images: [
        '/images/cp-tristan/ss1.png',
        '/images/cp-tristan/ss2.png',
        '/images/cp-tristan/ss3.png',
        '/images/cp-tristan/ss4.png',
        '/images/cp-tristan/ss5.png',
        '/images/cp-tristan/ss6.png',
        '/images/cp-tristan/ss7.png',
        '/images/cp-tristan/ss8.png',
        '/images/cp-tristan/ss9.png',
        '/images/cp-tristan/ss10.png',
        '/images/cp-tristan/ss11.png',
      ],
    },
    {
      title: 'E-Arsip — Usulan Sistem Dokumentasi Internal',
      description: [
        'Usulan sistem Document Management System (DMS) untuk kebutuhan arsip internal kantor',
        'Alur dokumen: draft → submit → review → approval, lengkap dengan versioning',
        'Role-based access: User, Approver, dan Super Admin',
        'Manajemen multi-departemen dengan isolasi akses data per unit',
      ],
      techTags: [],
      icon: 'Archive',
      color: 'bg-indigo-500/20 text-indigo-400',
      images: [
        '/images/earsip/ss1.png',
        '/images/earsip/ss2.png',
        '/images/earsip/ss3.png',
        '/images/earsip/ss4.png',
        '/images/earsip/ss5.png',
        '/images/earsip/ss6.png',
        '/images/earsip/ss7.png',
        '/images/earsip/ss8.png',
        '/images/earsip/ss9.png',
        '/images/earsip/ss10.png',
      ],
    },
  ],
};

export const lessonsLearnedContent = {
  title: 'Key Learnings & Peer Guidance',
  categories: [
    {
      title: 'Business Process',
      icon: 'Briefcase',
      color: 'bg-blue-500/20 text-blue-400',
      items: [
        'Memahami alur data ETLE dari sumber hingga visualisasi dashboard',
        'Memahami proses rekonsiliasi data antar vendor',
        'Memahami arah dan proses bisnis perusahaan secara lebih luas melalui project Dashboard dan diskusi lintas tim',
      ],
    },
    {
      title: 'Technical Skills',
      icon: 'Cpu',
      color: 'bg-emerald-500/20 text-emerald-400',
      items: [
        'Tableau Dashboard',
        'Fastify',
        'Prisma ORM',
        'PostgreSQL',
        'Deployment di Linux Server',
      ],
      generalAwareness: ['PRTG', 'Grafana'],
    },
    {
      title: 'System Architecture',
      icon: 'Network',
      color: 'bg-violet-500/20 text-violet-400',
      items: [
        'Integrasi multi-vendor & middleware',
        'ETL process & database relationship',
        'API integration',
      ],
    },
    {
      title: 'Team Collaboration',
      icon: 'Users',
      color: 'bg-rose-500/20 text-rose-400',
      items: [
        'Koordinasi dengan Team Engineering & Operation',
        'Kolaborasi dengan UI/UX Engineer & Consultant',
        'Mengikuti proses meeting project',
      ],
    },
  ],
};

export const challengesContent = {
  title: 'Challenges & Obstacles',
  challenges: [
    {
      title: 'Project Documentation',
      icon: 'FileX',
      color: 'bg-amber-500/20 text-amber-400',
      description: 'Keterbatasan dokumentasi business flow, struktur database, API, data flow, dan objective proyek — memperlambat proses onboarding.',
    },
    {
      title: 'Legacy System',
      icon: 'Clock',
      color: 'bg-rose-500/20 text-rose-400',
      description: 'Banyak sistem yang sudah berjalan cukup lama, membutuhkan waktu untuk memahami relasi antar aplikasi dan database.',
    },
    {
      title: 'Domain Knowledge',
      icon: 'BrainCircuit',
      color: 'bg-indigo-500/20 text-indigo-400',
      description: 'Masih dalam proses mempelajari proses bisnis ETLE, Dashboard Dakgar, dan integrasi vendor.',
    },
  ],
};

export const improvementPlanContent = {
  title: 'Growth & Development Plan',
  phases: [
    {
      term: 'Short Term',
      icon: 'Zap',
      color: 'bg-yellow-500/20 text-yellow-400',
      items: [
        'Menyelesaikan Dashboard Dakgar V2',
        'Memperdalam PostgreSQL',
        'Memahami seluruh flow ETLE',
      ],
    },
    {
      term: 'Mid Term',
      icon: 'TrendingUp',
      color: 'bg-teal-500/20 text-teal-400',
      items: [
        'Optimasi query',
        'API performance improvement',
        'Dokumentasi project',
      ],
    },
    {
      term: 'Long Term',
      icon: 'Target',
      color: 'bg-blue-500/20 text-blue-400',
      items: [
        'Menjadi PIC backend untuk project baru',
        'Berkontribusi pada arsitektur backend',
        'Membantu standarisasi dokumentasi teknis',
      ],
    },
  ],
};

export const closingContent = {
  title: 'Thank You',
  subtitle: 'Questions & Discussion',
  signature: 'Rengga Maulana — Backend Developer',
};