export const Suggestion = function ({ data, onClick }) {
  return (
    <ul>
      {data.map((name) => (
        <li key={name} onClick={onClick}>
          {name}
        </li>
      ))}
    </ul>
  );
};
