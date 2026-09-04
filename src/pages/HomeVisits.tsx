import { Container, Section, SectionHeader, PageHeader, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { images, branches } from "@/data";

const offerings = [
  "Doctor consultation at home",
  "Nursing care & dressing",
  "Blood tests & sample collection",
  "Physiotherapy at home",
  "Medication management",
  "Post-surgery follow-up care",
];

const steps = [
  { n: "1", title: "Request a visit", body: "Call us to discuss your needs and a convenient time." },
  { n: "2", title: "We confirm", body: "Our team calls back to confirm the doctor or nurse and the timing." },
  { n: "3", title: "Care at your door", body: "A qualified professional visits your home and follows up as needed." },
];

export default function HomeVisits() {
  return (
    <>
      <PageHeader
        title="Hospital care, at your doorstep"
        description="For elderly parents, post-operative patients and anyone who finds travel difficult, our team brings care to you."
      >
        <Button to="/callback" variant="primary" iconRight="arrowRight">
          Request Home Visit
        </Button>
        <Button href={`tel:${branches[0].phone}`} variant="secondary" iconLeft="phone">
          Call
        </Button>
      </PageHeader>

      <Section>
        <Container>
          <SectionHeader title="Complete care without leaving home" />
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md">
              <img src={images.homeVisit} alt="Placeholder photograph: a nurse caring for a patient at home" loading="lazy" className="h-80 w-full object-cover sm:h-[24rem]" />
              <p className="mt-2 text-small text-navy-700">Placeholder photography</p>
            </div>
            <div>
              
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {offerings.map((o) => (
                  <li key={o} className="flex items-center gap-3 text-body text-navy-800">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                      <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-navy-50/60">
        <Container>
          <SectionHeader title="Three simple steps" align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-navy-200 py-6 pr-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-lg font-semibold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-h3">{s.title}</h3>
                <p className="mt-2 text-body text-navy-600">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/callback" variant="primary" size="lg" iconRight="arrowRight">
              Request a Home Visit
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
