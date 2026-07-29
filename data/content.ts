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
  title: 'Backend Developer — 3-Month Performance Review',
  highlightedWord: '3-Month',
  terminalLine: 'root@rengga:~/performance-review-2026 --init',
  candidate: 'Rengga Maulana',
  evaluationDate: 'Thursday, 30 July 2026',
  hint: 'Press → or Space to begin',
};

export const scopeOfWorkContent = {
  title: 'Ruang Lingkup Pekerjaan',
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
  title: 'Kontribusi Proyek',
  projects: [
    {
      title: 'Dashboard Dakgar V2',
      description: [
        'Memahami end-to-end flow Dashboard Dakgar',
        'Memahami alur ETLE → Vendor → Database → Tableau',
        'Rekonsiliasi data (query gap analysis vs vendor E-Tilang & ETLENAS)',
        'Setup project & desain API',
        'Integrasi frontend–backend',
        'Pengembangan fitur dashboard',
      ],
      techTags: ['Next.js', 'TypeScript', 'Material UI', 'Fastify', 'PostgreSQL', 'Prisma ORM'],
      icon: 'LayoutDashboard',
      color: 'bg-teal-500/20 text-teal-400',
      images: [
        'https://placehold.co/800x450/0f172a/14b8a6?text=Dashboard+Dakgar+V2-+Overview&font=montserrat',
        'https://placehold.co/800x450/0f172a/14b8a6?text=Dashboard+Dakgar+V2-+Analytics&font=montserrat',
        'https://placehold.co/800x450/0f172a/14b8a6?text=Dashboard+Dakgar+V2-+Data+Flow&font=montserrat',
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
        'https://placehold.co/800x450/1e1b4b/f97316?text=ETLE+Monitoring-+Dashboard&font=montserrat',
        'https://placehold.co/800x450/1e1b4b/f97316?text=ETLE+Monitoring-+Logs&font=montserrat',
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
        'https://placehold.co/800x450/020617/06b6d4?text=Tristan+Company+Profile-+Home&font=montserrat',
        'https://placehold.co/800x450/020617/06b6d4?text=Tristan+Company+Profile-+About&font=montserrat',
        'https://placehold.co/800x450/020617/06b6d4?text=Tristan+Company+Profile-+Services&font=montserrat',
      ],
    },
    {
      title: 'Cross Project Exposure',
      description: [
        'Mengikuti diskusi & knowledge sharing untuk project TAR dan E-Barbuk',
        'Memahami proses bisnis proyek lain',
        'Mengetahui arsitektur sistem perusahaan',
      ],
      techTags: [],
      icon: 'GitBranch',
      color: 'bg-pink-500/20 text-pink-400',
      images: [
        'https://placehold.co/800x450/0f0518/ec4899?text=Cross+Project-+Architecture&font=montserrat',
        'https://placehold.co/800x450/0f0518/ec4899?text=Cross+Project-+Integration&font=montserrat',
      ],
    },
  ],
};

export const lessonsLearnedContent = {
  title: 'Hal yang Dipelajari & Dibimbing oleh Peers',
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
        'Next.js',
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
        'Koordinasi dengan Backend Developer lain',
        'Kolaborasi dengan Frontend & Consultant',
        'Mengikuti proses meeting project',
      ],
    },
  ],
};

export const challengesContent = {
  title: 'Kendala yang Dihadapi',
  challenges: [
    {
      title: 'Dokumentasi Proyek',
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
  title: 'Rencana Pengembangan',
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
