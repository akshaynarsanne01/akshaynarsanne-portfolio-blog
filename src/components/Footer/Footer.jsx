const styles = {
  footer: 'flex justify-between sm:mt-0 mt-20 items-center sticky top-0 bg-transparent px-2 sm:px-10 py-0 shadow-md z-50 h-32 border border-gray-300',
  gmailLink: 'flex justify-between items-center rounded-full p-2 shadow cursor-pointer hover:cursor-pointer',
  logo: 'capitalize',
  innerShadow: 'relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-gray-400 before:opacity-30 before:-z-10'
};

const Footer = () => {
  return (
    <div className={`${styles.footer} ${styles.innerShadow}`}>
        <div>
          <p> &copy;2024 Akshay Narsanne</p>
        </div>
        <div className={styles.logo}>
            <span>Thank You For a look</span>
        </div>
        <a href="#" rel="noopener noreferrer">
          <img src="/images/uparrow.svg" alt="GitHub" className="w-6 h-6" />
        </a>
    </div>
  );
}

export default Footer;
