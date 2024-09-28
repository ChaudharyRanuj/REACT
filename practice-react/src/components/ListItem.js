
export const ListItem = ({ list ,children }) => {
  return (
    <li className="border-b-2 border-gray-200 flex justify-between w-full m-2">
      <div className="container flex items-center gap-4">
        <span className=" bg-gray-200 rounded-full text-xs p-4">{list.id}</span>
        <div className="flex flex-col">
          <span>{list.name}</span>
          <span>{list.email}</span>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        {children}
      </div>
    </li>
  );
};
