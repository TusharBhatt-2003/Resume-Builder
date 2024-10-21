const Footer = () => {
  return (
    <footer className="py-10 flex flex-col space-y-5 justify-between items-center p-4 bg-[#242424] text-[#F2EEE5] rounded-t-3xl">
      <div className="flex space-x-4 font-bold">
       <div className="flex flex-col">
        <a 
        className="hover:underline" 
        href="https://github.com/TusharBhatt-2003" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a 
        className="hover:underline"
        href="https://www.instagram.com/_tush_ar._._/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a
        className="hover:underline" 
        href="https://www.linkedin.com/in/tushar-bhatt-05b8b11a5/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
       </div>
       <div className="flex flex-col">
       <a 
       className="hover:underline"
       href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a
         className="hover:underline"
         href="https://tushar-bhatt.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a 
        className="hover:underline"
        href="https://github.com/TusharBhatt-2003/Resume-Builder" target="_blank" rel="noopener noreferrer">Repo</a>
      </div>
      
      </div>
      <div className="text-sm font-light">Designed and Developed by Tushar Bhatt</div>
    </footer>
  );
};

export default Footer;
