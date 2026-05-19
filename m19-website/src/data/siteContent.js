/** Marketing copy, demo users, and catalogue constants. */
import { C } from "../theme/colors.js";

export const SERVICES=[
  {icon:"pharma.png",name:"Pharmaceuticals & Biotech",desc:"Filter integrity, container closure, particulate analysis under GMP.",standards:["21 CFR Part 211","ICH Q10","USP <1207>"]},
  {icon:"Air Filtration.png",name:"Filtration & Membranes",desc:"Pore size, bubble point, integrity and flow characterisation.",standards:["ISO 4003","ASTM F316","USP <1207>"]},
  {icon:"Defense.png",name:"Defence & Aerospace",desc:"MVTR, tear strength, ballistic backing, MIL-SPEC qualification.",standards:["MIL-STD-810","IS 11239","DRDO Specs"]},
  {icon:"Technical Textile.png",name:"Technical Textiles",desc:"Air permeability, MVTR, pore size, Frazier and Gurley methods.",standards:["ISO 9237","IS 11169","NTTM Standards"]},
  {icon:"oil-gas.png",name:"Oil, Gas & Refinery",desc:"Fuel filter rating, coalescer performance, hydraulic filter testing.",standards:["ISO 16889","SAE J1858","ISO 19438"]},
  {icon:"Water Filtration.png",name:"Water Purification",desc:"Membrane integrity, UF pore characterisation, RO testing.",standards:["ASTM D6908","ISO 15901","USEPA Methods"]},
];
export const PLATFORM_TIERS={
  lab:{name:"Lab Testing & Membership",icon:"▣",color:C.teal,tiers:["Essential","Professional","Enterprise"],
    features:{0:["Submit test requests","Download reports","Order tracking","Basic invoicing"],
               1:["All Essential +","Membership pricing","BI dashboard","Custom news feed"],
               2:["All Professional +","AI quality assistant","Predictive analytics","API access","Priority turnaround"]}},
  inst:{name:"Instrument User",icon:"◈",color:C.navyMid,tiers:["Connect","Analytics","Intelligence"],
    features:{0:["Connect 1 instrument","Basic cloud sync","PDF reports","Email alerts"],
               1:["All Connect +","Unlimited instruments","BI dashboards","SPC analytics"],
               2:["All Analytics +","PoreSense AI","Predictive alerts","LIMS/ERP integration"]}},
  acad:{name:"Academic / Student",icon:"▦",color:C.purple,tiers:["Explorer","Scholar","Fellow"],
    features:{0:["Browse all content","10 free course hours","Community access","Basic certificates"],
               1:["All Explorer +","Unlimited courses","Full certifications","Video library"],
               2:["All Scholar +","Research tools","Publication support","Mentorship sessions"]}},
};
export const DEMO_USERS=[
  {label:"Lab Testing — Enterprise",email:"lab@demo.com",pass:"demo",type:"lab",tier:"Enterprise",name:"Dr. Priya Nair",org:"Serum Institute of India"},
  {label:"Instrument User — Analytics",email:"inst@demo.com",pass:"demo",type:"inst",tier:"Analytics",name:"Rajesh Kumar",org:"Reliance Industries"},
  {label:"Academic — Scholar",email:"acad@demo.com",pass:"demo",type:"acad",tier:"Scholar",name:"Arjun Shah",org:"IIT Bombay"},
  {label:"All-Access — Enterprise",email:"all@demo.com",pass:"demo",type:"all",tier:"Enterprise",name:"Swasti Dey",org:"M19 Material Intelligence Lab"},
];
export const INDUSTRY_SEGMENTS=["Pharmaceuticals & Biotech","Defence & Aerospace","Technical Textiles","Filtration & Membranes","Oil, Gas & Refinery","Water Purification","Chemical","Automotive","Research & Academia","Government / PSU","Other"];
export const TEST_TYPES=["Filter Integrity","Pore Size Distribution","Bubble Point","Diffusional Flow","MVTR","Air Permeability","Particulate Analysis","Material Qualification"];
export const STANDARDS=["USP <1207>","21 CFR Part 11","ISO 9237","ASTM F316","IS 11239","ASTM E96","ISO 16889","MIL-STD-810","DRDO Specs","ISO 15901","GAMP 5"];
export const COURSES=[
  {title:"Filter Integrity & Pore Science Fundamentals",progress:72,modules:12,dur:"8h",icon:"◈",cert:true},
  {title:"21 CFR Part 11 Compliance for Lab Data",progress:45,modules:8,dur:"5h",icon:"▣",cert:true},
  {title:"Statistical Process Control in Material Testing",progress:15,modules:10,dur:"6h",icon:"▦",cert:false},
  {title:"PoreSense Platform Certification",progress:0,modules:6,dur:"4h",icon:"◆",cert:true},
];
export const NEWS=[
  {date:"17 Mar",tag:"Regulatory",title:"FDA issues updated guidance on sterilising-grade filter validation — key changes for 2026",cat:"Pharma"},
  {date:"15 Mar",tag:"M19",title:"PoreSense Analytics v2.1 now includes automated SPC chart generation with OOT flagging",cat:"Platform"},
  {date:"12 Mar",tag:"Standards",title:"ISO 16889:2025 update released — hydraulic filter testing protocols revised",cat:"Oil & Gas"},
  {date:"08 Mar",tag:"Research",title:"New study: Diffusional flow correlation with bacterial retention in pharmaceutical filtration",cat:"Science"},
];
