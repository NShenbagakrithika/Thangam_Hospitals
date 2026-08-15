import type { Config } from "tailwindcss";
export default {content:["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],theme:{extend:{colors:{navy:"#0B192C",gold:"#C5A059",ivory:"#FAF9F6",ink:"#182334",muted:"#607080"},fontFamily:{sans:["var(--font-inter)"],serif:["var(--font-lora)"]},boxShadow:{soft:"0 16px 50px rgba(11,25,44,.09)"}}},plugins:[]} satisfies Config;
