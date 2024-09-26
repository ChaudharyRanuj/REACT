export const Label = (props, text) => {
  return (
    <label {...props} className="font-bold text-gray-800">
      {text}
    </label>
  );
};
