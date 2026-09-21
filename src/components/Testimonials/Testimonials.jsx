import { useState } from 'react';
import { testimonialData } from './testimonialData';
import styles from './Testimonials.module.css';

export function Testimonials() {
  // Separa 3 para cima e 2 para baixo
  const topRow = testimonialData.slice(0, 3);
  const bottomRow = testimonialData.slice(3, 5);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Cabeçalho */}
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

        {/* Linha Superior (3 cards) */}
        <div className={styles.grid}>
          {topRow.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Linha Inferior (2 cards centralizados) */}
        <div className={styles.gridBottom}>
          {bottomRow.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Rodapé com CTA */}
        <div className={styles.footerCta}>
          <p className={styles.ctaHelper}>Toque no botão abaixo para fazer sua pré-matrícula</p>
          <button 
            className={styles.ctaButton}
            onClick={() => alert('Redirecionando para a pré-matrícula!')}
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
          {/* Lado Esquerdo: Texto formatado e Nome */}
          <div className={styles.cardContent}>
            <span className={styles.quoteIcon}>❝</span>
            <p 
              className={styles.cardText} 
              dangerouslySetInnerHTML={{ __html: item.text }} 
            />
            <div className={styles.authorBox}>
              <span className={styles.authorStar}>✦</span>
              {item.name}
            </div>
          </div>
          
          {/* Lado Direito: Imagem e Botão posicionado na divisória */}
          <div className={styles.mediaContainer}>
            <div className={styles.videoWrapper}>
              <img src={item.image} alt={item.name} className={styles.thumbnail} />
            </div>

            {/* O botão de play fica na borda esquerda do mediaContainer */}
            <div className={styles.centerPlayButton}>
              <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}