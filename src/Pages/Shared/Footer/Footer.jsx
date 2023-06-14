import logo from '../../../assets/sport-35476.png'
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
  <div className='flex'>
   <img className='h-44' src={logo} alt="" />
   <h3 className='text-5xl mt-9'>prime academy</h3>
  
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">medical</a> 
    <a className="link link-hover">gym</a> 
    <a className="link link-hover">food</a> 
    <a className="link link-hover">apartment</a>
  </div>
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  );
};

export default Footer;
