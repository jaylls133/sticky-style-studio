
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">StickerShop</h3>
            <p className="text-muted-foreground mb-4">
              Creative, high-quality stickers for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/stickers" className="hover:text-primary transition-colors">
                  All Stickers
                </Link>
              </li>
              <li>
                <Link to="/custom" className="hover:text-primary transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/bulk-order" className="hover:text-primary transition-colors">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Phone: 123-456-7890</li>
              <li>Email: hello@stickershop.com</li>
              <li>
                <Link to="/contact" className="text-primary hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} StickerShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
