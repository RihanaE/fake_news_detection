export const Card = ({ children, className, ...props }) => {
    return (
      <div
        className={`bg-white shadow-sm rounded-lg overflow-hidden ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  