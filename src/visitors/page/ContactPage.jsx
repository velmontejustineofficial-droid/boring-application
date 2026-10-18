import PageHeader from "../../app/components/PageHeader";
import ArrowButton from "../ui/ArrowButton";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import './css/ContactPage.css'; // Optional CSS file mo

export default function ContactPage() {
  
  // Array ng iyong contact details
  const contactInfo = [
    {
      title: "Email Us",
      value: "support@example.com",
      description: "Mag-email sa amin anumang oras.",
      icon: <FaEnvelope />
    },
    {
      title: "Call Us",
      value: "+63 912 345 6789",
      description: "Lunes hanggang Biyernes, 9am - 5pm.",
      icon: <FaPhoneAlt />
    },
    {
      title: "Visit Us",
      value: "Manila, Philippines",
      description: "Pumunta sa aming pangunahing opisina.",
      icon: <FaMapMarkerAlt />
    }
  ];

  return (
    <div className="contact-page-container">
      <ArrowButton />
      <PageHeader 
        title="Contact Us" 
        subtitle="Makipag-ugnayan sa amin para sa iyong mga katanungan at mensahe."
        icon={<FaEnvelope />}
      />

      {/* Grid Section para sa Contact Info Cards */}
      <div className="contact-grid-container">
        {contactInfo.map((item, index) => (
          <div className="contact-card" key={index}>
            <div className="contact-card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="contact-value">{item.value}</p>
            <p className="contact-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}