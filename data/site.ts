import {Baby, HeartHandshake, House, PersonStanding, ShieldPlus, Stethoscope} from "lucide-react";

export const contact={name:"Thangam Hospitals",location:"Kandigai, Chennai",phoneDisplay:"Phone number to be confirmed",phoneHref:"#contact",address:"Full street address to be confirmed",mapsHref:"https://www.google.com/maps/search/?api=1&query=Kandigai%2C%20Chennai"};
export const navigation=[{label:"About",href:"/about"},{label:"Specialities",href:"/specialities"},{label:"Doctors",href:"/doctors"},{label:"Home Healthcare",href:"/home-healthcare"},{label:"Contact",href:"/contact"}];
export const services=[
 {slug:"womens-health",title:"Women’s Health",short:"Support for women through every stage of life, including obstetrics and gynaecology.",icon:HeartHandshake},
 {slug:"paediatrics",title:"Paediatrics",short:"Thoughtful medical care for babies, children and adolescents.",icon:Baby},
 {slug:"elderly-care",title:"Elderly Care",short:"Respectful, coordinated care focused on comfort, independence and dignity.",icon:PersonStanding},
 {slug:"home-healthcare",title:"Home Healthcare",short:"Request a doctor or care visit for a patient who is more comfortable at home.",icon:House},
 {slug:"general-medicine",title:"General Medicine",short:"A clear first point of care for common health concerns and ongoing conditions.",icon:Stethoscope},
 {slug:"emergency-care",title:"Emergency Care",short:"Emergency care is available. Please call ahead when possible for current guidance.",icon:ShieldPlus},
];
export const values=[{title:"Compassion",text:"We listen with empathy and care for every person with kindness."},{title:"Dignity & respect",text:"Every patient and family deserves privacy, clarity and respect."},{title:"Clinical excellence",text:"We aim for responsible, evidence-led care and continuous improvement."},{title:"Integrity",text:"We communicate honestly and act in the patient’s best interest."},{title:"Teamwork",text:"Care improves when clinicians, families and communities work together."},{title:"Innovation",text:"We welcome practical ideas that make care safer and more accessible."}];
export const doctors=[1,2,3].map((id)=>({id,name:"Doctor profile to be confirmed",qualification:"Qualifications will be added after verification",speciality:id===1?"Women’s Health":id===2?"Paediatrics":"General Medicine",timing:"Consultation schedule to be confirmed",profile:"A verified introduction and clinical profile will appear here."}));
