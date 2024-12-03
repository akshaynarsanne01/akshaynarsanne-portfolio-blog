import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const classes = {
  backgroundContainer: 'relative w-full h-screen overflow-hidden flex items-center justify-center',
  article: 'relative z-10 transition-transform duration-1000 ease-out opacity-100 transform translate-x-0',
  title: 'text-3xl font-bold mb-4 text-center text-black-800 mt-32',
  subtitle: 'text-lg mt-2 mb-8 italic text-center text-black break-words sm:w-[50%] mx-auto',
  skillsContainer: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl',
  skillCard: 'bg-transparent text-white border border-rgb rounded-lg p-4 min-h-[300px] max-h-[400px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-rgb',
  cardTitle: 'text-2xl font-semibold text-gray-600 mb-4 text-center',
  cardContainer: 'flex flex-wrap gap-2 justify-center items-center',
  card: 'bg-transparent text-gray-800 p-2 text-sm rounded-lg flex items-center opacity-80',
  skillImage: 'w-4 h-4 mr-1', // Smaller skill image size
  scrollContainer: 'overflow-y-auto max-h-[400px]',
  descriptionContainer: 'mt-4 text-gray-800 text-center',
  descriptionImage: 'w-16 h-16 mx-auto mb-2',
};

const ProjectCard = ({ title, skills, description }) => {
  return (
    <div className={classes.skillCard}>
      <h1 className={classes.cardTitle}>{title}</h1>
      <div className={classes.cardContainer}>
        {skills.map((skill, index) => (
          <span key={index} className={classes.card}>
            <img src={`/images/${skill.toLowerCase()}.svg`} alt={skill} className={classes.skillImage} />
            {skill}
          </span>
        ))}
      </div>
      {description && (
        <div className={classes.descriptionContainer}>
          <img src='/images/vite.svg' alt='Project Icon' className={classes.descriptionImage} />
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string,
};

const Projects = () => {
  const articleRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setHasAnimated(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    });
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 640);
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const techUsed = ['JavaScript', 'HTML', 'CSS', 'React', 'Redux'];
  const backEndSkills = ['Node.js', 'PHP', 'Java Servlets', 'Spring', 'Spring Boot', 'ASP.NET'];
  const otherSkills = ['Docker', 'Git', 'Kubernetes', 'Selenium', 'Jenkins'];

  return (
    <div className={classes.backgroundContainer}>
      <article ref={articleRef} className={`${classes.article} ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'}`}>
        <h1 className={classes.title}>My Work</h1>
        <h3 className={classes.subtitle}>
          My portfolio demonstrates my skills and experience through various real-world projects. Each project description includes links to the code repositories and live demos, showcasing my problem-solving abilities, proficiency with diverse technologies, and effective project management.
        </h3>
        <div className={`${classes.skillsContainer} ${isSmallScreen ? classes.scrollContainer : ''}`}>
          <ProjectCard title="FlowerMart" skills={techUsed} description="An elegant e-commerce platform designed for flower enthusiasts." />
          <ProjectCard title="Back-End" skills={backEndSkills} />
          <ProjectCard title="Others" skills={otherSkills} />
        </div>
      </article>
    </div>
  );
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

export default Projects;
