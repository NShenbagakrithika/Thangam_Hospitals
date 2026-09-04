import { Container, Section, SectionHeader, PageHeader, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { images, branches } from "@/data";

const activities = [
  "Free health camps in nearby villages",
  "Screenings for diabetes, blood pressure & vision",
  "Maternal and child health outreach",
  "Health education in local languages",
  "Referral and follow-up care at our branches",
];

export default function RuralHealth() {
  return (
    <>
      <PageHeader
        title="Healthcare that reaches every village"
        description="We believe distance should never delay care. Our rural outreach brings doctors, screenings and education directly to communities."
      >
        <Button to="/callback" variant="primary" iconRight="arrowRight">
          Get in Touch
        </Button>
        <Button href={`tel:${branches[0].phone}`} variant="secondary" iconLeft="phone">
          Call
        </Button>
      </PageHeader>

      <Section>
        <Container>
          <SectionHeader title="Bringing care closer to rural communities" />
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              
              <div className="mt-5 space-y-4 text-body text-navy-700">
                <p>
                  Our outreach teams regularly travel to the villages surrounding Kandigai and
                  Urapakkam, setting up health camps where people live rather than asking them to
                  travel to us.
                </p>
                <p>
                  We focus on prevention and early detection — catching conditions like diabetes,
                  high blood pressure and vision problems before they become serious — and
                  connecting people with affordable follow-up care at our hospitals.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md">
              <img src={images.rural} alt="Placeholder photograph: a mother and child in a rural village" loading="lazy" className="h-80 w-full object-cover sm:h-[24rem]" />
              <p className="mt-2 text-small text-navy-700">Placeholder photography</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-navy-50/60">
        <Container>
          <SectionHeader title="Rural health initiatives" align="center" />
          <ul className="mx-auto max-w-2xl space-y-3">
            {activities.map((a) => (
              <li key={a} className="flex items-center gap-3 rounded-md border border-navy-100 bg-white px-5 py-4 text-body text-navy-800">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
                </span>
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Button to="/callback" variant="primary" size="lg" iconRight="arrowRight">
              Contact our outreach team
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
