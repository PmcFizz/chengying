
import ClassItem from '../ClassItem'
import ShowEffect from '../ShowEffect'
function LibItem(props) {

  const { libdata } = props
  const classItemArr = libdata.classArr.map(x => {
    return <ClassItem libMainClass={libdata.libMainClass} prefix={libdata.prefix} itemClass={x} key={x} clickItem={ clickClassItem } />
  })
  
  function clickClassItem(e) {
    let currentClass = e.target.dataset.hoverclass
    document.querySelector(`#effect-${libdata.libName}`).setAttribute('class', `effect-block ${libdata.libMainClass} ${currentClass}`)
    setTimeout(function(){
      document.querySelector(`#effect-${libdata.libName}`).setAttribute('class', `effect-block ${libdata.libMainClass}`)
    },2000)
    // document.querySelector(`#effect-${libdata.libName}`).classList.add(currentClass)    
  }

  return (
    <div className="npm-item">
      <ShowEffect libName={libdata.libName} libMainClass={libdata.libMainClass}  />

      { classItemArr}
    </div>
  );
}

export default LibItem;
