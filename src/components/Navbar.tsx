import React, { useState } from "react";
import { MdPhone } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import OnHoverCards from "./cards/OnHoverCards";

const Navbar = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const navLinks = [
        {
            title: "Immigrate",
            url: "#",
            icon: <RiArrowDropDownLine />,
            dropdownCardData: [
                {
                    title: "Express Entry",
                    url: "#",
                },
                {
                    title: "Atlantic Immigration Plan",
                    url: "#",
                },
                {
                    title: "Caregiver Program",
                    url: "#",
                },
                {
                    title: "Provincial Nominee Program",
                    url: "#",
                }
            ]
        },
        {
            title: "Work",
            url: "#",
            icon: <RiArrowDropDownLine />,
            dropdownCardData: [
                {
                    title: "Open work permit",
                    url: "#",
                },
                {
                    title: "Post Graduation Work Permit",
                    url: "#",
                },
                {
                    title: "LMIA Owner/Operator work permit",
                    url: "#",
                },
                {
                    title: "NFTA - Work Permit",
                    url: "#",
                }
            ]
        },
        {
            title: "Study in Canada",
            url: "#",
        },
        {
            title: "Citizenship",
            url: "#",
        },
        {
            title: "Temporary Visa",
            url: "#",
            icon: <RiArrowDropDownLine />,
            dropdownCardData: [
                {
                    title: "Visitor Visa",
                    url: "#",
                },
                {
                    title: "Super Visa",
                    url: "#",
                },
            ]
        },
        {
            title: "Business",
            url: "#",
        },
    ];

    return (
        <div className="flex justify-between py-[20px] container mx-auto fm-lato text-sm text-[#333333] font-normal">
            <div>
                <img
                    src="https://windmillimmigration.ca/wp-content/uploads/2022/09/wis-logo-new.svg"
                    alt="Google Logo"
                />
            </div>
            <div>
                <div className="flex items-center justify-end space-x-2">
                    <span>Home</span>
                    <span className="mx-2">|</span>
                    <span className="flex items-center space-x-1">
                        <MdPhone className="inline-block" />
                        <span>Contact Us</span>
                    </span>
                    <span>+1 902 333 7007</span>
                </div>
                <div className="flex gap-10 mt-4">
                    <ul className="flex space-x-[20px]">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className="flex items-center relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <a
                                    href={link.url}
                                    className="text-[#333333] hover:text-[#cc210a] text-[15px] font-normal"
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    {link.title}
                                </a>
                                {link.icon && (
                                    <RiArrowDropDownLine
                                        color={hoveredIndex === index ? "#cc210a" : "black"}
                                    />
                                )}

                                <div
                                    className={`absolute top-full left-0 mt-2 duration-300 ease-in-out z-30 ${hoveredIndex === index
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 invisible translate-y-2"
                                        }`}
                                >
                                    {link.dropdownCardData && (
                                        <OnHoverCards cardData={link.dropdownCardData} />
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* <PrimaryBtn title="Free Assessment" /> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
