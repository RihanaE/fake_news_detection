export const Input = ({ className, ...props }) => {
    return (
      <input
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
        {...props}
      />
    );
  };
  