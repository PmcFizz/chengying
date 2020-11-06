function ShowEffect(props) {
  return(
    <div className="show-effect-wrap">
      <div className={`effect-block ${props.libMainClass}`} id={`effect-${props.libName}`} >
      </div>
    </div>
  )
}
export default ShowEffect