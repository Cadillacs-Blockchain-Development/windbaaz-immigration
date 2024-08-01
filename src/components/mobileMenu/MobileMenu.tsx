import React, { useState } from "react";
import { LuMenu, LuChevronDown, LuMinus, LuPlus } from "react-icons/lu";

interface MenuItem {
  label: string;
  link: string;
  key: string;
  submenu?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    label: "Immigrate",
    link: "https://windmillimmigration.ca/immigrate/",
    key: "1",
    submenu: [
      {
        label: "Express Entry",
        link: "https://windmillimmigration.ca/immigrate/express-entry/",
        key: "1-1",
        submenu: [
          { label: "Federal Skilled Worker Program", link: "https://windmillimmigration.ca/immigrate/federal-skilled-worker-program/", key: "1-1-1" },
          { label: "Canadian Experience Class", link: "https://windmillimmigration.ca/immigrate/canadian-experience-class/", key: "1-1-2" }
        ]
      },
      { label: "Atlantic Immigration Program", link: "https://windmillimmigration.ca/immigrate/atlantic-immigration-program/", key: "1-2" },
      { label: "Caregiver Program", link: "https://windmillimmigration.ca/immigrate/caregiver-program/", key: "1-3" },
      { label: "Provincial Nominee Programs", link: "https://windmillimmigration.ca/immigrate/provincial-nominee-programs/", key: "1-4" }
    ]
  },
  {
    label: "Work",
    link: "https://windmillimmigration.ca/work/",
    key: "2",
    submenu: [
      { label: "Open Work Permit", link: "https://windmillimmigration.ca/work/open-work-permit/", key: "2-1" },
      { label: "Post-Graduation Work Permit", link: "https://windmillimmigration.ca/sub-pgwp/", key: "2-2" },
      { label: "LMIA Owner/Operator Work Permit", link: "https://windmillimmigration.ca/lmia-owner-operator-work-permit/", key: "2-3" },
      { label: "NAFTA – Work Permit", link: "https://windmillimmigration.ca/work/nafta-work-permit/", key: "2-4" }
    ]
  },
  { label: "Study in Canada", link: "https://windmillimmigration.ca/study/", key: "3" },
  { label: "Citizenship", link: "https://windmillimmigration.ca/citizenship/", key: "4" },
  {
    label: "Temporary Visa",
    link: "https://windmillimmigration.ca/trv/",
    key: "5",
    submenu: [
      { label: "Visitor Visa", link: "https://windmillimmigration.ca/temporary-resident-visa/", key: "5-1" },
      { label: "Super Visa", link: "https://windmillimmigration.ca/trv/super-visa/", key: "5-2" }
    ]
  },
  { label: "Business", link: "https://windmillimmigration.ca/business/", key: "6" },
];

const MobileMenu: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = (key: string) => {
    setOpenSubmenu(prev => (prev === key ? null : key)); 
  };

  const handleMenuToggle = () => {
    setOpen(prev => !prev);
  };

  const renderSubmenu = (submenu: MenuItem[]) => {
    return (
      <ul className="pl-4 border-t border-gray-200 py-1 mt-2">
        {submenu.map((subitem) => (
          <li key={subitem.key} className="py-1 cursor-pointer">
            <div className="flex justify-between items-center">
              <a href={subitem.link}>{subitem.label}</a>
              {subitem.submenu && (
                <span onClick={(e) => { e.stopPropagation(); handleSubmenuToggle(subitem.key); }} className="cursor-pointer">
                  {openSubmenu === subitem.key ? (
                    <LuMinus size={12} />
                  ) : (
                    <LuChevronDown size={12} />
                  )}
                </span>
              )}
            </div>
            {subitem.submenu && openSubmenu === subitem.key && renderSubmenu(subitem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="relative font-fm-lato text-15px z-10">
      <button className="border py-2 px-4 rounded-md" onClick={handleMenuToggle}>
        <LuMenu size={24} />
      </button>
      <div className={`fixed top-[86px] sm:top-[98px] left-0 w-full h-fit pb-2 bg-white z-10 transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-[500px]"}`}>
        <ul className="p-4">
          {menuData.map((item) => (
            <li key={item.key} className="py-2 cursor-pointer">
              <div className="flex justify-between items-center">
                <a href={item.link}>{item.label}</a>
                {item.submenu && (
                  <span onClick={(e) => { e.stopPropagation(); handleSubmenuToggle(item.key); }} className="cursor-pointer">
                    {openSubmenu === item.key ? (
                      <LuMinus size={12} />
                    ) : (
                      <LuPlus size={12} />
                    )}
                  </span>
                )}
              </div>
              {item.submenu && openSubmenu === item.key && renderSubmenu(item.submenu)}
            </li>
          ))}
        </ul>
        <div className="flex justify-center pb-2 px-4">
          <a
            href="https://windmillimmigration.ca/free-assessment/"
            className="block bg-[#cc210a] text-white text-center py-[10px] px-4 free-assessment-button"
          >
            Free Assessment
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;