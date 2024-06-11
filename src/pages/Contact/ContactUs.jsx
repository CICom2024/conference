import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Footer/Footer';
import NavbarSecond from '../../components/NavbarSecond/NavbarSecond';

const VisaInformation = () => {
  return (
    <section>
      <Helmet>
        <link rel="shortcut icon" href="/icon/visa.svg" type="image/x-icon" />
        <title>Visa Information</title>
      </Helmet>
      <NavbarSecond buttonText={"Submit Paper"} buttonLink={"/login"} />

      <div className="min-h-screen bg-[#181A1B] p-5 md:p-10 lg:p-20 flex flex-col">
        <h1
          className="font-bold capitalize text-xl text-center md:text-3xl lg:text-5xl text-slate-300 w-fit mb-5"
          data-aos="fade-down"
        >
          Visa Information
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 my-20" data-aos="fade-left">
          <div>
            <p className="font-bold text-slate-300 md:text-lg mb-5">
              Visa Requirements
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Foreign nationals wishing to attend the conference must have a valid passport and obtain a visa in advance. 
              Please ensure that you apply for your visa well in advance to avoid any last-minute issues.
            </p>
          </div>
          <div>
            <p className="font-bold text-slate-300 md:text-lg mb-5">
              Important Notes
            </p>
            <ol className="text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li>Please apply for your visa well in advance to avoid any delays.</li>
              <li>Ensure all information provided is accurate and complete to avoid rejection of your visa application.</li>
              <li>Keep a copy of all documents submitted for your records.</li>
              <li>Contact the conference organizers if you require any assistance with your visa application.</li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-20" data-aos="fade-right">
          <div>
            <p className="font-bold text-slate-300 md:text-lg mb-5">
              Visa Application Process
            </p>
            <ol className="text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li>Complete the visa application form available on your local embassy or consulate's website.</li>
              <li>Attach a recent passport-sized photograph.</li>
              <li>Submit a copy of your passport (must be valid for at least six months from your planned date of entry).</li>
              <li>Provide a letter of invitation from the conference organizers (you can request this letter from us).</li>
              <li>Submit proof of accommodation and travel itinerary.</li>
              <li>Include any additional documents as required by your local embassy or consulate.</li>
            </ol>
          </div>
          <div>
            <p className="font-bold text-slate-300 md:text-lg mb-5">
              Documents Required
            </p>
            <ol className="text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li>Completed visa application form.</li>
              <li>Passport-sized photograph (as per specifications).</li>
              <li>Copy of your passport (valid for at least six months beyond your date of entry).</li>
              <li>Letter of invitation from the conference organizers.</li>
              <li>Proof of accommodation (hotel booking, etc.).</li>
              <li>Travel itinerary (flight bookings, etc.).</li>
              <li>Proof of sufficient funds to cover your stay.</li>
              <li>Health insurance (if required).</li>
              <li>Any other documents required by the specific embassy or consulate.</li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default VisaInformation;
