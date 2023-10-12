'use client';

import { IconType } from "react-icons/lib";
import Image from "next/image";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    underline?: boolean;
    long?: boolean;
    icon?: IconType;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    underline,
    long,
    icon: Icon,
    loading,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            py-3
            px-6
            font-medium
            ${outline ? `` : `bg-white`}
            ${outline ? `gradient-border` : `border-none`}
            ${outline ? `text-white` : `text-black`}
            ${underline ? `underline border-none` : ``}
            ${long ? `w-full` : ``}
            `}
        >
            <div className={`
            flex
            flex-row
            gap-2
            justify-between
            items-center
            ${long ? `!justify-center` : ``} 
            `}>
                {loading ? <Image src={"/images/SpinnerLoader.gif"} width={30} height={20} alt="loader" /> : `${label}`}
                {Icon && (
                    <Icon
                        size={18}
                    />
                )}
            </div>
        </button>
    );
}

export default Button;