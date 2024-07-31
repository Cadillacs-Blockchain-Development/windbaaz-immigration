interface BtnProps {
    title: string;
}

const PrimaryBtn = ({ title }: BtnProps) => {
    return (
        <button className="bg-[#cc210a] text-white text-base hover:opacity-80 border-1 border-[#cc210a]">
            {title}
        </button>
    )
}

const SecondaryBtn = ({ title }: BtnProps) => {
    return (
        <button className="bg-[#cc210a] px-[20px] py-[10px] text-white text-base hover:opacity-80 border-1 border-[#cc210a]">
            {title}
        </button>
    )
}

export { PrimaryBtn, SecondaryBtn }