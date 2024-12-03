import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const classes = {
  backgroundContainer: 'relative w-full min:h-screen max-h-full overflow-hidden flex items-center justify-center mb-10 pb-10',
  article: 'relative z-10 transition-transform duration-1000 ease-out opacity-100 transform translate-x-0',
  title: 'text-3xl font-bold mb-4 text-center text-black-800 mt-32',
  subtitle: 'text-lg mt-2 mb-8 italic text-center text-black break-words sm:w-[50%] mx-auto',
  skillsContainer: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl overflow-visible',
  skillCard: 'relative bg-transparent text-white border border-rgb rounded-lg p-4 min-h-[300px] max-h-[400px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-rgb',
  cardTitle: 'text-2xl font-semibold text-gray-600 mb-4 text-center',
  cardContainer: 'flex flex-wrap gap-2 justify-center items-center',
  card: 'bg-transparent text-gray-800 p-2 text-sm rounded-lg flex items-center opacity-80',
  skillImage: 'w-4 h-4 mr-1', // Smaller skill image size
  scrollContainer: 'overflow-y-auto max-h-[400px]',
  descriptionContainer: 'mt-4 text-gray-800 text-center relative',
  descriptionImage: 'w-full h-48 object-cover mx-auto mb-4 rounded-lg',
  githubLink: 'absolute top-2 right-2 text-gray-800 hover:text-black', // Style for GitHub link
  tag: 'absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded', // Style for the ongoing tag
};

const ProjectCard = ({ title, skills, description, githubUrl, isOngoing }) => {
  return (
    <div className={classes.skillCard}>
      {isOngoing && (
        <div className={classes.tag}>Ongoing</div>
      )}
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={classes.githubLink}>
          <img src="/images/github-icon.svg" alt="GitHub" className="w-6 h-6" />
        </a>
      )}
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
  githubUrl: PropTypes.string,
  isOngoing: PropTypes.bool,
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
  const quickTechs = ['javascript', 'HTML', 'CSS', 'React', 'Redux', 'Java', 'Spring Boot'];

  return (
    <div className={classes.backgroundContainer}>
      <article ref={articleRef} className={`${classes.article} ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'}`}>
        <h1 className={classes.title}>My Work</h1>
        <h3 className={classes.subtitle}>
          My portfolio demonstrates my skills and experience through various real-world projects. Each project description includes links to the code repositories and live demos, showcasing my problem-solving abilities, proficiency with diverse technologies, and effective project management.
        </h3>
        <div className={`${classes.skillsContainer} ${isSmallScreen ? classes.scrollContainer : ''}`}>
          <ProjectCard
            title="FlowerMart"
            skills={techUsed}
            description="An elegant e-commerce platform designed for flower enthusiasts."
            githubUrl="https://github.com/akshaynarsanne01/FlowermartFrontend"
          />
          <ProjectCard
            title="Quick Garage"
            skills={quickTechs}
            githubUrl="https://github.com/your-username/quick-garage"
            isOngoing
          />
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
