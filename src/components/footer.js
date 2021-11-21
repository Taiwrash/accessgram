const Footer =()=>{
    return(
        <>
        <footer id="footer" className="page-footer bg-image" style={{backgroundImage: "url(../assets/img/world_pattern.svg)"}}>
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-3 py-3">
          <h3>AccessGram</h3>
          <p>Accessibility is the key to every design </p>

          <div className="social-media-button">
            <a href="#twitter"><span className="mai-logo-twitter"></span></a>
            <a href="#insta"><span className="mai-logo-instagram"></span></a>
            <a href="#youtube"><span className="mai-logo-youtube"></span></a>
          </div>
        </div>
        {/* <div className="col-lg-3 py-3">
          <h5>Company</h5>
          <ul className="footer-menu">
            <li><a href="#home">About Us</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#help">Help &amp; Support</a></li>
          </ul>
        </div> */}
        <div className="col-lg-3 py-3">
          <h5>Contact Us</h5>
          <p>Federal University of Technology Minna, Abuja, Nigeria</p>
          <a href="#phone" className="footer-link">+234 814 943 2886 |</a>
          <a href="#mail" className="footer-link"> | info@accessgram.app</a>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Newsletter</h5>
          <p>Get updates, news or be first to know about new guildlines and accessibility rules</p>
          <form action="#form">
            <input type="text" className="form-control" placeholder="Enter your email.."/>
            <button type="submit" className="btn btn-success btn-block mt-2">Subscribe</button>
          </form>
        </div>
      </div>

      <p className="text-center" id="copyright">Copyright &copy; 2021.  <a href="https://AccessGram.app/" target="_blan" rel="noreferer">AccessGram</a></p>
    </div>
  </footer>
        </>
    )
}

export default Footer