export const Button = ({ children, size }) => {
  if (size) {
    return (
      <button className="bg-blue-500 text-white rounded-md px-2 py-2 text-xs">
        {children}
      </button>
    );
  }
  return (
    <button className="bg-blue-500 text-white rounded-md px-2 py-2 text-base">
      {children}
    </button>
  );
};
