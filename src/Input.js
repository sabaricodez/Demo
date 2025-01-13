export default Input=({label="Input",value="",onChangeText,type="text"})=>{
    return(
     <div style={{display:'flex',flexDirection:'column',gap:5}}>
    <label for={label}style={{display:'flex'}}>{label}</label>
    <input id={label} type={type} style={{height:25,borderRadius:5}}
    onChange={(e)=>onChangeText(label,e.target.value)}
    />
     </div>
    )
}