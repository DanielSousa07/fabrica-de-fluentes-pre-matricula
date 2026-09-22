import imgConversacao from '../../assets/offer-details/offer-conversacao.png';
import imgCurso from '../../assets/offer-details/offer-curso.png';
import imgMaterial from '../../assets/offer-details/offer-material.png';
import imgSilver from '../../assets/offer-details/offer-silver.png';
import imgComunidade from '../../assets/offer-details/offer-comunidade.png'; 
import imgBonus from '../../assets/offer-details/offer-bonus.png';

export const offerData = {
  topRow: [
    {
      id: 1,
      title: "1 ANO DE AULAS DE <strong>CONVERSAÇÃO</strong>",
      description: "Agende quantas aulas de conversação ao vivo quiser durante 1 ano. 100% adaptadas ao seu nível. <strong style='color: #ef4444;'>É prática ao vivo à vontade!</strong>",
      image: imgConversacao,
      placeholder: "Aulas de Conversação"
    },
    {
      id: 2,
      title: "CURSO COMPLETO DE <strong>INGLÊS</strong>",
      description: "Tenha acesso ao mapa da fluência que vai te fazer falar inglês em <strong style='color: #ef4444;'>qualquer situação em apenas 10 meses.</strong>",
      image: imgCurso,
      placeholder: "App do Curso"
    },
    {
      id: 3,
      title: "E-BOOK: PLANO DE <strong>ESTUDOS</strong>",
      list: [
        "O passo a passo exato do que você deve estudar todos os dias.",
        "Cronograma detalhado para guiar sua rotina até a fluência.",
        "Material 100% digital para você baixar, imprimir ou usar no celular."
      ],
      image: imgMaterial,
      placeholder: "E-book Plano de Estudos"
    }
  ],
  middleRow: [
    {
      id: 4,
      title: "SILVER <strong>TICKET</strong>",
      description: "Passe livre à biblioteca completa de cursos do Teacher:",
      list: [
        "Inglês Para Trabalho",
        "Inglês Travel (Viagens)",
        "Intensivão do Inglês Básico"
      ],
      image: imgSilver,
      placeholder: "Plataforma Silver"
    },
    {
      id: 5,
      title: "COMUNIDADE VIP DE <strong>ALUNOS</strong>",
      description: "Você não vai estudar sozinho. O ambiente perfeito para destravar o seu inglês:",
      list: [
        "Networking com alunos do mesmo nível.",
        "Desafios semanais de conversação.",
        "Acesso direto para tirar dúvidas com o Teacher."
      ],
      image: imgComunidade, 
      placeholder: "Comunidade VIP"
    }
  ],
  bottomCard: {
    id: 6,
    title: "BÔNUS <strong>ESPECIAIS</strong>",
    description: "Acesso a todos os bônus da nossa caixa de ferramentas:",
    list: [
      "Manual Prático de Conversação",
      "IA de conversação e pronúncia",
      "Dicas de gramática e vocabulário"
    ],
    image: imgBonus,
    placeholder: "Pacote de Bônus"
  }
};