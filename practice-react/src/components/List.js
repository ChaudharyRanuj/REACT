
export const List = ({ data, func }) => {
  return (
    <ul className="flex flex-col w-full"  >
      {data &&
        data.length > 0 &&
        data.map(func)}
    </ul>
  );
};
