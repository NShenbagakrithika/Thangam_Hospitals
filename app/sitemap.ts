import type {MetadataRoute} from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://www.thangamhospitals.com";return ["","/about","/specialities","/doctors","/home-healthcare","/contact"].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.8}))}
