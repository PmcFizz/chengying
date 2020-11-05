function ClassItem(props) {
  const { itemClass, libMainClass, prefix } = props
  const prefixClass = prefix ? prefix : ""
  const hoverClass = `${prefixClass}${itemClass}`

  function enterClassItem(e) {
    const targetEl = e.target
    targetEl.classList.add(targetEl.dataset.hoverclass)
    e.preventDefault();
  }

  function leaverClassItem(e) {
    // const targetEl = e.target
    // targetEl.classList.remove(targetEl.dataset.hoverclass)
    e.preventDefault();
  }

  return (
    <div
      className={`class-item ${libMainClass}`}
      data-hoverclass={hoverClass}
      onMouseLeave={leaverClassItem}
      onMouseEnter={enterClassItem}>{itemClass}</div>
  )
}

export default ClassItem