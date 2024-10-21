import { FaEnvelope } from "react-icons/fa";

// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm flex items-center flex-col justify-center">
          &copy; {new Date().getFullYear()} Henrique Fernandes
          <FaEnvelope className="ml-1 mr-1" /> 
          henriquefernandes.gouveia@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
