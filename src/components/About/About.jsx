import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logoOne from '../../assets/images/logo-lisv.jpg';
import logoTwo from '../../assets/images/lyrids.png';
import logoThree from '../../assets/images/boumerdes.png';
import call from '../../assets/images/Call.pdf';

const About = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown4Open, setDropdown4Open] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'dropdown1') {
      setDropdown1Open(!dropdown1Open);
    } else if (dropdown === 'dropdown2') {
      setDropdown2Open(!dropdown2Open);
    } else if (dropdown === 'dropdown3') {
      setDropdown3Open(!dropdown3Open);
    } else if (dropdown === 'dropdown4') {
      setDropdown4Open(!dropdown4Open);
    }
  };

  return (
    <section className="min-h-screen bg-[#181A1B] p-5 md:p-10 lg:p-20">
      <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5 border-b-2 border-b-blue-500" data-aos="fade-up">
        About CiCom 2024
      </h1>
      <div className="block lg:flex justify items-center my-10" data-aos="fade-up">
        <p className="text-justify font-bold text-white text-opacity md:text-lg w-80 md:w-full mb-5" data-aos="fade-up">
          In this year’s CICom, we are soliciting original contributions on computational intelligence and communications whose applications are beneficial to the concerned entity in particular, and to the society in general. In other words, we are soliciting contributions on ethical use of computational intelligence and communications. We are particularly interested in new solutions that detect and stop the propagation of fake news, prevent malware, stop hacking, detect facial recognition for surveillance purposes, and the likes. Other works related to this theme are welcome.

          Computational intelligence is a computer science field by which a computer can learn a specific task from data or experimental observation. It addresses complex real-world problems in which mathematical or traditional modelling are not the preferred solution given that (i) the involved computational process might be too complex for mathematical reasoning; (ii) it might contain some uncertainties during the process, or (iii) by nature, the computational process is a randomly determined one (heuristic). The International Conference on Computational Intelligence and Communications (CICom 2024) explores solutions to various problems of this nature.
        </p>
        <a
      href="/Call.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-blue-500 text-white min-h-0 h-9 lg:h-10 hover:bg-blue-500 hover:text-white hover:border-blue-500 normal-case font-bold text-xl"
      data-aos="fade-up"
    >
      Call for Papers
    </a>
      </div>

      <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5 border-b-2 border-b-blue-500 " data-aos="fade-up">
        Organising Laboratories
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center lg:place-items-start gap-10">
      <div className="w-full h-fit lg:h-[20rem] bg-grey bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <a href="https://www.ece.fr/lecole-2/le-centre-de-recherche/" target="_blank" className="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up"></h1>
            <img className="w-full block rounded-b" src={logoTwo} alt="Logo Two" />
          </a>
        </div>
        <div className="w-full h-fit lg:h-[20rem] bg-grey bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <a href="https://www.lisv.uvsq.fr/" target="_blank" className="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up"></h1>
            <img className="w-full block rounded-b" src={logoOne} alt="Logo One" />
          </a>
        </div>
        <div className="w-full h-fit lg:h-[20rem] bg-grey bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <a href="https://en.univ-boumerdes.dz/index.php" target="_blank" className="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up"></h1>
            <img className="w-full block rounded-b" src={logoThree} alt="Logo Three" />
          </a>
        </div>
      </div>

      <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5" data-aos="fade-up"></h1>

      <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5 border-b-2 border-b-blue-500 " data-aos="fade-up">
        Tracks
      </h1>

      <p className="text-justify font-bold text-white text-opacity md:text-lg w-80 md:w-full mb-5" data-aos="fade-up">
        Track topics include, but are not limited to:
      </p>

      <div className="mb-5">
        <button className="w-full bg-blue-500 text-white p-3 rounded-md text-left" onClick={() => toggleDropdown('dropdown1')}>
          Track 1: Computational Intelligence in Automation, Control, and Intelligent Transportation System
        </button>
        {dropdown1Open && (
          <div id="dropdown1" className="mt-2 p-3 bg-gray-800 rounded-md">
            <ul className="list-disc pl-5">
              <li>Intelligent Decision Making and Support</li>
              <li>Adaptive and Optimal Control</li>
              <li>Model-Predictive Control</li>
              <li>Fuzzy Systems and Control</li>
              <li>Expert and Decision Support Systems</li>
              <li>System Identification and Learning</li>
              <li>Fault Detection and Diagnosis</li>
              <li>Complex System Modelling</li>
              <li>Fuzzy Neural Systems and Control</li>
              <li>Hybrid Intelligent Control</li>
              <li>Advanced transportation information, communication and management systems</li>
              <li>Object recognitions such as pedestrian detection, traffic sign detection and recognition</li>
              <li>Multimodal intelligent transport systems and services</li>
              <li>Vehicle communications and connectivity</li>
              <li>Personalized driver and traveller support systems</li>
              <li>Simulation and forecasting models</li>
              <li>Driver assistance and automation systems</li>
              <li>Driver state detection and monitoring</li>
              <li>Ethical Computational Intelligence in Automation, Control, and Intelligent Transportation</li>
            </ul>
          </div>
        )}
      </div>

      <div className="mb-5">
        <button className="w-full bg-blue-500 text-white p-3 rounded-md text-left" onClick={() => toggleDropdown('dropdown2')}>
          Track 2: Computational Intelligence on Big Data, Internet of Things, and Smart Cities
        </button>
        {dropdown2Open && (
          <div id="dropdown2" className="mt-2 p-3 bg-gray-800 rounded-md">
            <ul className="list-disc pl-5">
              <li>Efficient algorithms on reading, processing and analysis of big data</li>
              <li>Integration of multi-modal, multi-fidelity, and structured and unstructured big data</li>
              <li>Extracting and understanding from distributed, diverse and large-scale data resources</li>
              <li>Visualisation of big data and visual data analytics</li>
              <li>Human-computer interaction and collaboration in big data</li>
              <li>Classification, Clustering, Regression</li>
              <li>Feature learning and feature engineering</li>
              <li>Data mining from nonstationary and drifting environments</li>
              <li>Novel Architecture and Protocols of AI Integrated with IoT</li>
              <li>Security, Privacy, Access Control, and Trust Frameworks of IoT</li>
              <li>Resource Management Techniques of Using AI for IoT</li>
              <li>Control Schemes in IoT</li>
              <li>Smart Data Storage in IoT</li>
              <li>Ethical Computational Intelligence on Big Data, Internet of Things, and Smart Cities</li>
            </ul>
          </div>
        )}
      </div>

      <div className="mb-5">
        <button className="w-full bg-blue-500 text-white p-3 rounded-md text-left" onClick={() => toggleDropdown('dropdown3')}>
          Track 3: Computational Intelligence on Wireless Communication Systems and Cyber Security
        </button>
        {dropdown3Open && (
          <div id="dropdown3" className="mt-2 p-3 bg-gray-800 rounded-md">
            <ul className="list-disc pl-5">
              <li>Machine Learning for Networks</li>
              <li>V2X Communications</li>
              <li>Unmanned Aerial Vehicles</li>
              <li>Wireless Sensor Networks</li>
              <li>Low Power Wireless Area Networks</li>
              <li>Network Virtualization</li>
              <li>Quality of Service (QoS)</li>
              <li>Resources Management</li>
              <li>Embedded systems</li>
              <li>Software Defined Networks</li>
              <li>Blockchains</li>
              <li>Waveforms and Radio Access Technologies</li>
              <li>Software Defined Radio</li>
              <li>Visible Light Communication (VLC)</li>
              <li>Radio Interference Management</li>
              <li>Radio Access Networks</li>
              <li>Intrusion/malware detection, prediction, classification, and response</li>
              <li>Sensor network security, web security, wireless and 4G, 5G media security</li>
              <li>Self-awareness, auto-defensiveness, self-reconfiguration, and self-healing networking paradigm</li>
              <li>Modelling adversarial behaviour for insider and outsider threat detection</li>
              <li>Cloud and virtualization security</li>
              <li>Block-chain security</li>
              <li>Ethical Computational Intelligence on Wireless Communication Systems and Cyber Security</li>
            </ul>
          </div>
        )}
      </div>

      <div className="mb-5">
        <button className="w-full bg-blue-500 text-white p-3 rounded-md text-left" onClick={() => toggleDropdown('dropdown4')}>
          Track 4: Computational Intelligence on Human/Brain-Computer Interfaces, and Image and Pattern Recognition
        </button>
        {dropdown4Open && (
          <div id="dropdown4" className="mt-2 p-3 bg-gray-800 rounded-md">
            <ul className="list-disc pl-5">
              <li>Signal processing for Brain-Computer Interface (BCI)</li>
              <li>BCI Feature Extraction, Recognition, and Multiple modalities for BCI</li>
              <li>Invasive and non-invasive BCIs.</li>
              <li>Online and offline BCI applications</li>
              <li>Advances on Human-Computer Interfaces</li>
              <li>Feature ranking and weighting</li>
              <li>Feature selection, extraction, construction, and reduction</li>
              <li>Feature analysis on high-dimensional and large-scale data</li>
              <li>Evolutionary computation for feature analysis</li>
              <li>Neural networks for feature analysis</li>
              <li>Fuzzy logic for feature analysis</li>
              <li>Hybrid evolutionary computation and machine learning</li>
              <li>Information theory, statistics, mathematical modelling, etc., for feature analysis</li>
              <li>Feature analysis in classification, clustering, regression, image analysis, and other tasks</li>
              <li>Real-world applications of computational intelligence for feature analysis</li>
              <li>Ethical Computational Intelligence on Human-Machine Interfaces, and Image and Recognition</li>
            </ul>
          </div>
        )}
      </div>

      <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5 border-b-2 border-b-blue-500 " data-aos="fade-up">
        Important Dates
      </h1>

      <ul className="font-bold max-w-md space-y-1 text-white list-inside dark:text-white">
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Full Paper Submission deadline : 1st September, 2024
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Notification deadline : 15th October, 2024
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Camera-ready deadline : 15th November, 2024
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Conference dates : 26-27th December, 2024
        </li>
      </ul>

      <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5 " data-aos="fade-up"></h1>

      <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5 border-b-2 border-b-blue-500" data-aos="fade-up">
        Publication
      </h1>
      <div className="block lg:flex justify-between items-center my-10" data-aos="fade-up">
        <p className="text-justify font-bold text-white text-opacity md:text-lg w-80 md:w-full mb-5" data-aos="fade-up">
          All registered papers will be submitted for publishing by Springer and made available through SpringerLink Digital Library.
          <br />
          <br />
          Proceedings will be submitted for inclusion in leading indexing services, such as Web of Science, Compendex, Scopus, DBLP, EU Digital Library, Google Scholar, IO-Port, MathSciNet, Inspec, and Zentralblatt MATH.
          <br />
          <br />
          (Additional publication opportunities in leading journals: To be updated soon)
        </p>
        <a href="https://www.springer.com" target="_blank" rel="noopener noreferrer" className="ml-0 lg:ml-5">
          <img src="/springer-logo.jpg" alt="Springer" className="w-32 md:w-48 lg:w-64" />
        </a>
      </div>

      <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5 border-b-2 border-b-blue-500 " data-aos="fade-up">
        Paper Submission
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start gap-10">
        <div className="w-full h-fit lg:h-[20rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">
            Author Guidelines
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-opacity-50" data-aos="fade-up">
            Prospective authors are invited to submit manuscript reporting original unpublished research and recent developments in the topics related to the conference. It is required that the manuscript follows the standard Springer camera-ready format. 
            <Link to="/about" className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-blue-500 text-white min-h-0 h-10 lg:h-12 hover:bg-blue-500 hover:text-white hover:border-blue-500 normal-case font-bold text-xl" data-aos="fade-up">
              Read More
            </Link>
          </p>
        </div>
        <div className="w-full h-fit lg:h-[20rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">
            Registration
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-opacity-50" data-aos="fade-up">
            Will be updated soon!!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
