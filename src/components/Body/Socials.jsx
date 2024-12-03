import { Socialsdata } from '../../data/data';

const tailwindClasses = {
    container: 'flex justify-center w-full', // Center container with full width
    list: 'flex gap-4 p-0 m-0 list-none', // Flex layout with gap, no padding or margin
    listItem: 'cursor-pointer', // Pointer cursor for list items
    icon: 'h-6 w-6', // Set icon size
};

const Socials = () => {
    return (
        <div className={tailwindClasses.container}>
            <ul className={tailwindClasses.list}>
                {Socialsdata.map((item, index) => (
                    <li key={index} className={tailwindClasses.listItem}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <img
                                src={`/${item.img}`}
                                alt={`Social icon ${index}`}
                                className={tailwindClasses.icon}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Socials;
