/** Admin demo data. */
export const ADMIN_USERS=[
  {label:"Lab Technician",email:"tech@m19lab.com",pass:"m19tech",role:"technician",name:"Kavita Sharma"},
  {label:"Super Admin (Dev)",email:"dev@m19lab.com",pass:"m19dev",role:"superadmin",name:"Rohan Mehta"},
  {label:"Management",email:"mgmt@m19lab.com",pass:"m19mgmt",role:"management",name:"Swasti Dey"},
];

export const LAB_ORDERS=[
  {id:"M19-2026-0418",client:"Serum Institute of India",test:"Filter Integrity Testing × 8",std:"USP <1207>",received:"18 Mar",eta:"20 Mar",status:"Testing",priority:"High",tech:"Kavita S."},
  {id:"M19-2026-0415",client:"Bharat Biotech",test:"Pore Size Distribution × 3",std:"ASTM E1294",received:"17 Mar",eta:"19 Mar",status:"Report Pending",priority:"High",tech:"Arjun P."},
  {id:"M19-2026-0412",client:"Reliance Industries",test:"MVTR Testing × 12",std:"ASTM E96",received:"15 Mar",eta:"17 Mar",status:"Completed",priority:"Med",tech:"Kavita S."},
  {id:"M19-2026-0409",client:"DRDO — CBRDE",test:"Material Qualification (MVTR + AP)",std:"MIL-STD-810",received:"14 Mar",eta:"18 Mar",status:"Testing",priority:"High",tech:"Nikhil R."},
  {id:"M19-2026-0406",client:"Hindustan Unilever",test:"Air Permeability × 6 fabrics",std:"ISO 9237",received:"13 Mar",eta:"16 Mar",status:"Report Ready",priority:"Med",tech:"Arjun P."},
  {id:"M19-2026-0401",client:"Sun Pharmaceutical",test:"Bubble Point × 4 filters",std:"ASTM F316",received:"11 Mar",eta:"13 Mar",status:"Delivered",priority:"Low",tech:"Kavita S."},
];

export const TICKETS=[
  {id:"TKT-0089",client:"Serum Institute",subject:"Can I get raw data alongside PDF report?",time:"2h ago",status:"Open",priority:"Med"},
  {id:"TKT-0088",client:"Reliance Industries",subject:"Invoice discrepancy — GST amount query",time:"5h ago",status:"Open",priority:"High"},
  {id:"TKT-0087",client:"IIT Bombay",subject:"Access to PoreSense Cloud not working after signup",time:"1d ago",status:"In Progress",priority:"Med"},
  {id:"TKT-0086",client:"Bharat Biotech",subject:"Request for expedited turnaround on next batch",time:"2d ago",status:"Resolved",priority:"Low"},
];

export const SKUS=[
  {id:"FIA",name:"Filter Integrity Analyzer",cat:"Instrument",price:"₹8,40,000",stock:"In Stock",active:true},
  {id:"MPA",name:"Micropore Analyser",cat:"Instrument",price:"₹12,50,000",stock:"In Stock",active:true},
  {id:"DFT-S1",name:"Diffusional Flow Tester (Single)",cat:"Instrument",price:"₹4,20,000",stock:"In Stock",active:true},
  {id:"MVTR-PRO",name:"MVTR Pro Tester",cat:"Instrument",price:"₹6,80,000",stock:"3 units",active:true},
  {id:"BPT",name:"Bubble Point Tester",cat:"Instrument",price:"₹3,10,000",stock:"In Stock",active:true},
  {id:"AMC-FIA",name:"FIA Annual Maintenance Contract",cat:"Service",price:"₹84,000/yr",stock:"—",active:true},
  {id:"LAB-FIT",name:"Filter Integrity Testing (per sample)",cat:"Lab Test",price:"₹2,800",stock:"—",active:true},
  {id:"LAB-PSD",name:"Pore Size Distribution",cat:"Lab Test",price:"₹4,200",stock:"—",active:true},
  {id:"LAB-MVTR",name:"MVTR Testing (per sample)",cat:"Lab Test",price:"₹1,800",stock:"—",active:true},
];

