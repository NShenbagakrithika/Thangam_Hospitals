import { Container, Section, SectionHeader, PageHeader, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { images } from "@/data";

const values = [
  { icon: "heart", title: "Compassion", body: "We treat every patient with empathy, kindness and genuine care." },
  { icon: "shield", title: "Integrity", body: "We uphold honesty, ethics and transparency in everything we do." },
  { icon: "heartPulse", title: "Excellence", body: "We strive for outstanding clinical outcomes and continuous improvement." },
  { icon: "user", title: "Respect", body: "We honour the dignity, privacy and individuality of every person." },
  { icon: "users", title: "Teamwork", body: "We work across disciplines to provide coordinated, whole-person care." },
  { icon: "stethoscope", title: "Innovation", body: "We embrace modern technology and evidence-based practices to advance healing." },
];

const reasons = [
  "Experienced, multi-speciality doctors",
  "A dedicated geriatric care programme",
  "Home visits and rural health outreach",
  "Transparent, affordable pricing",
  "Family-friendly and elderly-friendly care",
  "24×7 emergency support",
];

export default function About() {
  return (
    <>
      <PageHeader
        title="Thangam Hospitals. Where every life matters."
        description="Our mission is to provide compassionate, high-quality and affordable healthcare to every individual, regardless of background."
      />

      <Section>
        <Container>
          <SectionHeader title="Our mission" />
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md">
              <img
                src={images.about}
                alt="Placeholder photograph: a doctor examining an elderly patient"
                loading="lazy"
                className="h-80 w-full object-cover sm:h-[24rem] lg:h-[28rem]"
              />
              <p className="mt-2 text-small text-navy-700">Placeholder photography</p>
            </div>
            <div>
              
              <div className="mt-5 space-y-4 text-body text-navy-700">
                <p>
                  We are committed to patient-centred care that treats every person with dignity
                  and respect. Our mission combines medical expertise with a healing environment
                  that supports recovery.
                </p>
                <p>
                  We believe quality care should be accessible and affordable, whatever a person’s
                  background. Compassion, clinical excellence and respect guide the care we aim to deliver.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#e8f3fb]">
        <Container>
          <SectionHeader title="Our vision" description="A healthier society where quality medical care is accessible to all." />
          <p className="mx-auto max-w-3xl text-center text-body text-navy-700">We aspire to be among India’s most trusted and preferred healthcare institutions, setting a benchmark for clinical excellence, compassionate care and community well-being.</p>
        </Container>
      </Section>

      <Section className="bg-navy-50/60">
        <Container>
          <SectionHeader title="The values behind our care" align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t border-navy-200 py-6 pr-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-50 text-navy-700">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-h3">{v.title}</h3>
                <p className="mt-2 text-body text-navy-600">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="Why families trust Thangam" description="We focus on what matters: getting the right care, with the least stress, at a fair price." />
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 rounded-md border border-navy-100 bg-white px-5 py-4 text-body text-navy-800">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-md bg-navy-900 p-8 sm:p-10">
            <div>
              <h3 className="text-h3 text-white">Ready to meet our team?</h3>
              <p className="mt-1 text-body text-navy-100">Find a doctor or book an appointment in a few simple steps.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/doctors" variant="gold" iconRight="arrowRight">
                Find a Doctor
              </Button>
              <Button to="/appointment" variant="secondary">
                Request Appointment
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
