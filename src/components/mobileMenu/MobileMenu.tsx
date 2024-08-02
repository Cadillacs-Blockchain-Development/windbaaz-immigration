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
  const [openMainMenu, setOpenMainMenu] = useState<string | null>(null);
  const [openSubmenus, setOpenSubmenus] = useState<Map<string, string | null>>(new Map());

  const handleMainMenuToggle = (key: string) => {
    setOpenMainMenu(prev => (prev === key ? null : key));
  };

  const handleSubmenuToggle = (mainKey: string, subKey: string) => {
    setOpenSubmenus(prev => {
      const newSubmenus = new Map(prev);
      const currentOpenSubmenu = newSubmenus.get(mainKey);
      newSubmenus.set(mainKey, currentOpenSubmenu === subKey ? null : subKey);
      return newSubmenus;
    });
  };

  const handleMenuToggle = () => {
    setOpen(prev => !prev);
    if (isOpen) {
      setOpenMainMenu(null);
      setOpenSubmenus(new Map());
    }
  };

  const renderSubmenu = (submenu: MenuItem[], mainKey: string) => {
    return (
      <ul className="pl-4 border-t border-gray-200 py-1 mt-2">
        {submenu.map((subitem) => (
          <li key={subitem.key} className="py-1 cursor-pointer">
            <div className="flex justify-between items-center">
              <a href={subitem.link}>{subitem.label}</a>
              {subitem.submenu && (
                <span onClick={(e) => { e.stopPropagation(); handleSubmenuToggle(mainKey, subitem.key); }} className="cursor-pointer">
                  {openSubmenus.get(mainKey) === subitem.key ? (
                    <LuMinus size={13} />
                  ) : (
                    <LuChevronDown size={13} />
                  )}
                </span>
              )}
            </div>
            {subitem.submenu && openSubmenus.get(mainKey) === subitem.key && renderSubmenu(subitem.submenu, mainKey)}
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
      <div  style={{zIndex:-1}} className={`fixed top-[86px] z-0 bg-white sm:top-[98px] left-0 w-full h-fit pb-2  transition-transform duration-700 ${isOpen ? "translate-y-0" : "-translate-y-[500px]"}`}>
        <ul className="p-4">
          {menuData.map((item) => (
            <li key={item.key} className="py-2 cursor-pointer">
              <div className="flex justify-between items-center">
                <a href={item.link}>{item.label}</a>
                {item.submenu && (
                  <span onClick={(e) => { e.stopPropagation(); handleMainMenuToggle(item.key); }} className="cursor-pointer">
                    {openMainMenu === item.key ? (
                      <LuMinus size={13} />
                    ) : (
                      <LuPlus size={13} />
                    )}
                  </span>
                )}
              </div>
              {item.submenu && openMainMenu === item.key && renderSubmenu(item.submenu, item.key)}
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
