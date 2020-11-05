
import ClassItem from '../ClassItem'
import ShowEffect from '../ShowEffect'
function LibItem(props) {
  const { libdata } = props
  const classItemArr = libdata.classArr.map(x => {
    return <ClassItem libMainClass={libdata.libMainClass} prefix={libdata.prefix} itemClass={x} key={x} />
  })
  return (
    <div className="npm-item">
      <ShowEffect libName={libdata.libName} />

      { classItemArr}
    </div>
  );
}

export default LibItem;
