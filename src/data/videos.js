
/* Page des vidéos à streamer */

import img1 from '../images/html.jpg';
import img2 from '../images/CSS.jpg';
import img3 from '../images/maths.jpg';
import img4 from '../images/Python.jpg';
import img5 from '../images/englishbook.jpg';
import img6 from '../images/ReactJs.jpg';
import img7 from '../images/jew.jpg'

const videos = [  
    {
      id: 1,
      title: "Introduction au HTML",
      category: "Développement Web",
      thumbnail: img1,
      url: "https://www.youtube.com/embed/UB1O30fR-EE",
      description: "Apprenez les bases du HTML en 10 minutes."
    },
    {
      id: 2,
      title: "Découverte du CSS",
      category: "Développement Web",
      thumbnail: img2,
      url: "https://www.youtube.com/embed/yfoY53QXEnI",
      description: "Comprenez rapidement le CSS pour vos pages web."
    },
    {
      id: 3,
      title: "Introduction aux Mathématiques",
      category: "Mathématiques",
      thumbnail: img3,
      url: "https://www.youtube.com/embed/3Xc3CA655Y4",
      description: "Les bases essentielles des mathématiques."
    },
    {
      id: 4,
      title: "Programmation Python débutant",
      category: "Programmation",
      thumbnail: img4,
      url: "https://www.youtube.com/embed/rfscVS0vtbw",
      description: "Apprendre Python pas à pas pour les débutants."
    },
    {
      id: 5,
      title: "Cours d'anglais pour débutants",
      category: "Langues",
      thumbnail: img5,
      url: "https://www.youtube.com/embed/e3T2ntP7bY4",
      description: "Apprenez l'anglais rapidement et efficacement."
    },
     {
      id:6,
      title: "Coder en React",
      category: "Développement Web",
      thumbnail: img6,
      url: "https://www.youtube.com/watch?v=_n_UVPKC_AE&t=80s",
      description: "Apprendre REACT en 5 minutes!"
     },
     {
      id: 7,
      title: "Cours d'hébreu de A à Z",
      category: "Langues",
      thumbnail: img7,
      url: "https://www.youtube.com/watch?v=JIPSa3XJy74&list=PLbyknJwpHKAhCEu54TPr-il5kWo_c3E4f", // Apprendre l'hébreu
      description: "Apprendre l'hébreu",
     }
  ];

export default videos;
  