import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer";
import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";

const AboutUs = () => {
  return (
    <section>
      <Helmet>
        <link rel="shortcut icon" href="/icon/about.svg" type="image/x-icon" />
        <title>For Authors </title>
      </Helmet>
      <NavbarSecond buttonText={"Submit Paper"} buttonLink={"/login"} />

      <div className="min-h-screen bg-[#181A1B]  p-5 md:p-10 lg:p-20  flex flex-col">
        <h1
          className="font-bold capitalize text-xl text-center  md:text-3xl lg:text-5xl text-slate-300 w-fit mb-5"
          data-aos="fade-down"
        >
          Author Guidelines
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 my-20"
          data-aos="fade-left"
        >
          <div>
            <p className="font-bold text-slate-300 border-b-2 border-b-blue-500  md:text-lg mb-5">
            Manuscript Preparation
            </p>
            <p>
            <ol class="text-white list-decimal list-inside">
              <li>
              Papers should be in English.
              </li>
              <li>
              Regular papers should be up to 12-15+ pages in length.
              </li>
              <li>
              Short papers should be 6-11 pages in length.
              </li>
              <li>
              The manuscript should be prepared in Springer <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">LNCS</a> format. Any article, not in format, will be subjected to rejection without any judgment on its quality.
              </li>
              <li>
              The articles should be an original work of the authors. If any work is referred from others (or some other work by the author), proper acknowledgement and citation should be given. Plagiarism of any type, if detected, will lead to rejection of the articles anytime.
              </li>
              <li>
              When uploading the camera-ready copy of your paper, please be sure to upload both: a) a PDF copy of your paper formatted according to the above templates, and
              b) an archive file (e.g. zip, tar.gz) containing the both a PDF copy of your paper and LaTeX or Word source material prepared according to the above guidelines.
              </li>
            </ol>
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 mb-20"
          data-aos="fade-right"
        >
          <div></div>
          <div className="text-left">
            <p className="font-bold text-slate-300 border-b-2 border-b-blue-500  md:text-lg mb-5">
            Submitting for Review
            </p>
            <ol class="text-white list-decimal list-inside">
              <li>
              Follow the link{' '}
                  <a
                    href="https://cmt3.research.microsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    here
                  </a>{' '}
                  and submit your article with properly mentioning article title, authors names and other details that will be asked.
            </li>
              <li>
              Create / sign up for an CMT account if you do not have one.
              </li>
              <li>
              Fill proper metadata of the article in CMT as they exist in your article. Title, Abstract, Keywords, list of authors (in order) and their affiliation should be mentioned in CMT while submitting.
              </li>
              <li>
              Review decision will be e-mailed to authors.
              </li>
              <li>
              Offline submission via e-mails will not be entertained. Offline submissions will lead to rejection without any review or validation.
              </li>
            </ol>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 mb-20"
          data-aos="fade-left"
        >
          <div>
            <p className="font-bold text-slate-300 border-b-2 border-b-blue-500  md:text-lg mb-5">
            After Acceptance
            </p>
            <p>
              Will be updated soon!!
            </p>
          </div>
        </div>
        
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;
