
import ClassItem from '../ClassItem'
function LibItem(props) {
  const { libdata } = props
  const classItemArr = libdata.classArr.map(x => {
    return <ClassItem libMainClass={libdata.libMainClass} prefix={libdata.prefix} itemClass={x} key={x} />
  })
  return (
    <div className="npm-item">
      { classItemArr}
    </div>
  );
}

export default LibItem;
