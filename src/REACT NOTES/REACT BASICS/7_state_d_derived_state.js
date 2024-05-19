// items state is  passed as parameter in function Stats.
function Stats({ items }) {
  if (items.length === 0)
    return <p className="stats">Add Some Items to packing List</p>;
  //******************  DERIVED STATE *****************
  const numLength = items.length;
  const itemPacked = items.filter((item) => item.packed === true).length;
  const percentPacked = Math.floor((itemPacked / numLength) * 100);
  // NOTE: If content two render in available in state than get value from state
  // save in variable.
  //******************  DERIVED STATE *****************
  return (
    <footer className="stats">
      <em>*******
        {percentPacked === 100
          ? `You have packed all the items. You are ready to go ✈`
          : ` You have ${numLength} items in your list, and you are already packed ${itemPacked}`}
        ({percentPacked}%)
      </em>
    </footer>
  );
}
