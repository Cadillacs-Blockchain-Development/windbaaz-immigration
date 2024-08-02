import React, { useState, memo } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface CardData {
    title: string;
    url: string;
    submenu?: CardData[];
}

interface OnHoverCardsProps {
    cardData: CardData[];
}


const OnHoverCards: React.FC<OnHoverCardsProps> = ({ cardData }) => {
    return (
        <div className="text-black p-4 min-w-[300px] bg-white shadow-md z-30 ">
            {cardData && cardData.length > 0 ? (
                cardData.map((card, index) => (
                    <CardItem key={index} card={card} />
                ))
            ) : (
                <div>No cards available</div>
            )}
        </div>
    );
};

const CardItem: React.FC<{ card: CardData }> = ({ card }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="w-full"
            onMouseEnter={() => setIsOpen(true)}  
            onMouseLeave={() => setIsOpen(false)}  
        >
            <a href={card.url} className="py-2 hover:text-[#cc210a] flex items-center justify-between">
                {card.title}
                {card.submenu && <MdKeyboardArrowRight size={18} className="ml-2" />}
            </a>
            {isOpen && card.submenu && <SubMenu cardData={card.submenu} />}
        </div>
    );
};

const SubMenu: React.FC<{ cardData: CardData[] }> = ({ cardData }) => {

    return (
        <div  className="ml-4 absolute top-3 py-2  bg-white left-[270px] px-4 w-[240px] " >
            {cardData.map((card, index) => (
                <div key={index} className="w-full">
                    <a href={card.url} className="py-1 hover:text-[#cc210a] flex items-center">
                        {card.title}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default memo(OnHoverCards);
