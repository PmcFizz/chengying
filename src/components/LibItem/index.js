function LibItem(props) {
  const {libdata} = props
  return (
    <div className="npm-item">{libdata.libname}</div>
  );
}

export default LibItem;
