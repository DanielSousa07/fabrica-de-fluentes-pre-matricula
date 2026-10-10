import { useState } from 'react';
import { testimonialData } from './testimonialData';
import styles from './Testimonials.module.css';
import { scrollToLeadForm } from '../../utils/scrollToLeadForm';

export function Testimonials() {
  const topRow = testimonialData.slice(0, 3);
  const bottomRow = testimonialData.slice(3, 5);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.studentBadge}>
            <div className={styles.badgeAvatars}>
              <span className={styles.avatarDot} style={{ backgroundColor: '#ef4444' }}></span>
              <span className={styles.avatarDot} style={{ backgroundColor: '#3b82f6' }}></span>
              <span className={styles.avatarDot} style={{ backgroundColor: '#10b981' }}></span>
            </div>
            <span>+ 51 mil alunos</span>
          </div>
          <h2 className={styles.title}>
            O que aconteceu com quem seguiu o <span className={styles.highlight}>Curso completo de Inglês da Fábrica de Fluentes</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {topRow.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        <div className={styles.gridBottom}>
          {bottomRow.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        <div className={styles.footerCta}>
          <p className={styles.ctaHelper}>Toque no botão abaixo para fazer sua pré-matrícula</p>
          <button 
            className={styles.ctaButton}
            onClick={scrollToLeadForm}
          >
            DESBLOQUEAR OFERTAS SECRETAS
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.card} onClick={() => !isPlaying && setIsPlaying(true)}>
      {isPlaying ? (
        <div className={styles.videoActiveWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
            title={`Depoimento de ${item.name}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <>
          <div className={styles.cardContent}>
            <span className={styles.quoteIcon} aria-hidden="true">❝</span>
            <p 
              className={styles.cardText} 
              dangerouslySetInnerHTML={{ __html: item.text }} 
            />
            <div className={styles.authorBox}>
              <span className={styles.authorStar} aria-hidden="true">✦</span>
              {item.name}
            </div>
          </div>
          
          <button
            type="button"
            className={styles.mediaContainer}
            onClick={() => setIsPlaying(true)}
            aria-label={`Assistir depoimento de ${item.name}`}
          >
            <div className={styles.videoWrapper}>
              <img
                src={item.image}
                alt=""
                className={styles.thumbnail}
                width="120"
                height="230"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className={styles.centerPlayButton}>
              <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </button>
        </>
      )}
    </div>
  );
}
