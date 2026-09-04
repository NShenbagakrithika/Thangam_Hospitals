import { Link } from "react-router-dom";
import { Container, Section, PageHeader, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { images } from "@/data";

const features = [
  {
    name: "Home Visits",
    route: "/services/home-visits",
    image: images.homeVisit,
    alt: "A nurse checking a patient's blood pressure at home",
    desc: "Doctor consultations, nursing care and lab tests brought to your doorstep.",
    cta: "Request Home Visit",
  },
  {
    name: "Rural Healthcare",
    route: "/services/rural-health",
    image: images.rural,
    alt: "A mother and child in a rural Indian village",
    desc: "Free health camps and screenings for villages and underserved communities.",
    cta: "Learn More",
  },
  {
    name: "Geriatric Care",
    route: "/geriatric-care",
    image: images.geriatric,
    alt: "A dignified older gentleman smiling",
    desc: "Comprehensive, whole-person healthcare for older adults and their families.",
    cta: "Explore Geriatric Care",
  },
];

const otherServices = [
  { icon: "stethoscope", name: "Health Check-ups", desc: "Preventive health packages for every age." },
  { icon: "droplet", name: "Diagnostics & Laboratory", desc: "Blood tests and screenings with quick results." },
  { icon: "shield", name: "Immunisation", desc: "Vaccinations for children and adults." },
  { icon: "clipboard", name: "Pharmacy", desc: "In-house pharmacy at both branches." },
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Care, wherever you need it"
      />

      <Section className="doctors-content !pt-2">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article key={f.name} className="flex flex-col overflow-hidden rounded-md border border-navy-100 bg-white">
                <img src={f.image} alt={`Placeholder photograph: ${f.alt}`} loading="lazy" className="h-52 w-full object-cover" />
                <div className="flex flex-1 flex-col items-start p-6 text-left">
                  <p className="mb-3 text-small text-navy-700">Placeholder photography</p>
                  <h2 className="text-left text-h3">{f.name}</h2>
                  <p className="mt-2 flex-1 text-body text-navy-600">{f.desc}</p>
                  <div className="mt-5">
                    <Button to={f.route} variant="tertiary" iconRight="arrowRight">
                      {f.cta}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-center text-h2 font-semibold">Other services</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {otherServices.map((s) => (
                <li key={s.name} className="flex items-start gap-4 rounded-md border border-navy-100 bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-50 text-navy-700">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-body font-semibold text-navy-900">{s.name}</p>
                    <p className="text-small text-navy-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-center text-body text-navy-600">
            For health tips and guidance, visit our{" "}
            <Link to="/health-resources" className="font-semibold text-navy-800 underline underline-offset-4 hover:text-navy-950">
              Health Resources
            </Link>{" "}
            section.
          </p>
        </Container>
      </Section>
    </>
  );
}
