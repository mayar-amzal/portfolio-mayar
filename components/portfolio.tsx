'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, Mail, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Djezzy Talents',
    type: 'Plateforme web',
    description:
      'Une plateforme de recrutement claire et fluide pour connecter les talents aux bonnes opportunités.',
    tags: ['Next.js', 'UX/UI', 'Dashboard'],
    accent: 'peach',
    video: '/videos/djezzy.mp4',
  },
  {
    title: 'Handmade',
    type: 'E-commerce',
    description:
      'Une boutique en ligne chaleureuse pensée pour valoriser des créations faites avec soin.',
    tags: ['E-commerce', 'React', 'Paiement'],
    accent: 'lilac',
    video: '/videos/boutique.mp4',
  },
  {
    title: 'École privée',
    type: 'Site vitrine',
    description:
      'Un site institutionnel rassurant qui présente les programmes, les valeurs et la vie de l\'établissement.',
    tags: ['Design', 'Responsive', 'CMS'],
    accent: 'mint',
    video: '/videos/dkt.mp4',
  },
  {
    title: 'Evo Agency',
    type: 'Site vitrine',
    description:
      'Une présence digitale audacieuse pour une agence qui transforme les idées en expériences.',
    tags: ['Branding', 'Animation', 'Webflow'],
    accent: 'blue',
    video: '/videos/evo-agency.mp4',
  },
  {
    title: 'Agence digitale',
    type: 'Site vitrine',
    description:
      'Un univers moderne pour mettre en avant les expertises, les réalisations et l\'équipe.',
    tags: ['Stratégie', 'UI Design', 'Front-end'],
    accent: 'yellow',
    video: '/videos/neovision.mp4',
  },
  {
    title: 'Clinique dentaire',
    type: 'Réservation en ligne',
    description:
      'Une expérience simple et rassurante pour découvrir la clinique et prendre rendez-vous en quelques clics.',
    tags: ['Réservation', 'Accessibilité', 'Mobile'],
    accent: 'rose',
    video: '/videos/clinique.mp4',
  },
]

export function Portfolio() {
  const [filter, setFilter] = useState('Tous')

  const filters = [
    'Tous',
    'Sites vitrines',
    'E-commerce',
    'Applications',
  ]

  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          filter === 'Tous' ||
          (filter === 'E-commerce' && project.type === 'E-commerce') ||
          (filter === 'Sites vitrines' &&
            project.type.includes('vitrine')) ||
          (filter === 'Applications' &&
            (project.type.includes('Plateforme') ||
              project.type.includes('Réservation')))
      ),
    [filter]
  )

  return (
    <main>
      <nav className="site-nav">
        <a
          className="brand"
          href="#top"
          aria-label="Accueil de portfolio"
        >
          <span className="brand-mark">M</span>
          <span>
            Mayar<span className="brand-dot">.</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#projets">Projets</a>
          <a href="#a-propos">À propos</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-cta"
          href="mailto:votre-email@exemple.com"
        >
          Disponible pour un projet
          <ArrowUpRight size={15} />
        </a>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Développeuse web & web designer · 
          </p>

          <h1>
            Je transforme les idées
            <br />
            <em>en expériences digitales.</em>
          </h1>

          <p className="hero-text">
            Diplômée en informatique, je conçois des sites et applications web
            qui allient une interface soignée à une expérience simple, utile et
            mémorable.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#projets">
              Découvrir mes projets
              <ArrowUpRight size={16} />
            </a>

            <a className="text-link" href="#a-propos">
              En savoir plus <span>↘</span>
            </a>
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Illustration abstraite représentant une expérience digitale créative"
        >
          <div className="hero-art-glow" />

          <img
            src="/images/mayar-hero-art.png"
            alt="Illustration abstraite d'une expérience digitale créative"
          />

          <span className="art-badge badge-one">créative</span>
          <span className="art-badge badge-two">web & design</span>
          <span className="art-badge badge-three">01 — 06</span>
        </div>
      </section>

      <section id="projets" className="projects section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / sélection</p>

            <h2>
              Des projets qui
              <br />
              <span>font la différence.</span>
            </h2>
          </div>

          <p className="section-intro">
            Chaque projet est une occasion de rendre le web plus clair, plus
            beau et plus humain.
          </p>
        </div>

        <div
          className="filter-row"
          role="group"
          aria-label="Filtrer les projets"
        >
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? 'filter active' : 'filter'}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <article
              className={`project-card ${project.accent}`}
              key={project.title}
            >
              <div className="video-placeholder">
                <video
                  src={project.video}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="project-meta">
                <div>
                  <p className="project-type">{project.type}</p>

                  <h3>{project.title}</h3>
                </div>

                <ArrowUpRight
                  size={20}
                  className="project-arrow"
                />
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="a-propos" className="about section-shell">
        <div className="about-stamp">
          <Sparkles size={19} />

          <span>
            à propos
            <br />
            de moi
          </span>
        </div>

        <div>
          <p className="eyebrow">02 / mon approche</p>

          <h2>
            Le code avec
            <br />
            <em>une intention.</em>
          </h2>
        </div>

        <div className="about-copy">
          <p>
            Je suis développeuse web et web designer, diplômée en informatique.
            J’aime prendre une idée, la comprendre dans ses moindres détails,
            puis lui donner vie à travers une expérience digitale intuitive et
            singulière.
          </p>

          <div className="skill-list">
            <div>
              <Check size={15} />
              Développement front-end
            </div>

            <div>
              <Check size={15} />
              Interfaces responsive
            </div>

            <div>
              <Check size={15} />
              Expériences sur mesure
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <p className="eyebrow">03 / parlons-nous</p>

        <h2>
          Une idée en tête ?
          <br />
          <em>Faisons-la exister.</em>
        </h2>

        <a
          className="contact-mail"
          href="mailto:votre-email@exemple.com"
        >
          mayaramzal@gmail.com
          <ArrowUpRight size={22} />
        </a>

        <div className="contact-bottom">
          <span>© 2026 Mayar. Tous droits réservés.</span>

          <span>
            <Mail size={14} />
            Disponible pour de nouveaux projets
          </span>
        </div>
      </section>
    </main>
  )
}
