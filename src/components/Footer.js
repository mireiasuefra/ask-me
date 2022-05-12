function Footer() {
  return (
    <>
      <section className="footer">
        <small className="footer__copy">&copy; Mireia Suero 2022</small>
        <div className="footer__rrss" >
          <p className="footer__rrss-title">About me:</p>
          <a
            className="footer__rrss-web"
            href="https://github.com/mireiasuefra"
          >
            <i className="icon fab fa-github-square"></i>
          </a>
          <a
            className="footer__rrss-web"
            href="https://www.linkedin.com/in/mireia-suefra/"
          >
            <i class="icon fab fa-linkedin"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
