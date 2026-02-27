import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	variant?: "outline" | "solid";
	className?: string;
	onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "outline",
	className = "",
	onClick,
	type = "button",
}) => {
	const base =
		"px-8 py-3 font-regular text-sm tracking-widest uppercase transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black";
	const outline =
		"bg-transparent border border-black text-black hover:bg-black hover:text-white";
	const solid =
		"bg-[#d1cabd] border border-[#d1cabd] text-black hover:bg-black hover:text-white";

	const variantClass = variant === "solid" ? solid : outline;

	return (
		<button
			type={type}
			onClick={onClick}
			className={`${base} ${variantClass} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
