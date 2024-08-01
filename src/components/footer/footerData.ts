import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdAccessTime, MdPhone, MdEmail } from 'react-icons/md';
import logo from "../../assets/icon/wis-logo-new-footer.svg"
export const footerData = {
  logo: {
    src: logo,
    alt: "WIS Canada Logo"
  },
  socialLinks: [
    { name: "facebook", url: "https://www.facebook.com/people/Windmill-Immigration-Services/100088921004340/", icon: FaFacebookF },
    { name: "twitter", url: "https://www.twitter.com", icon: FaTwitter },
    { name: "linkedin", url: "https://www.linkedin.com/company/windmill-immigration-services-inc/", icon: FaLinkedinIn },
    { name: "instagram", url: "https://www.instagram.com/windmill_immigration/", icon: FaInstagram },
    { name: "youtube", url: "https://www.youtube.com", icon: FaYoutube }
  ],
  copyright: "© 2022 All rights reserved  |  Windmill Immigration Services Inc.",
  companyLinks: [
    { name: "Home", url: "https://windmillimmigration.ca/" },
    { name: "Immigrate", url: "https://windmillimmigration.ca/immigrate/" },
    { name: "Contact Us", url: "https://windmillimmigration.ca/contact-us/" }
  ],
  contactInfo: [
    { icon: MdLocationOn, text: "Dartmouth, Novascotia, Canada" },
    { icon: MdAccessTime, text: "Mon–Sat: 10:00 AM–5:00 PM\nSunday: Closed" },
    { icon: MdPhone, text: "+1 902 333 7007" },
    { icon: MdEmail, text: "info@windmillimmigration.ca" }
  ]
};
