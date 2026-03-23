import React from "react";

export interface VKIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const VKIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}: VKIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      {...props}
    >
      <g transform="scale(0.75) translate(-12 -10)">
        <path d="M25.2 33.2c-9 0-14.1-6.1-14.3-16.4h4.5c.1 7.5 3.5 10.7 6.1 11.3V16.8h4.2v6.5c2.6-.3 5.3-3.2 6.2-6.5h4.2c-.7 4-3.7 7-5.8 8.2 2.1 1 5.5 3.6 6.7 8.2h-4.7c-1-3.1-3.5-5.5-6.8-5.9v5.9h-.3z" />
      </g>
    </svg>
  );
};
