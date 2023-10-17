import React from 'react';

type IconProps = {
    action: () => void;
    icon: React.ElementType
}

export const Icon = (props: IconProps) => {
    const handleClick = () => {
        props.action();
    }
    return (
        <div onClick={handleClick}>
            <props.icon />
        </div>
    );
}


