function ShowEffect(props) {
  return(
    <div className="show-effect-wrap">
      <div className={`effect-block ${props.libName}`} id={`effect-${props.libName}`} >
      </div>
    </div>
  )
}
export default ShowEffect