function ClassItem(props) {
  const { itemClass, libMainClass, prefix, clickItem } = props
  const prefixClass = prefix ? prefix : ""
  const hoverClass = `${prefixClass}${itemClass}`
  return (
    <div
      className={`class-item ${libMainClass}`}
      data-hoverclass={hoverClass}
      onClick={clickItem} >{itemClass}</div>
  )
}

export default ClassItem