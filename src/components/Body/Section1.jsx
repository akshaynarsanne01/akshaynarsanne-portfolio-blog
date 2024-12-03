import Socials from "./Socials";
import profile from "../../assets/Profile.jpg";
const tailwindClasses = {
    section: 'w-full min-h-[650px] py-8 px-4 flex items-center justify-center animated-background select-none',
    innerSection: 'flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left sm:mt-0 mt-14',
    profileSection: 'flex flex-col items-center lg:items-start lg:w-1/2 mb-8 lg:mb-0',
    imageContainer: 'flex flex-col items-center mb-4',
    image: 'w-32 h-32 lg:w-48 lg:h-48 rounded-full border-4 border-gray-300 shadow-lg object-cover', // Updated image styling
    socialLinks: 'mt-4 flex',
    textSection: 'lg:w-1/2 px-4 lg:px-6',
    heading1: 'text-3xl lg:text-4xl font-extrabold mb-6 text-gray-900 leading-tight',
    uniqueHeading: 'text-xl lg:text-2xl font-semibold text-gray-800 mb-4 leading-snug',
    subText: 'text-base lg:text-lg text-gray-600 leading-relaxed mt-4',
};

const Section1 = () => {
    return (
        <div className={tailwindClasses.section}>
            <article className={tailwindClasses.innerSection}>
                <div className={tailwindClasses.profileSection}>
                    <div className={tailwindClasses.imageContainer}>
                        <img src={profile} alt="Profile" className={tailwindClasses.image} />
                        <div className={tailwindClasses.socialLinks}>
                            <Socials />
                        </div>
                    </div>
                </div>
                <div className={tailwindClasses.textSection}>
                    <h1 className={tailwindClasses.heading1}>
                        Hello!<br />
                        I&apos;m Akshay Narsanne,<br /> a Full-Stack Developer based in Pune, Maharashtra.
                    </h1>
                    <h3 className={tailwindClasses.uniqueHeading}>
                        Crafting Solutions<br />
                        With Precision and Passion
                    </h3>
                    <h2 className={tailwindClasses.subText}>
                        I&apos;m passionate about creating user-friendly and efficient solutions that seamlessly integrate with diverse systems and platforms.
                    </h2>

                </div>
            </article>
        </div>
    );
};

export default Section1;
