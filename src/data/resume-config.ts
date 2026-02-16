import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Mickael Bourgois',
    photo: '/images/photo.jpg',
    photoBackEmoji: '🚀',
    title: {
      fr: 'AI Product Builder',
      en: 'AI Product Builder',
    },
    subtitle: {
      fr: 'NoCode, LowCode & Code — MVP, SaaS, Automatisations métier',
      en: 'NoCode, LowCode & Code — MVP, SaaS, Business Automation',
    },
    location: 'Lille, France',
  },

  // ===== SEO =====
  seo: {
    title: 'Mickael Bourgois — AI Product Builder',
    description: 'Je construis des produits digitaux en 10x moins de temps. NoCode (Bubble) ou Code assisté par IA (React/Next.js). 20+ projets livrés, fondateur de 2 SaaS en production.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: {
      fr: 'FR',
      en: 'EN',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'email', label: 'mick.bourgois@gmail.com' },
    { type: 'phone', label: '06.18.79.77.32' },
    { type: 'linkedin', label: 'mbourgois', href: 'https://www.linkedin.com/in/mbourgois/' },
    { type: 'website', label: 'mbourgois.fr', href: 'https://mbourgois.fr' },
    { type: 'location', label: 'Lille, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Professionnel', en: 'Professional' }, details: 'TOEIC 835' },
        { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'Notions', en: 'Basic' } },
      ],
    },
    {
      title: { fr: 'MVP rapide → NoCode', en: 'Fast MVP → NoCode' },
      type: 'badges',
      items: [
        { name: 'Bubble' },
        { name: 'Airtable' },
        { name: 'Make' },
        { name: 'n8n' },
      ],
    },
    {
      title: { fr: 'SaaS scalable → Code + IA', en: 'Scalable SaaS → Code + AI' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Supabase' },
        { name: 'Tailwind CSS' },
        { name: 'Stripe' },
      ],
    },
    {
      title: { fr: 'Dev assisté par IA', en: 'AI-assisted dev' },
      type: 'badges',
      items: [
        { name: 'Claude Code' },
        { name: 'Cursor' },
        { name: 'OpenAI' },
        { name: 'Anthropic' },
        { name: 'Python' },
      ],
    },
    {
      title: { fr: 'Méthode', en: 'Method' },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Audit & cadrage, prototype rapide, sprints courts, livraison documentée + formation',
            en: 'Audit & scoping, rapid prototype, short sprints, documented delivery + training',
          },
        },
      ],
    },
    {
      title: { fr: 'Certifications', en: 'Certifications' },
      type: 'text',
      items: [
        { name: 'Make Partners Level 4 — Advanced' },
        { name: 'Ottho — Bubble Niveau 2' },
        { name: 'The World of AI — Growth & IA' },
      ],
    },
  ],

  // ===== EXPERIENCES =====
  experiences: [
    {
      id: 'freelance',
      company: { fr: 'Indépendant', en: 'Freelance' },
      role: {
        fr: 'AI Product Builder',
        en: 'AI Product Builder',
      },
      type: { fr: 'Freelance', en: 'Freelance' },
      period: { fr: 'Jan. 2023 - Présent', en: 'Jan. 2023 - Present' },
      description: {
        fr: 'Je construis des produits digitaux en 10x moins de temps. NoCode (Bubble) ou Code + IA (React/Next.js). 20+ projets livrés, 16 notés 5/5 sur Malt. Fondateur de 2 SaaS en production.',
        en: 'I build digital products 10x faster. NoCode (Bubble) or AI-assisted Code (React/Next.js). 20+ projects delivered, 16 rated 5/5 on Malt. Founder of 2 SaaS in production.',
      },
      techs: ['Bubble', 'React', 'Next.js', 'Supabase', 'Make', 'n8n', 'Claude Code', 'Stripe', 'OpenAI'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Je choisis l\'architecture optimale selon le projet. MVP à valider vite ? NoCode via Bubble. SaaS qui doit scaler ? React + Next.js + Supabase via Claude Code. Dans les deux cas, un produit en production en quelques semaines.',
          en: 'I pick the optimal architecture for each project. Quick MVP validation? NoCode via Bubble. SaaS that needs to scale? React + Next.js + Supabase via Claude Code. Either way, a product in production within weeks.',
        },
        tasks: {
          fr: [
            'MVP & apps web — de l\'idée au produit fonctionnel en 6 à 8 semaines (20+ projets livrés)',
            'SaaS scalables — React + TypeScript + Next.js, Supabase, Stripe pour le billing',
            'Fondateur de 2 SaaS en production — je challenge l\'approche business autant que le produit',
            'Automatisations & Ops — Make (certifié Partner), n8n, Airtable. Résultat : 10h/semaine économisées pour une équipe ops',
            'Cadrage des besoins avec fondateurs/dirigeants — traduction business → specs techniques',
            'Enseignement NoCode pour 2 écoles (niveau MBA) — 60+ étudiants formés',
          ],
          en: [
            'MVPs & web apps — from idea to working product in 6 to 8 weeks (20+ projects delivered)',
            'Scalable SaaS — React + TypeScript + Next.js, Supabase, Stripe for billing',
            'Founder of 2 SaaS in production — I challenge the business approach as much as the product',
            'Automations & Ops — Make (certified Partner), n8n, Airtable. Result: 10h/week saved for an ops team',
            'Requirements scoping with founders/executives — business → technical spec translation',
            'NoCode teaching at 2 schools (MBA level) — 60+ students trained',
          ],
        },
        env: {
          fr: 'Bubble / React / Next.js / TypeScript / Supabase / Stripe / Tailwind / shadcn/ui / Make / n8n / Airtable / Claude Code / OpenAI / Python',
          en: 'Bubble / React / Next.js / TypeScript / Supabase / Stripe / Tailwind / shadcn/ui / Make / n8n / Airtable / Claude Code / OpenAI / Python',
        },
      },
    },
    {
      id: 'picomto',
      company: { fr: 'Picomto', en: 'Picomto' },
      role: {
        fr: 'Sales Account Manager & Consultant Industrie 4.0',
        en: 'Sales Account Manager & Industry 4.0 Consultant',
      },
      type: { fr: 'CDI — SaaS B2B', en: 'Permanent — B2B SaaS' },
      period: { fr: 'Juil. 2018 - Jan. 2023', en: 'Jul. 2018 - Jan. 2023' },
      description: {
        fr: 'Vente complexe d\'un SaaS de digitalisation industrielle. Double casquette : closer des deals multi-interlocuteurs ET déployer la solution sur le terrain.',
        en: 'Complex sales of an industrial digitalization SaaS. Dual role: closing multi-stakeholder deals AND deploying the solution on-site.',
      },
      techs: ['HubSpot'],
      details: {
        context: {
          fr: 'Startup SaaS B2B qui digitalise les instructions de travail dans l\'industrie. Cycles de vente longs (3-12 mois), interlocuteurs multiples (DSI, Direction Industrielle, Opérations). C\'est ici que j\'ai appris à naviguer entre le monde tech et les enjeux métier.',
          en: 'B2B SaaS startup digitalizing work instructions in industry. Long sales cycles (3-12 months), multiple stakeholders (CIO, Industrial Director, Operations). This is where I learned to navigate between the tech world and business challenges.',
        },
        tasks: {
          fr: [
            'Vente complexe auprès de grands comptes industriels — cycles de 3 à 12 mois, négociations multi-interlocuteurs',
            'Diagnostic des problèmes terrain et traduction en cas d\'usage du produit',
            'Déploiement de projets pilotes — de l\'installation à l\'adoption par les opérateurs',
            'Accompagnement du changement auprès d\'équipes non-tech (production, maintenance)',
            'Salons industriels : Global Industrie, VivaTech, BE4.0, CFIA',
          ],
          en: [
            'Complex sales to major industrial accounts — 3 to 12-month cycles, multi-stakeholder negotiations',
            'Field problem diagnosis and translation into product use cases',
            'Pilot project deployment — from setup to operator adoption',
            'Change management with non-tech teams (production, maintenance)',
            'Industrial trade shows: Global Industrie, VivaTech, BE4.0, CFIA',
          ],
        },
        env: {
          fr: 'HubSpot Sales & Marketing / LinkedIn / Waalaxy / Dropcontact',
          en: 'HubSpot Sales & Marketing / LinkedIn / Waalaxy / Dropcontact',
        },
      },
    },
    {
      id: 'technitext-pfe',
      company: { fr: 'Technitext Ingénierie', en: 'Technitext Ingénierie' },
      role: { fr: 'Ingénieur Chargé d\'Affaires', en: 'Business Engineer' },
      type: { fr: 'Alternance (PFE)', en: 'Work-Study (Final Project)' },
      period: { fr: 'Sept. 2017 - Juin 2018', en: 'Sep. 2017 - Jun. 2018' },
      description: {
        fr: 'Développement commercial et pilotage de projets techniques. Interface entre clients industriels, équipe BE et fournisseurs.',
        en: 'Business development and technical project management. Interface between industrial clients, design office and suppliers.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Projet de Fin d\'Études (8 mois) — première expérience de la jonction client/technique : comprendre le besoin industriel, chiffrer, piloter la réalisation.',
          en: 'Final year project (8 months) — first experience bridging client and technical worlds: understanding industrial needs, quoting, managing delivery.',
        },
        tasks: {
          fr: [
            'Développement du portefeuille clients — prospection et fidélisation',
            'Rédaction de Cahiers Des Charges et offres techniques/financières',
            'Pilotage de projets (GANTT) — respect Qualité, Coûts, Délais',
            'Recrutement et management de Dessinateurs Projeteurs',
            'Interface entre clients, intervenants internes et fournisseurs',
          ],
          en: [
            'Client portfolio development — prospection and retention',
            'Technical specification and proposal writing',
            'Project management (GANTT) — Quality, Cost, Deadline compliance',
            'Recruitment and management of Design Engineers',
            'Interface between clients, internal teams and suppliers',
          ],
        },
        env: {
          fr: 'MS Project / Gestion de projet / Management',
          en: 'MS Project / Project management / Team management',
        },
      },
    },
    {
      id: 'technitext',
      company: { fr: 'Technitext Ingénierie', en: 'Technitext Ingénierie' },
      role: { fr: 'Projeteur / Chargé de Projets', en: 'Design Engineer / Project Manager' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Avr. 2012 - Avr. 2016', en: 'Apr. 2012 - Apr. 2016' },
      description: {
        fr: 'Conception mécanique et gestion de 20+ projets industriels. Immersion terrain dans des secteurs variés (énergie, transport, agroalimentaire).',
        en: 'Mechanical design and management of 20+ industrial projects. Field immersion across various sectors (energy, transport, food industry).',
      },
      techs: [],
    },
    {
      id: 'akka',
      company: { fr: 'Akka Technologies', en: 'Akka Technologies' },
      role: { fr: 'Consultant en Ingénierie', en: 'Engineering Consultant' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Juin 2007 - Mars 2012', en: 'Jun. 2007 - Mar. 2012' },
      description: {
        fr: 'Missions longue durée chez Fives FCB, Alstom, Bombardier. Gestion de livrables à forts enjeux financiers, coordination multi-sites.',
        en: 'Long-term assignments at Fives FCB, Alstom, Bombardier. High-stakes deliverables management, multi-site coordination.',
      },
      techs: [],
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { fr: 'École d\'Ingénieurs EI.CESI', en: 'EI.CESI Engineering School' },
      degree: { fr: 'Diplôme d\'Ingénieur Généraliste', en: 'General Engineering Degree' },
      specialty: { fr: 'Spécialisation Entrepreneuriat', en: 'Entrepreneurship Specialization' },
      period: '2016 - 2018',
    },
    {
      school: { fr: 'ULCO — Université du Littoral Côte d\'Opale', en: 'ULCO — Université du Littoral Côte d\'Opale' },
      degree: { fr: 'Licence Génie des Systèmes Industriels', en: 'Bachelor in Industrial Systems Engineering' },
      specialty: { fr: 'Informatique Industrielle', en: 'Industrial Computing' },
      period: '2005 - 2006',
    },
    {
      school: { fr: 'I.U.T Lille 1', en: 'I.U.T Lille 1' },
      degree: { fr: 'DUT Génie Mécanique et Productique', en: 'Associate Degree in Mechanical Engineering' },
      period: '2003 - 2005',
    },
  ],

  // ===== HOBBIES =====
  hobbies: [
    { title: { fr: 'Veille techno', en: 'Tech watch' } },
    { title: { fr: 'Running', en: 'Running' } },
    { title: { fr: 'Podcasts', en: 'Podcasts' } },
    { title: { fr: 'Side business', en: 'Side business' } },
  ],

  // ===== PDF =====
  pdf: {
    label: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    path: { fr: '/cv/resume-fr.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'ocean',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'PARCOURS', en: 'EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      hobbies: { fr: 'CENTRES D\'INTÉRÊT', en: 'INTERESTS' },
    },
    experience: {
      mainTasks: { fr: 'Ce que j\'ai fait :', en: 'What I did:' },
      moreTasks: { fr: 'voir plus...', en: 'see more...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Stack :', en: 'Stack:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Toggle dark mode' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
