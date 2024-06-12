import {Link} from "react-router-dom";
import {FaFacebook, FaLinkedin, FaXTwitter, FaInstagram} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section className="hidden lg:block">
        <footer className="footer p-10 bg-black bg-opacity-50 text-base-content">
          <aside>
            <Link
              to={"/"}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500"
            >
              CICom
            </Link>
            <p>2024</p>
            <div className="flex justify-between items-center gap-4 text-4xl mt-3 ">
              <FaFacebook className="hover:text-blue-500" />
              <FaLinkedin className="hover:text-blue-500" />
              <FaInstagram className="hover:text-blue-500" />
              <FaXTwitter className="hover:text-blue-500" />
            </div>
          </aside>
          <nav>
            <header className="footer-title">Previous CICom Editions</header>
            <a href="https://cicom-conference.eai-conferences.org/2023/" className="hover:text-blue-500 cursor-pointer">CICom 2023</a>
            <a href="https://cicom-conference.eai-conferences.org/2022/" className="hover:text-blue-500 cursor-pointer">CICom 2022</a>
            <a href="https://cicom-conference.eai-conferences.org/2021/" className="hover:text-blue-500 cursor-pointer">CICom 2021</a>
            <a href="https://cicom-conference.eai-conferences.org/2020/" className="hover:text-blue-500 cursor-pointer">CICom 2020</a>
          </nav>
          <form onSubmit={(e) => e.preventDefault()}>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="input focus:outline-none input-bordered w-full pr-16 rounded-2xl"
                />
                <button className="btn bg-blue-500 border-none text-black font-bold hover:bg-blue-600 hover:text-white absolute top-0 right-0 rounded-2xl rounded-l-none">
                  Subscribe (Coming Soon!)
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <footer className="footer footer-center p-4 bg-black bg-opacity-80 text-base-content">
          <aside>
            <p>
              Design &amp; Developed by{" "}
              <Link
                to={"https://www.lisv.uvsq.fr/"}
                className="font-bold hover:text-red-500 text-blue-500 hover:underline custom-cursor"
              >
                LISV Laboratory
              </Link>
            </p>
          </aside>
        </footer>
      </section>
      <footer className="footer footer-center p-10 bg-black bg-opacity-80 text-primary-content lg:hidden">
        <aside>
        <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="CICom 2024 Logo" className="h-10 md:h-12 lg:h-16 mr-2" />
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            </span>
          </Link>
          <p>International Conference on Computational Intelligence and Communications</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-4xl">
            <FaFacebook className="hover:text-blue-500" />
            <FaLinkedin className="hover:text-blue-500" />
            <FaInstagram className="hover:text-blue-500" />
            <FaXTwitter className="hover:text-blue-500" />
          </div>
        </nav>
        <p>
          Design &amp; Developed by{" "}
          <Link
            to={"https://www.lisv.uvsq.fr/"}
            className="font-bold hover:text-red-500 text-blue-500 custom-cursor"
          >
            LISV Laboratory
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
