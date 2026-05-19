import { C } from "../../theme/colors.js";

export const Eyebrow=({c,children})=><div className="section-eyebrow" style={c?{color:c}:{}}>{children}</div>;
export const Serif=({size=48,weight=300,color=C.white,mb=0,italic,children,style={}})=>(
  <div style={{fontFamily:"var(--font-serif)",fontSize:size,fontWeight:weight,
    color,lineHeight:1.1,marginBottom:mb,...style}}>
    {italic?<em style={{fontStyle:"italic",color:C.gold}}>{children}</em>:children}
  </div>
);
export const Mono=({size=10,color=C.slate,spacing=2,children})=>(
  <div style={{fontFamily:"'DM Mono',monospace",fontSize:size,color,letterSpacing:spacing,textTransform:"uppercase"}}>{children}</div>
);

export const UIIcon=({src,alt="",size=24,style={}})=>{
  if(!src) return null;
  const isImg=typeof src==="string" && /\.(png|webp|jpg|jpeg|svg)$/i.test(src);
  if(!isImg) return <span style={{fontSize:size,lineHeight:1,...style}}>{src}</span>;
  const url=src.startsWith("/")?src:`/icons/${encodeURIComponent(src)}`;
  return (
    <img
      src={url}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      style={{width:size,height:size,objectFit:"contain",display:"block",opacity:0.92,...style}}
    />
  );
};
export const FLabel=({children})=><label className="form-label">{children}</label>;
export const FInput=({icon,type="text",placeholder,value,onChange})=>(
  <div className={icon?"form-icon-wrap":""}>
    {icon&&<span className="form-icon">{icon}</span>}
    <input className="form-input" type={type} placeholder={placeholder} value={value||""} onChange={onChange}/>
  </div>
);
export const FSelect=({value,onChange,placeholder,options=[]})=>(
  <select className="form-select" value={value||""} onChange={onChange}>
    {placeholder&&<option value="">{placeholder}</option>}
    {options.map(o=><option key={o} value={o}>{o}</option>)}
  </select>
);
export const Btn=({children,variant="gold",size="",full,onClick,style={}})=>{
  const cls=`btn btn-${variant}${size?` btn-${size}`:""}${full?" btn-full":""}`;
  return <button className={cls} onClick={onClick} style={style}>{children}</button>;
};
export const Badge=({children,color=C.teal})=>(
  <span className="badge" style={{background:`${color}22`,border:`1px solid ${color}44`,color}}>{children}</span>
);
export const Card=({children,style={},onClick})=>(
  <div className={`card${onClick?" card-hover":""}`} onClick={onClick} style={{cursor:onClick?"pointer":"default",...style}}>{children}</div>
);
export const StatCard=({label,value,sub,icon,color=C.gold})=>(
  <Card style={{padding:"20px 24px"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
      <div>
        <Mono size={9} color={C.slate} spacing={2} style={{marginBottom:8}}>{label}</Mono>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color,lineHeight:1}}>{value}</div>
        {sub&&<div style={{fontSize:11,color:C.slate,marginTop:4}}>{sub}</div>}
      </div>
      {icon&&<UIIcon src={icon} alt={label} size={24} style={{opacity:0.7}}/>}
    </div>
  </Card>
);
export const ProgressBar=({value,color=C.teal,label})=>(
  <div>
    {label&&<div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
      <span style={{fontSize:11,color:C.slate}}>{label}</span>
      <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:C.white}}>{value}%</span>
    </div>}
    <div className="progress-track">
      <div className="progress-fill" style={{width:`${value}%`,background:color}}/>
    </div>
  </div>
);
export const Pill=({children,active,onClick,variant="teal"})=>(
  <span onClick={onClick} className={`pill${active?` active-${variant}`:""}`}>{children}</span>
);
