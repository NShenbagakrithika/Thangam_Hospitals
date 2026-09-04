import { Container, Section, SectionHeader, PageHeader, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { DoctorCard } from "@/components/cards";
import { images, doctors } from "@/data";

const services = [
  {
    icon: "heartPulse",
    title: "Comprehensive assessment",
    body: "A full evaluation of health, medicines, mobility, memory and daily needs.",
  },
  {
    icon: "droplet",
    title: "Chronic condition care",
    body: "Coordinated management of diabetes, blood pressure, heart and joint conditions.",
  },
  {
    icon: "dumbbell",
    title: "Mobility & prevention",
    body: "Fall prevention, balance training and strength programmes to stay independent.",
  },
  {
    icon: "home",
    title: "Home-based support",
    body: "Home visits, nursing and family guidance for care at home.",
  },
];

export default function GeriatricCare() {
  const geriatricDoctors = doctors.filter((d) => d.departmentSlug === "geriatrics");

  return (
    <>
      <PageHeader
        title="Care that understands ageing"
        description="Our flagship programme supports older adults to live healthier, safer and more independent lives — with the whole family involved."
      >
        <Button to="/appointment" variant="primary" iconRight="arrowRight">
          Request Appointment
        </Button>
        <Button to="/callback" variant="secondary">
          Request Callback
        </Button>
      </PageHeader>

      <Section>
        <Container>
          <SectionHeader title="Treating the whole person, not just symptoms" />
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md">
              <img src={images.geriatric} alt="Placeholder photograph: a dignified older gentleman smiling" loading="lazy" className="h-80 w-full object-cover sm:h-[26rem]" />
              <p className="mt-2 text-small text-navy-700">Placeholder photography</p>
            </div>
            <div>
              
              <div className="mt-5 space-y-4 text-body text-navy-700">
                <p>
                  Ageing brings unique health needs. Multiple medicines, several conditions and
                  changing mobility all need to be understood together — which is exactly how our
                  geriatric team works.
                </p>
                <p>
                  We help simplify medications, prevent falls and hospital stays, and support
                  families who are caring for elderly parents. Every plan is personal, practical and
                  explained in plain language.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-navy-50/60">
        <Container>
          <SectionHeader title="Our geriatric services" align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="border-t border-navy-200 py-6 pr-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-50 text-navy-700">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-body font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-small text-navy-600">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {geriatricDoctors.length > 0 && (
        <Section>
          <Container>
            <SectionHeader title="Our geriatric specialists" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {geriatricDoctors.map((d) => (
                <DoctorCard key={d.id} doctor={d} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
