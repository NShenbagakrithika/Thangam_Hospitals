// Central content + data for Thangam Hospitals.

export const site = {
  name: "Thangam Hospitals",
  tagline: "Making Healthcare Accessible & Affordable",
  locationsSummary: "Kandigai · Urapakkam",
  helpline: "+91 98400 12345",
  helplineDisplay: "98400 12345",
};

export type Doctor = {
  id: string;
  name: string;
  speciality: string;
  departmentSlug: string;
  locations: string[];
  photo?: string;
  experienceYears: number;
  qualifications: string;
  languages: string[];
  timings: string;
  bio: string;
  keywords: string[];
};

export type Department = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  treatments: string[];
  keywords: string[];
  featured: boolean;
};

export type Branch = {
  id: string;
  name: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  hours: string;
  emergency: string;
  directionsUrl: string;
};

export type Service = {
  id: string;
  name: string;
  route: string;
  icon: string;
  short: string;
  keywords: string[];
};

export const departments: Department[] = [
  {
    slug: "geriatrics",
    name: "Geriatrics",
    icon: "heartPulse",
    tagline: "Whole-person care for ageing well.",
    description:
      "Our flagship geriatric programme looks after older adults as whole people — combining medicine, mobility, nutrition and family support so that ageing is healthier, safer and more dignified.",
    treatments: [
      "Comprehensive geriatric assessment",
      "Chronic condition management",
      "Memory & cognitive evaluation",
      "Fall-risk & mobility screening",
      "Medication review & reconciliation",
      "Home-based care coordination",
    ],
    keywords: ["geriatric", "old age", "elderly", "senior", "memory", "aged care", "ageing", "aging"],
    featured: true,
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    icon: "stethoscope",
    tagline: "Everyday care for everyday illness.",
    description:
      "Your first point of contact for fevers, infections, fatigue and general health concerns — with careful diagnosis and a clear plan for every visit.",
    treatments: ["Fever & infection care", "General health check-ups", "Thyroid & lifestyle disorders", "Preventive screenings"],
    keywords: ["general physician", "fever", "cold", "cough", "checkup", "general health", "physician"],
    featured: true,
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    icon: "baby",
    tagline: "Gentle care for growing children.",
    description:
      "From newborns to teenagers, our paediatricians provide kind, reassuring care — with growth monitoring, immunisations and treatment for common childhood illness.",
    treatments: ["Newborn & infant care", "Vaccination & immunisation", "Growth & nutrition advice", "Childhood illness treatment"],
    keywords: ["child doctor", "children", "pediatric", "paediatric", "baby", "kids", "child", "pediatrician"],
    featured: true,
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "activity",
    tagline: "Looking after your heart.",
    description:
      "Diagnosis and management of heart conditions including blood pressure, chest pain, and heart disease — with a focus on prevention and long-term wellbeing.",
    treatments: ["Hypertension management", "Chest pain evaluation", "ECG & cardiac screening", "Heart-health counselling"],
    keywords: ["heart", "cardiac", "chest pain", "bp", "blood pressure", "hypertension", "cardio"],
    featured: true,
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: "bone",
    tagline: "Strong bones, easy movement.",
    description:
      "Care for joint pain, arthritis, fractures and back problems — helping you stay active and mobile at every stage of life.",
    treatments: ["Joint & arthritis care", "Fracture management", "Back & neck pain", "Osteoporosis screening"],
    keywords: ["joint pain", "bone", "fracture", "arthritis", "knee", "back pain", "ortho"],
    featured: true,
  },
  {
    slug: "diabetology",
    name: "Diabetology",
    icon: "droplet",
    tagline: "Managing diabetes with confidence.",
    description:
      "Personalised diabetes care — from diagnosis and medication to diet, foot care and monitoring — so you stay in control of your health.",
    treatments: ["Diabetes diagnosis & monitoring", "Blood-sugar management", "Diet & lifestyle counselling", "Diabetic foot care"],
    keywords: ["diabetes", "sugar", "diabetic", "blood sugar", "sugar control"],
    featured: true,
  },
  {
    slug: "gynaecology",
    name: "Gynaecology & Obstetrics",
    icon: "users",
    tagline: "Care for women at every age.",
    description:
      "Compassionate women's health services — from routine check-ups to pregnancy care and menopause support.",
    treatments: ["Routine gynaecology check-ups", "Antenatal & postnatal care", "Menstrual health", "Menopause support"],
    keywords: ["women", "gynaec", "pregnancy", "antenatal", "obstetrics", "lady doctor"],
    featured: false,
  },
  {
    slug: "ent",
    name: "ENT",
    icon: "ear",
    tagline: "Ear, nose & throat care.",
    description:
      "Diagnosis and treatment of ear, nose and throat conditions for adults and children — including hearing, sinus and voice concerns.",
    treatments: ["Ear & hearing care", "Sinus & allergy care", "Throat & voice disorders", "Paediatric ENT"],
    keywords: ["ent", "ear", "nose", "throat", "sinus", "hearing", "ear doctor"],
    featured: false,
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "sparkles",
    tagline: "Healthy skin, hair & nails.",
    description:
      "Treatment for common skin, hair and nail conditions with a calm, evidence-based approach.",
    treatments: ["Skin infections & allergies", "Eczema & psoriasis", "Hair & scalp care", "Pigmentation care"],
    keywords: ["skin", "dermatology", "hair", "rash", "allergy skin", "skin doctor"],
    featured: false,
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    icon: "eye",
    tagline: "Clear vision at every age.",
    description:
      "Eye examinations and care for vision problems, cataract evaluation and common eye conditions.",
    treatments: ["Vision testing", "Cataract evaluation", "Dry-eye care", "Diabetic eye screening"],
    keywords: ["eye", "vision", "cataract", "sight", "ophthalmology", "eye doctor"],
    featured: false,
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    icon: "dumbbell",
    tagline: "Move better, recover faster.",
    description:
      "Rehabilitation and movement therapy for recovery after injury, surgery or long illness — including in-clinic and guided home exercise.",
    treatments: ["Post-surgery rehabilitation", "Pain & mobility therapy", "Elderly strength & balance", "Sports injury care"],
    keywords: ["physio", "physiotherapy", "rehab", "exercise", "mobility", "pain relief"],
    featured: false,
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "brain",
    tagline: "Care for the brain & nerves.",
    description:
      "Evaluation and management of neurological conditions including headache, stroke recovery, epilepsy and memory concerns.",
    treatments: ["Headache & migraine care", "Stroke follow-up", "Epilepsy management", "Memory & nerve care"],
    keywords: ["neurology", "brain", "headache", "stroke", "nerve", "memory"],
    featured: false,
  },
];

export const doctors: Doctor[] = [
  {
    id: "ramesh-kumar",
    name: "Dr. Ramesh Kumar",
    speciality: "Senior Consultant — Geriatric Medicine",
    departmentSlug: "geriatrics",
    locations: ["Kandigai", "Urapakkam"],
    photo: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=480&h=560",
    experienceYears: 28,
    qualifications: "MBBS, MD (Geriatric Medicine), PG Dip. Gerontology",
    languages: ["English", "Tamil"],
    timings: "Mon – Sat · 9:00 AM – 1:00 PM",
    bio: "Dr. Ramesh Kumar leads our geriatric programme. With nearly three decades caring for older adults, he focuses on simplifying complex care, reducing unnecessary medicines and keeping seniors healthy and independent for longer.",
    keywords: ["geriatric", "elderly", "senior", "old age", "memory", "aged care"],
  },
  {
    id: "venkatesan-s",
    name: "Dr. S. Venkatesan",
    speciality: "Consultant — General Medicine",
    departmentSlug: "general-medicine",
    locations: ["Kandigai"],
    photo: "https://images.pexels.com/photos/5888144/pexels-photo-5888144.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=480&h=560",
    experienceYears: 22,
    qualifications: "MBBS, MD (General Medicine)",
    languages: ["English", "Tamil"],
    timings: "Mon – Sat · 10:00 AM – 4:00 PM",
    bio: "Dr. Venkatesan is a trusted general physician known for careful listening and clear explanations. He manages a wide range of acute and chronic conditions for patients of all ages.",
    keywords: ["general physician", "fever", "checkup", "physician", "cold", "cough"],
  },
  {
    id: "priya-chandran",
    name: "Dr. Priya Chandran",
    speciality: "Consultant — Paediatrics",
    departmentSlug: "paediatrics",
    locations: ["Kandigai", "Urapakkam"],
    photo: "https://images.pexels.com/photos/7578810/pexels-photo-7578810.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=480&h=560",
    experienceYears: 15,
    qualifications: "MBBS, MD (Paediatrics)",
    languages: ["English", "Tamil"],
    timings: "Mon – Sat · 9:00 AM – 1:00 PM",
    bio: "Dr. Priya Chandran cares for children from newborn to adolescence. Parents value her calm, patient manner and her focus on prevention through vaccination and healthy growth.",
    keywords: ["child doctor", "pediatric", "paediatric", "baby", "kids", "children"],
  },
  {
    id: "arjun-nair",
    name: "Dr. Arjun Nair",
    speciality: "Consultant — Cardiology",
    departmentSlug: "cardiology",
    locations: ["Urapakkam"],
    photo: "https://images.pexels.com/photos/10695742/pexels-photo-10695742.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=480&h=560",
    experienceYears: 18,
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    languages: ["English", "Tamil", "Malayalam"],
    timings: "Mon – Sat · 11:00 AM – 5:00 PM",
    bio: "Dr. Arjun Nair specialises in the early detection and long-term management of heart disease, with a strong emphasis on prevention and lifestyle guidance.",
    keywords: ["heart", "cardiology", "bp", "blood pressure", "chest pain", "hypertension"],
  },
  {
    id: "karthik-balaji",
    name: "Dr. Karthik Balaji",
    speciality: "Consultant — Orthopaedics",
    departmentSlug: "orthopaedics",
    locations: ["Kandigai"],
    photo: "https://images.pexels.com/photos/32254658/pexels-photo-32254658.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=480&h=560",
    experienceYears: 16,
    qualifications: "MBBS, MS (Orthopaedics)",
    languages: ["English", "Tamil"],
    timings: "Mon – Sat · 10:00 AM – 2:00 PM",
    bio: "Dr. Karthik Balaji treats joint pain, arthritis and injuries, with particular expertise in keeping older adults mobile and pain-free through conservative and surgical care.",
    keywords: ["joint pain", "bone", "ortho", "arthritis", "knee", "back pain", "fracture"],
  },
  {
    id: "anitha-lakshmi",
    name: "Dr. Anitha Lakshmi",
    speciality: "Consultant — Diabetology",
    departmentSlug: "diabetology",
    locations: ["Kandigai", "Urapakkam"],
    photo: "https://images.pexels.com/photos/36665076/pexels-photo-36665076.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=480&h=560",
    experienceYears: 12,
    qualifications: "MBBS, MD (Medicine), Fellowship in Diabetology",
    languages: ["English", "Tamil"],
    timings: "Mon – Sat · 2:00 PM – 6:00 PM",
    bio: "Dr. Anitha Lakshmi helps patients manage diabetes through personalised medication, diet and lifestyle plans, with a focus on preventing complications.",
    keywords: ["diabetes", "sugar", "diabetic", "blood sugar", "diabetology"],
  },
  {
    id: "lakshmi-narayanan",
    name: "Dr. Lakshmi Narayanan",
    speciality: "Consultant — Gynaecology & Obstetrics",
    departmentSlug: "gynaecology",
    locations: ["Urapakkam"],
    photo: "https://images.pexels.com/photos/32160036/pexels-photo-32160036.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=480&h=560",
    experienceYears: 20,
    qualifications: "MBBS, DGO, DNB (Obstetrics & Gynaecology)",
    languages: ["English", "Tamil"],
    timings: "Mon – Sat · 10:00 AM – 4:00 PM",
    bio: "Dr. Lakshmi Narayanan provides comprehensive women's health care, from routine screenings to pregnancy care and menopause support, in a warm and private setting.",
    keywords: ["women", "gynaec", "pregnancy", "antenatal", "lady doctor", "obstetrics"],
  },
  {
    id: "david-william",
    name: "Dr. David William",
    speciality: "Consultant — ENT",
    departmentSlug: "ent",
    locations: ["Kandigai"],
    experienceYears: 17,
    qualifications: "MBBS, MS (ENT)",
    languages: ["English", "Tamil"],
    timings: "Mon – Sat · 3:00 PM – 7:00 PM",
    bio: "Dr. David William treats ear, nose and throat conditions in adults and children, with a gentle approach and a focus on clear, honest advice.",
    keywords: ["ent", "ear", "nose", "throat", "sinus", "hearing"],
  },
  {
    id: "meenakshi-iyer",
    name: "Dr. Meenakshi Iyer",
    speciality: "Consultant — Geriatric Medicine",
    departmentSlug: "geriatrics",
    locations: ["Urapakkam"],
    experienceYears: 14,
    qualifications: "MBBS, DNB (Family Medicine), Fellowship in Geriatric Care",
    languages: ["English", "Tamil", "Hindi"],
    timings: "Mon – Sat · 2:00 PM – 6:00 PM",
    bio: "Dr. Meenakshi Iyer combines family medicine with specialised geriatric training. She works closely with families to coordinate home visits, physiotherapy and long-term care for elderly parents.",
    keywords: ["geriatric", "elderly", "senior", "family doctor", "home care"],
  },
];

export const branches: Branch[] = [
  {
    id: "kandigai",
    name: "Kandigai",
    address: "No. 12, Main Road, Kandigai, Chennai – 600 122, Tamil Nadu",
    phone: "+91 44 2766 1200",
    phoneDisplay: "044 2766 1200",
    hours: "Mon – Sat: 8:00 AM – 8:00 PM · Sun: 9:00 AM – 2:00 PM",
    emergency: "24×7 Emergency & Trauma",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Thangam+Hospitals+Kandigai+Chennai",
  },
  {
    id: "urapakkam",
    name: "Urapakkam",
    address: "No. 4, GST Road, Urapakkam, Chennai – 603 210, Tamil Nadu",
    phone: "+91 44 4777 1300",
    phoneDisplay: "044 4777 1300",
    hours: "Mon – Sat: 8:00 AM – 8:00 PM · Sun: 9:00 AM – 2:00 PM",
    emergency: "24×7 Emergency & Trauma",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Thangam+Hospitals+Urapakkam+Chennai",
  },
];

export const services: Service[] = [
  {
    id: "home-visits",
    name: "Home Visits",
    route: "/services/home-visits",
    icon: "home",
    short: "Doctor and nursing care brought to your home.",
    keywords: ["home visit", "visit at home", "home care", "nurse at home", "doctor at home"],
  },
  {
    id: "rural-health",
    name: "Rural Healthcare",
    route: "/services/rural-health",
    icon: "users",
    short: "Outreach camps and care for nearby villages.",
    keywords: ["rural", "village", "community health", "camp", "outreach"],
  },
  {
    id: "geriatric-care",
    name: "Geriatric Care",
    route: "/geriatric-care",
    icon: "heartPulse",
    short: "Comprehensive care for older adults.",
    keywords: ["geriatric", "elderly", "senior", "old age", "aged care"],
  },
];

export function searchCare(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) {
    return { doctors: [] as Doctor[], departments: [] as Department[], services: [] as Service[], empty: false };
  }
  const words = q.split(/\s+/).filter((w) => w.length > 1);
  const matches = (haystack: string) => {
    const h = haystack.toLowerCase();
    return h.includes(q) || words.some((w) => h.includes(w));
  };
  const docResults = doctors.filter((d) =>
    matches([d.name, d.speciality, d.qualifications, ...d.keywords].join(" "))
  );
  const deptResults = departments.filter((d) => matches([d.name, d.tagline, ...d.keywords].join(" ")));
  const svcResults = services.filter((s) => matches([s.name, s.short, ...s.keywords].join(" ")));
  return {
    doctors: docResults,
    departments: deptResults,
    services: svcResults,
    empty: docResults.length + deptResults.length + svcResults.length === 0,
  };
}

export const images = {
  hero: "https://images.pexels.com/photos/11030158/pexels-photo-11030158.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=1200",
  geriatric: "https://images.pexels.com/photos/17815020/pexels-photo-17815020.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1080",
  homeVisit: "https://images.pexels.com/photos/7345459/pexels-photo-7345459.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=800",
  rural: "https://images.pexels.com/photos/25746822/pexels-photo-25746822.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=800",
  about: "https://images.pexels.com/photos/18870282/pexels-photo-18870282.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=800",
};

export const healthResources = [
  {
    id: "ageing-well",
    category: "Geriatric Care",
    title: "Ageing well: 5 habits for a healthier later life",
    body: "Stay physically active with gentle daily movement, keep your mind engaged, eat a balanced diet rich in fibre and protein, stay socially connected with family and friends, and attend regular check-ups — especially for blood pressure, sugar and vision. Small, consistent habits matter far more than occasional big efforts.",
  },
  {
    id: "diabetes-diet",
    category: "Diabetology",
    title: "Managing diabetes through everyday food choices",
    body: "Focus on whole grains, vegetables and lean protein while limiting refined sugar and fried foods. Eat smaller, regular meals, stay hydrated, and never skip medication without your doctor's advice. Monitoring your sugar levels helps you understand how your body responds to food.",
  },
  {
    id: "joint-health",
    category: "Orthopaedics",
    title: "Protecting your joints and staying mobile",
    body: "Maintain a healthy weight to reduce pressure on knees and hips, practise low-impact exercise such as walking or swimming, and use proper posture when lifting. If joint pain persists, early assessment can prevent it from worsening.",
  },
  {
    id: "child-vaccination",
    category: "Paediatrics",
    title: "A simple guide to childhood vaccinations",
    body: "Vaccinations protect children from serious but preventable illness. Keep a record of your child's immunisation schedule and attend each dose on time. If a dose is missed, consult your paediatrician to catch up safely.",
  },
];
