import React, { useState } from 'react';
import NavbarSecond from '../../components/NavbarSecond/NavbarSecond';
import Footer from './../../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('organizing');

  const renderOrganizingCommittee = () => (
    <div className="grid grid-cols-1 lg:grid-cols-1 place-items-center lg:place-items-start gap-10">
      <div className="w-full h-fit lg:h-[12rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">General Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Assia Soukane, Director of Research, ECE Paris Engineering School, France</li>
          <li>Manolo Dulva Hina, ECE Paris, France</li>
          <li>Amar Ramdane-Cherif, Université Paris-Saclay, France</li> 
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">General Co-Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Seyedali Mirjalili, Torrens University, Australia</li>
          <li>Rafik Zitouni, University of Surrey, UK</li>
          <li>Yassine Meraihi, Université de Boumerdes, Algeria</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Technical Program Committee Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Manolo Dulva Hina, ECE Paris, France</li>
          <li>Amar Ramdane-Cherif, Université Paris-Saclay, France</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[12rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Technical Program Committee Co-Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Seyedali Mirjalili, Torrens University, Australia</li>
          <li>Jaouhar Fattahi, Université Laval, Canada</li>
          <li>Piotr Kuwalek, Poznan University of Technology, Poland</li>
          <li>Yassine Meraihi, Université de Boumerdes, Algeria</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Web Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Ravi Tomar, University of Petroleum and Energy Studies, India</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Publicity and Social Media Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Naila Bouchemal, ECE Paris School of Engineering, France</li>
          <li>Bikram Pratim Bhuyan, Université Paris-Saclay, France</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Workshop Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Yassine Meraihi, Université de Boumerdés, Algeria</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Sponsorship & Exhibition Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Hongyu Guan, University of Versailles – Paris Saclay, France</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Publication Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Rafik Zitouni, University of Surrey, UK</li>
          <li>Bikram Pratim Bhuyan, Université Paris-Saclay, France</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Panels Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Piotr Kuwalek, Poznan University of Technology, Poland</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Tutorials Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Jaouhar Fattahi, Université Laval, Canada</li>
          <li>Moeiz Miraoui, Umm Al-Qura University, Saudi Arabia</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Demos Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Sebastien Dourlens, University of Versailles – Paris Saclay, France</li>
          <li>Bikram Pratim Bhuyan, Université Paris-Saclay, France</li>
          <li>Amylia Ait Saadi, Université Paris-Saclay, France</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Poster and PhD Track Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Amylia Ait Saadi, Université Paris-Saclay, France</li>
          <li>Youssef Al Ozaibi, Université Paris-Saclay, ECE Paris School of Engineering, France</li>
        </ul>
      </div>
      <div className="w-full h-fit lg:h-[10rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Local Chairs</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Assia Soukane, Director of Research, ECE Paris Engineering School, France</li>
          <li>Amar Ramdane-Cherif, University of Versailles – Paris Saclay, France</li>
        </ul>
      </div>
    </div>
  );

  const renderTechnicalProgramCommittee = () => (
    <div className="grid grid-cols-1 lg:grid-cols-1 place-items-center lg:place-items-start gap-10">
      <div className="w-full h-fit lg:h-[40rem] bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">TECHNICAL PROGRAM COMMITTEE</h1>
        <ul className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
          <li>Manolo Dulva Hina, ECE Paris School of Engineering, France</li>
          <li>Jaouhar Fattahi, Université Laval, Canada</li>
          <li>Yassine Meraihi, Université de Boumerdes, Algeria</li>
          <li>Piotr Kuwalek, Poznan University of Technology, Poland</li>
          <li>Amar Ramdane-Cherif, University of Versailles – Paris Saclay, France</li>
          <li>Hongyu Guan, University of Versailles – Paris Saclay, France</li>
          <li>Sébastien Dourlens, University of Versailles – Paris Saclay, France</li>
          <li>Naila Bouchemal, ECE Paris School of Engineering, France</li>
          <li>Aakash Soni, ECE Paris School of Engineering, France</li>
          <li>Abderrahmane Maaradji, ECE Paris School of Engineering, France</li>
          <li>Jae Yun Jun Kim, ECE Paris School of Engineering, France</li>
          <li>Ali Awde, Collège St-Foy, Canada</li>
          <li>Seyedali Mirjalili, Torrens University, Australia</li>
          <li>Ravi Tomar, University of Petroleum and Energy Studies, India</li>
          <li>Naresh Kumar, Quantum University, India</li>
          <li>Aditi Sharma, Parul University, India</li>
          <li>Moeiz Miraoui, Umm Al-Qura University, Saudi Arabia</li>
          <li>Rolou Lyn Maata, Gulf College, Oman</li>
          <li>Samir Brahim Belhaouari, Hamad Bin Khalifa University, Qatar</li>
          <li>Rafik Zitouni, University of Surrey, UK</li>
        </ul>
      </div>
    </div>
  );

  return (
    <section>
      <Helmet>
        <link rel="shortcut icon" href="/icon/service.svg" type="image/x-icon" />
        <title>CICom - Committee</title>
      </Helmet>
      <NavbarSecond buttonText={"Submit Paper"} buttonLink={"/login"} />
      <div className="min-h-screen bg-[#181A1B] p-5 md:p-10 lg:p-20 flex flex-col items-center">
        <h1 className="font-bold capitalize text-xl text-center md:text-3xl lg:text-5xl text-slate-300 w-fit mb-5" data-aos="fade-down">
          Conference Committee
        </h1>
        <div className="flex mb-5">
          <button
            className={`px-4 py-2 mr-2 ${activeTab === 'organizing' ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded-md`}
            onClick={() => setActiveTab('organizing')}
          >
            Organizing Committee
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'technical' ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded-md`}
            onClick={() => setActiveTab('technical')}
          >
            Technical Program Committee
          </button>
        </div>
        {activeTab === 'organizing' ? renderOrganizingCommittee() : renderTechnicalProgramCommittee()}
      </div>
      <Footer />
    </section>
  );
};

export default ServicesPage;
