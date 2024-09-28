import { Link } from "react-router-dom";

export const Button = ({ children, size, props }) => {
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
export const ButtonSmall = (props) => {
  if (props.path) {
    return (
      <Link
        to={props.path}
        className="bg-blue-500 text-white rounded-md px-2 py-2 text-xs"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      {...props}
      className="bg-blue-500 text-white rounded-md px-2 py-2 text-xs"
    >
      {props.children}
    </button>
  );
};
