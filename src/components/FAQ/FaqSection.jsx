import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const center = [48.85196, 2.28773];

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState('location');

  return (
    <section className="bg-[#181A1B] p-5 md:p-10 lg:px-20">
      <h1 className="font-semibold text-xl md:text-3xl lg:text-5xl text-slate-300 mb-5" data-aos="fade-up">
        Conference Location & Contact
      </h1>
      <div className="flex mb-5">
        <button
          className={`px-4 py-2 mr-2 ${activeTab === 'location' ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded-md`}
          onClick={() => setActiveTab('location')}
        >
          Location
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'contact' ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded-md`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Us
        </button>
      </div>

      {activeTab === 'location' ? (
        <div className="w-full h-full bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <MapContainer center={center} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
              <Popup>
                École d'Ingénieurs (ECE Paris) Engineering School, 10 Rue Sextius Michel, 75015 Paris, France
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <div className="w-full h-fit bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
            Confence Location: École d'Ingénieurs (ECE Paris) Engineering School, 10 Rue Sextius Michel, 75015 Paris, France
          </p>
          <p className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
            Contact: Dr. Manolo Dulva Hina / Prof. Amar Ramdane-Cherif / Bikram Pratim Bhuyan
          </p>
          <p className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
            Mobile: +33-745473948
          </p>
          <p className="text-justify font-bold text-grey text-opacity md:text-lg w-80 md:w-full mb-5">
            E-Mail: bikram-pratim.bhuyan@universite-paris-saclay.fr
          </p>
        </div>
      )}
    </section>
  );
};

export default FaqSection;
