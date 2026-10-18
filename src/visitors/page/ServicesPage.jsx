import './css/ServicesPage.css';
import PageHeader from '../../app/components/PageHeader';
import ArrowButton from '../ui/ArrowButton';
import { FaServicestack, FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';

export default function ServicesPage() {
  
  // Array ng iyong mga serbisyo (pwede mo itong palitan o i-fetch galing API mamaya)
  const servicesList = [
    {
      title: "Web Development",
      description: "Paggawa ng mabilis, modern, at responsive web applications gamit ang React.",
      icon: <FaCode />
    },
    {
      title: "Mobile App Integration",
      description: "Pag-optimize ng mga web platform para maging seamless sa mga mobile devices.",
      icon: <FaMobileAlt />
    },
    {
      title: "Cloud Services",
      description: "Maayos na pag-deploy at pamamahala ng iyong mga database at server hosting.",
      icon: <FaCloud />
    }
  ];

  return (
    <div className="services-page-container">
      <ArrowButton />
      
      <PageHeader 
        title="Our Services" 
        subtitle="Tuklasin ang mga serbisyong handog namin para sa iyo."
        icon={<FaServicestack />}
      />

      {/* Grid Section para sa Services */}
      <div className="services-grid-container">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}