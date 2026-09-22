import styles from './Instructor.module.css';
import instructorImg from '../../assets/instructor-person.png';

export function Instructor() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.content}>
          <h2 className={styles.title}>
            Quem vai <span className={styles.highlight}>te guiar</span> nessa Jornada?
          </h2>
          
          <div className={styles.bioText}>
            <p>
              <strong>Felipe Macedo Carneiro</strong> é professor de inglês, Mestrando em Educação, especialista em metodologias ativas e formado em Letras Inglês pela Universidade Federal do Piauí (UFPI).
            </p>
            <p>
              Casado, cristão e pai de dois bebês bilíngues, Felipe vive o inglês no seu dia a dia. Ele aplica o seu próprio método dentro de casa, comunicando-se constantemente em inglês com os filhos e provando que o bilinguismo pode ser desenvolvido de forma natural, prática e sem depender de "gramática chata".
            </p>
            <p>
              Com o <strong>Missão Fluência: Pais e Filhos</strong>, ele uniu a sua paixão pelo idioma e anos de experiência acadêmica para criar um ecossistema completo de aprendizado para toda a família. O inglês transformou a vida do Felipe, e agora ele construiu o caminho exato para transformar a sua.
            </p>
          </div>

          <div className={styles.ctaWrapper}>
            <button 
              className={styles.ctaButton}
              onClick={() => alert('Redirecionando para as ofertas secretas!')}
            >
              DESBLOQUEAR OFERTAS SECRETAS
            </button>
          </div>
        </div>

        <div 
          className={styles.imageBackground}
          style={{ backgroundImage: `url(${instructorImg})` }}
        >
          <div className={styles.glowEffect} />
        </div>

      </div>
    </section>
  );
}
