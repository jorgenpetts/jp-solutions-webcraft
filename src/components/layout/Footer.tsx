import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-jp-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/f8057b8b-3f78-463d-832f-38fdbe38ee4e.png" 
              alt="JP Solutions Logo" 
              className="h-10 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-300 max-w-md">
              Innovative software solutions for modern businesses. 
              Based in Cape Town, South Africa, we deliver cutting-edge 
              technology solutions worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-jp-accent" />
                <span className="text-gray-300">Cape Town, South Africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-jp-accent" />
                <span className="text-gray-300">info@jpsolutions.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-jp-accent" />
                <span className="text-gray-300">+27 (0)21 XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-jp-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-jp-accent transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                © 2024 JP Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;