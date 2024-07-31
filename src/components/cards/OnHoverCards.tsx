import React, { memo } from "react"

interface CardData {
    title: string;
    url: string;
}

interface OnHoverCardsProps {
    cardData: CardData[];
}

const OnHoverCards: React.FC<OnHoverCardsProps> = ({ cardData }) => {
    return (
        <div className="text-black p-4 min-w-[300px] bg-white shadow-md z-30">
            {cardData.map((card, index) => (
                <a key={index} href={card.url} className="block py-2 hover:text-[#cc210a] ">
                    {card.title}
                </a>
            ))}
        </div>
    )
}

export default memo(OnHoverCards)