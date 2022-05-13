type Props = {
	children: JSX.Element | JSX.Element[];
	className?: string;
};

export function Container({ children, className }: Props) {
	return <div className={`w-[80%] max-w-[1445px] mx-auto lg:p-1 ${className}`}>{children}</div>;
}
