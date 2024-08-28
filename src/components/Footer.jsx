import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      {/* Footer Content */}
      <div className="container px-6 py-8 mx-auto md:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-6">
          
          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li><a href="/products/face-wash" className="hover:underline">Face Wash</a></li>
              <li><a href="/products/face-cleansers" className="hover:underline">Face Cleansers</a></li>
              <li><a href="/products/wipes" className="hover:underline">Wipes</a></li>
              <li><a href="/products/toners" className="hover:underline">Toners</a></li>
              <li><a href="/products/masks-peels" className="hover:underline">Masks & Peels</a></li>
              <li><a href="/products/moisturizers-creams" className="hover:underline">Moisturizers & Creams</a></li>
              <li><a href="/products/serum" className="hover:underline">Serum</a></li>
              <li><a href="/products/hair-care" className="hover:underline">Hair Care</a></li>
              <li><a href="/products/body-care" className="hover:underline">Body Care</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/laser-hair-removal" className="hover:underline">Laser Hair Removal</a></li>
              <li><a href="/services/acne" className="hover:underline">Acne</a></li>
              <li><a href="/services/anti-ageing" className="hover:underline">Anti-Ageing</a></li>
              <li><a href="/services/beauty-facial" className="hover:underline">Beauty-Facial</a></li>
              <li><a href="/services/hair-loss-treatment" className="hover:underline">Hair Loss Treatment</a></li>
              <li><a href="/services/skin-brightening" className="hover:underline">Skin Brightening Treatment</a></li>
              <li><a href="/services/hydrafacial" className="hover:underline">HydraFacial</a></li>
              <li><a href="/services/coolsculpting" className="hover:underline">CoolSculpting</a></li>
              <li><a href="/services/facials" className="hover:underline">Facials</a></li>
            </ul>
          </div>

          {/* Skin Type */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Skin Type</h3>
            <ul className="space-y-2">
              <li><a href="/skin-type/oily" className="hover:underline">Oily</a></li>
              <li><a href="/skin-type/sensitive" className="hover:underline">Sensitive</a></li>
              <li><a href="/skin-type/dry" className="hover:underline">Dry</a></li>
              <li><a href="/skin-type/combination" className="hover:underline">Combination</a></li>
              <li><a href="/skin-type/normal" className="hover:underline">Normal</a></li>
            </ul>
          </div>

          {/* Skin Concern */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Skin Concern</h3>
            <ul className="space-y-2">
              <li><a href="/skin-concern/acne-prone" className="hover:underline">Acne Prone</a></li>
              <li><a href="/skin-concern/anti-ageing" className="hover:underline">Anti Ageing</a></li>
              <li><a href="/skin-concern/pigmentation" className="hover:underline">Pigmentation</a></li>
              <li><a href="/skin-concern/dullness" className="hover:underline">Dullness</a></li>
              <li><a href="/skin-concern/dryness" className="hover:underline">Dryness</a></li>
            </ul>
          </div>

          {/* Hair Concern */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Hair Concern</h3>
            <ul className="space-y-2">
              <li><a href="/hair-concern/hair-fall" className="hover:underline">Hair Fall</a></li>
              <li><a href="/hair-concern/dandruff" className="hover:underline">Dandruff</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="/company/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/company/team" className="hover:underline">Team</a></li>
              <li><a href="/company/investor-relations" className="hover:underline">Investor Relations</a></li>
              <li><a href="/company/blog" className="hover:underline">Blog</a></li>
              <li><a href="/company/careers" className="hover:underline">Careers</a></li>
              <li><a href="/company/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/company/policies" className="hover:underline">Policies</a></li>
              <li><a href="/company/return-policy" className="hover:underline">Return Policy</a></li>
              <li><a href="/company/sitemap" className="hover:underline">Sitemap</a></li>
              <li><a href="/company/contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="/company/operational-clinics" className="hover:underline">Operational Clinics</a></li>
              <li><a href="/company/track-order" className="hover:underline">Track Order</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Social Media */}
      <div className="py-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4 space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-gray-400"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-gray-400"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-gray-400"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-gray-400"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
          <p className="text-xs">&copy; 2023 Kaya Skin Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
