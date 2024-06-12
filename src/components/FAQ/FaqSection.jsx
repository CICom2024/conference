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
          className={`px-4 py-2 mx-2 ${activeTab === 'howToReach' ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded-md`}
          onClick={() => setActiveTab('howToReach')}
        >
          How to Reach
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'contact' ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded-md`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Us
        </button>
      </div>

      {activeTab === 'location' && (
        <div className="w-full h-full bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <MapContainer center={center} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
              <Popup>
                École d'Ingénieurs (ECE Engineering School), 10 Rue Sextius Michel, 75015 Paris, France
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}

      {activeTab === 'howToReach' && (
        <div className="w-full h-full bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5" data-aos="fade-up">
            How to Reach
          </h1>
          <div className="text-white md:text-lg w-80 md:w-[50rem] lg:w-[45rem] mb-5 mx-auto">
            <p className="mb-5">
              CICom 2024 will be held at ECE École d'Ingénieurs (ECE Engineering School), 10 Rue Sextius Michel, 75015 Paris, France.
            </p>
            <p className="mb-5">
              Here are some ways to reach the venue:
            </p>
            <ul className="list-decimal list-inside">
              <li className="mb-3">
                <strong>By Air:</strong> The nearest airport is Charles de Gaulle Airport, which is approximately 30 km from the venue. From the airport, you can take a taxi or use public transport to reach the venue.
              </li>
              <li className="mb-3">
                <strong>By Train:</strong> The nearest train station is Gare Montparnasse, which is about 2 km from the venue. You can take a taxi or use public transport to reach the venue from the station.
              </li>
              <li className="mb-3">
                <strong>By Metro:</strong> The nearest metro station is Bir-Hakeim, which is a 5-minute walk from the venue.
              </li>
              <li className="mb-3">
                <strong>By Bus:</strong> Several bus lines stop near the venue. You can use the local bus service to reach the venue conveniently.
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="w-full h-fit bg-black bg-opacity-50 rounded-2xl p-8" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="text-justify font-bold text-white md:text-lg w-80 md:w-full mb-5">
            Conference Location: ECE École d'Ingénieurs (ECE Engineering School), 10 Rue Sextius Michel, 75015 Paris, France
          </p>
          <p className="text-justify font-bold text-white md:text-lg w-80 md:w-full mb-5">
            Contact: Dr. Manolo Dulva Hina / Prof. Amar Ramdane-Cherif / Bikram Pratim Bhuyan
          </p>
          <p className="text-justify font-bold text-white md:text-lg w-80 md:w-full mb-5">
            Mobile: +33-745473948
          </p>
          <p className="text-justify font-bold text-white md:text-lg w-80 md:w-full mb-5">
            E-Mail: cicom.lisv@gmail.com / bikram-pratim.bhuyan@universite-paris-saclay.fr
          </p>
        </div>
      )}
    </section>
  );
};

export default FaqSection;
