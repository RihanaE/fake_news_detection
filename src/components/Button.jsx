export const Button = ({ children, className, variant = "solid", ...props }) => {
    const baseStyles = "px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus:ring";
    const variants = {
      solid: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
      outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300",
    };
    return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  };
  