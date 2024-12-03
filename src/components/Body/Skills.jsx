import { useEffect, useRef, useState } from 'react';
import ParticleBackground from './ParticleBackground';
import PropTypes from 'prop-types';

const classes = {
  backgroundContainer: 'relative w-full h-screen overflow-hidden flex items-center justify-center ',
  article: 'relative z-10 skills-article transition-transform duration-1000 ease-out opacity-100 transform translate-x-0',
  title: 'text-3xl font-bold mb-4 text-center text-black-800',
  subtitle: 'text-lg mt-2 mb-8 italic text-center font-bold text-black',
  skillsContainer: 'skills-class grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl',
  skillCard: 'bg-transparent text-white border border-rgb rounded-lg p-4 min-h-[300px] max-h-[400px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-rgb',
  cardTitle: 'text-2xl font-semibold text-gray-600 mb-4 text-center',
  cardContainer: 'flex flex-wrap gap-2 justify-center items-center',
  card: 'bg-white text-gray-800 p-2 text-sm rounded-lg flex items-center opacity-80',
  skillImage: 'w-8 h-8 mr-1', // Adjust size as needed
  scrollContainer: 'overflow-y-auto max-h-[400px]',
};

const skillImages = {
  'JavaScript': '/images/javascript.svg',
  'HTML': '/images/html.svg',
  'CSS': '/images/css.svg',
  'React': '/images/react.svg',
  'Redux': '/images/redux.svg',
  'Node.js': '/images/nodejs.svg',
  'PHP': '/images/php.svg',
  'Java Servlets': '/images/spring.svg',
  'Spring': '/images/spring.svg',
  'Spring Boot': '/images/spring.svg',
  'ASP.NET': '/images/dotnet.svg',
  'Docker': '/images/docker.svg',
  'Git': '/images/git.svg',
  'Kubernetes': '/images/kubernetes.svg',
  'Selenium': '/images/selenium.svg',
  'Jenkins': '/images/jenkins.svg',
};

const SkillCard = ({ title, skills }) => {
  return (
    <div className={classes.skillCard}>
      <h1 className={classes.cardTitle}>{title}</h1>
      <div className={classes.cardContainer}>
        {skills.map((skill, index) => (
          <span key={index} className={classes.card}>
            <img src={skillImages[skill] || '/images/skills/default.png'} alt={skill} className={classes.skillImage} />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Skills = () => {
  const articleRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  const handleScroll = () => {
    if (articleRef.current) {
      const rect = articleRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setHasAnimated(true);
      }
    }
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

  const frontEndSkills = ['JavaScript', 'HTML', 'CSS', 'React', 'Redux'];
  const backEndSkills = ['Node.js', 'PHP', 'Java Servlets', 'Spring', 'Spring Boot', 'ASP.NET'];
  const otherSkills = ['Docker', 'Git', 'Kubernetes', 'Selenium', 'Jenkins'];

  return (
    <div className={classes.backgroundContainer}>
      <ParticleBackground />
      <article
        ref={articleRef}
        className={`${classes.article} ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'}`}
      >
        <h1 className={classes.title}>SKILLS</h1>
        <h3 className={classes.subtitle}>
          Here are some of my skills on which I have been working on
        </h3>
        <div className={`${classes.skillsContainer} ${isSmallScreen ? classes.scrollContainer : ''}`}>
          <SkillCard title="Front-End" skills={frontEndSkills} />
          <SkillCard title="Back-End" skills={backEndSkills} />
          <SkillCard title="Others" skills={otherSkills} />
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

export default Skills;
