import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Mickael Bourgois',
    photo: '/images/photo.jpg',
    photoBackEmoji: '🚀',
    title: {
      fr: 'Consultant NoCode / LowCode / IA',
      en: 'NoCode / LowCode / AI Consultant',
    },
    subtitle: {
      fr: 'Product Builder Freelance',
      en: 'Freelance Product Builder',
    },
    location: 'Lille, France',
  },

  // ===== SEO =====
  seo: {
    title: 'Mickael Bourgois — Consultant NoCode / LowCode / IA',
    description: 'CV interactif de Mickael Bourgois, Consultant NoCode/LowCode/IA et Product Builder Freelance basé à Lille.',
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
      title: { fr: 'Automatisation & NoCode', en: 'Automation & NoCode' },
      type: 'badges',
      items: [
        { name: 'Make' },
        { name: 'Bubble' },
        { name: 'Agents IA' },
      ],
    },
    {
      title: { fr: 'LowCode', en: 'LowCode' },
      type: 'badges',
      items: [
        { name: 'n8n' },
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'Claude Code' },
        { name: 'Cursor' },
      ],
    },
    {
      title: { fr: 'Product & Ops', en: 'Product & Ops' },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Recueil des irritants, définition des specs, gestion Agile du backlog, priorisation MVP',
            en: 'Pain point discovery, spec writing, Agile backlog management, MVP prioritization',
          },
        },
      ],
    },
    {
      title: { fr: 'Collaboration transverse', en: 'Cross-functional collaboration' },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Coordination Produit, Tech, Support, Sales, Marketing',
            en: 'Product, Tech, Support, Sales, Marketing coordination',
          },
        },
      ],
    },
    {
      title: { fr: 'Culture client', en: 'Customer culture' },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Interviews, feedback loops, NPS',
            en: 'Interviews, feedback loops, NPS',
          },
        },
      ],
    },
    {
      title: { fr: 'Soft skills', en: 'Soft skills' },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Autonomie, rigueur, esprit d\'impact, communication',
            en: 'Autonomy, rigor, impact-driven mindset, communication',
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
        fr: 'Consultant NoCode/LowCode/IA — Product Builder',
        en: 'NoCode/LowCode/AI Consultant — Product Builder',
      },
      type: { fr: 'Freelance', en: 'Freelance' },
      period: { fr: 'Jan. 2023 - Présent', en: 'Jan. 2023 - Present' },
      description: {
        fr: '+30 clients accompagnés. Conception de webapps (marketplace, SaaS), automatisation de processus métiers, refonte d\'ops de startup. Enseignement NoCode en MBA.',
        en: '30+ clients supported. Webapp development (marketplace, SaaS), business process automation, startup ops overhaul. NoCode teaching at MBA level.',
      },
      techs: ['Bubble', 'Airtable', 'Make', 'n8n', 'OpenAI', 'Anthropic', 'Claude Code', 'Python', 'JavaScript'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Activité freelance de conseil et développement NoCode/LowCode, avec une spécialisation en automatisation et intégration d\'IA. Plus de 30 clients accompagnés dans des secteurs variés.',
          en: 'Freelance consulting and NoCode/LowCode development, specializing in automation and AI integration. 30+ clients across various industries.',
        },
        tasks: {
          fr: [
            'Refonte totale des Ops d\'une startup (Airtable/Make)',
            'Conception et développement de webapps (marketplace, SaaS)',
            'Intégration d\'API tierces (OpenAI, Anthropic, Stripe...)',
            'Automatisation des processus métiers',
            'Automatisation de tunnels de vente + scoring leads (n8n, Airtable)',
            'Analyse des besoins clients et définition des specs',
            'Collaboration avec des équipes multidisciplinaires',
            'Maintenance et amélioration continue',
            'Enseignement NoCode pour 2 écoles (niveau MBA)',
          ],
          en: [
            'Complete overhaul of a startup\'s operations (Airtable/Make)',
            'Design and development of webapps (marketplace, SaaS)',
            'Third-party API integration (OpenAI, Anthropic, Stripe...)',
            'Business process automation',
            'Sales funnel automation + lead scoring (n8n, Airtable)',
            'Client needs analysis and spec writing',
            'Collaboration with multidisciplinary teams',
            'Ongoing maintenance and continuous improvement',
            'NoCode teaching at 2 schools (MBA level)',
          ],
        },
        env: {
          fr: 'Bubble / Airtable / Make / n8n / OpenAI / Anthropic / Python / JavaScript / REST APIs',
          en: 'Bubble / Airtable / Make / n8n / OpenAI / Anthropic / Python / JavaScript / REST APIs',
        },
      },
    },
    {
      id: 'picomto',
      company: { fr: 'Picomto', en: 'Picomto' },
      role: {
        fr: 'Sales Account Manager / Consultant Industrie 4.0',
        en: 'Sales Account Manager / Industry 4.0 Consultant',
      },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Juil. 2018 - Jan. 2023', en: 'Jul. 2018 - Jan. 2023' },
      description: {
        fr: 'Vente complexe du SaaS B2B Picomto pour l\'industrie. Livraison de projets pilotes et accompagnement au changement.',
        en: 'Complex sales of B2B SaaS Picomto for industry. Pilot project delivery and change management.',
      },
      techs: ['HubSpot'],
      details: {
        context: {
          fr: 'Startup SaaS B2B spécialisée dans la digitalisation des instructions de travail pour l\'industrie. Double casquette Sales et Consultant.',
          en: 'B2B SaaS startup specializing in digitalizing work instructions for industry. Dual Sales and Consultant role.',
        },
        tasks: {
          fr: [
            'Vente complexe du SaaS Picomto auprès de grands comptes industriels',
            'Analyse des besoins clients et réponse à appels d\'offres',
            'Négociations et identification d\'opportunités et de partenariats',
            'Participation à des salons industriels (Global Industrie, VivaTech, BE4.0, CFIA...)',
            'Livraison de projets pilotes',
            'Suivi de projets et accompagnement du changement',
            'Mise en place du cycle de vente complexe',
          ],
          en: [
            'Complex SaaS sales to major industrial accounts',
            'Client needs analysis and RFP responses',
            'Negotiations and opportunity/partnership identification',
            'Industrial trade shows (Global Industrie, VivaTech, BE4.0, CFIA...)',
            'Pilot project delivery',
            'Project follow-up and change management',
            'Complex sales cycle implementation',
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
        fr: 'Projet de fin d\'études : développement commercial, pilotage de projets et management d\'équipe Bureau d\'Études.',
        en: 'Final year project: business development, project management and design office team management.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Projet de Fin d\'Études de 8 mois en alternance dans le cadre du diplôme d\'ingénieur EI.CESI.',
          en: '8-month work-study final year project as part of the EI.CESI engineering degree.',
        },
        tasks: {
          fr: [
            'Développement du portefeuille clients',
            'Rédaction de Cahiers Des Charges et élaboration des offres techniques et financières',
            'Planification de projet (GANTT)',
            'Respect des exigences Qualité, Coûts, Délais',
            'Recrutement et management de Dessinateurs Projeteurs',
            'Coordination de l\'équipe Bureau d\'Études',
            'Interface entre clients, intervenants internes et fournisseurs',
            'Mise en place d\'un ATS (Système de Gestion des Candidats)',
          ],
          en: [
            'Client portfolio development',
            'Technical specification writing and proposal preparation',
            'Project planning (GANTT)',
            'Quality, Cost, Deadline compliance',
            'Recruitment and management of Design Engineers',
            'Design Office team coordination',
            'Interface between clients, internal stakeholders and suppliers',
            'ATS (Applicant Tracking System) implementation',
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
        fr: 'Conception d\'équipements mécaniques et conseil en régie. Plus de 20 projets en 4 ans.',
        en: 'Mechanical equipment design and on-site consulting. 20+ projects in 4 years.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Bureau d\'études en ingénierie mécanique, intervenant en forfait et en assistance technique dans différents secteurs.',
          en: 'Mechanical engineering design office, working on fixed-price contracts and technical assistance across various industries.',
        },
        tasks: {
          fr: [
            'Conception d\'équipements mécaniques (avant-projets, études, calculs, suivi de chantier)',
            'Modélisation sur SolidWorks, Inventor, SolidEdge, AutoCAD',
            'Conseil en régie (assistance technique) dans différents secteurs',
            'Rédaction de documentation technique',
            'AMDEC (Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité)',
          ],
          en: [
            'Mechanical equipment design (preliminary studies, calculations, site follow-up)',
            'Modeling with SolidWorks, Inventor, SolidEdge, AutoCAD',
            'On-site consulting (technical assistance) across various industries',
            'Technical documentation writing',
            'FMEA (Failure Mode and Effects Analysis)',
          ],
        },
        env: {
          fr: 'SolidWorks / Inventor / SolidEdge / AutoCAD / MS Project',
          en: 'SolidWorks / Inventor / SolidEdge / AutoCAD / MS Project',
        },
      },
    },
    {
      id: 'akka',
      company: { fr: 'Akka Technologies', en: 'Akka Technologies' },
      role: { fr: 'Consultant en Ingénierie', en: 'Engineering Consultant' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Juin 2007 - Mars 2012', en: 'Jun. 2007 - Mar. 2012' },
      description: {
        fr: 'Missions chez Fives FCB, Alstom et Bombardier. Plans d\'usine, gestion de livrables et procédures de maintenance.',
        en: 'Assignments at Fives FCB, Alstom and Bombardier. Factory plans, deliverables management and maintenance procedures.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Société de conseil en ingénierie. Missions longues chez des grands comptes industriels.',
          en: 'Engineering consulting firm. Long-term assignments at major industrial clients.',
        },
        tasks: {
          fr: [
            'FIVES FCB : Réalisation des plans guides et de remontage d\'usine (cimenterie au Qatar)',
            'ALSTOM : Gestion des livrables techniques soumis à des jalons à forts impacts financiers',
            'ALSTOM : Mise en place d\'indicateurs et reporting hebdomadaire',
            'BOMBARDIER : Rédaction des procédures de maintenance préventive',
          ],
          en: [
            'FIVES FCB: Factory guide and reassembly plans (cement plant in Qatar)',
            'ALSTOM: Technical deliverables management with high-impact financial milestones',
            'ALSTOM: KPI setup and weekly reporting',
            'BOMBARDIER: Preventive maintenance procedure writing',
          ],
        },
        env: {
          fr: 'AutoCAD / DAO-CAO / MS Project / Documentation technique',
          en: 'AutoCAD / CAD / MS Project / Technical documentation',
        },
      },
    },
    {
      id: 'netra',
      company: { fr: 'Netra Systems', en: 'Netra Systems' },
      role: { fr: 'Dessinateur', en: 'Technical Drafter' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2007', en: '2007' },
      description: {
        fr: 'Réalisation de plans d\'ensembles et listes de pièces de rechange de convoyeurs à bouteilles (Perrier, St-Yorre, Coca-Cola...).',
        en: 'Assembly drawings and spare parts lists for bottle conveyors (Perrier, St-Yorre, Coca-Cola...).',
      },
      techs: [],
    },
    {
      id: 'tiberghien',
      company: { fr: 'Tiberghien Manutention', en: 'Tiberghien Manutention' },
      role: { fr: 'Dessinateur / Chargé d\'Affaires', en: 'Drafter / Account Manager' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2006 - 2007', en: '2006 - 2007' },
      description: {
        fr: 'Conception de convoyeurs et systèmes de manutention pour l\'agroalimentaire. Suivi fournisseurs, gestion des stocks, encadrement.',
        en: 'Design of conveyors and handling systems for the food industry. Supplier management, inventory, team supervision.',
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
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      hobbies: { fr: 'CENTRES D\'INTÉRÊT', en: 'INTERESTS' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Toggle dark mode' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
