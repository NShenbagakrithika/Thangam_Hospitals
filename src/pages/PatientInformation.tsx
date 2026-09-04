import { Container, Section, PageHeader, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { site } from "@/data";

const info = [
  {
    title: "Outpatient (OPD) timings",
    body: "Both branches are open Monday to Saturday from 8:00 AM to 8:00 PM, and on Sundays from 9:00 AM to 2:00 PM. The emergency department runs 24 hours a day, every day.",
  },
  {
    title: "Making an appointment",
    body: "You can arrange a visit by phone or by walking in. Online requests are not available yet. For consultations with a specific doctor, we recommend booking ahead to avoid waiting.",
  },
  {
    title: "What to bring",
    body: "Please bring a valid photo ID, any previous prescriptions, recent test reports and your insurance or scheme details, if you have them. For new patients, arrive 15 minutes early to complete a short registration.",
  },
  {
    title: "Insurance & payments",
    body: "We accept cash, card and UPI. For insurance and government scheme claims, our billing desk will help you with the required paperwork — please carry your policy or scheme card.",
  },
  {
    title: "Visiting hours",
    body: "In-patient visiting hours are 10:00 AM to 12:00 PM and 5:00 PM to 7:00 PM. Only two visitors per patient are allowed at a time, to keep the ward calm and safe.",
  },
  {
    title: "Emergency",
    body: "In an emergency, call us directly or come to the nearest branch immediately. Our emergency team is available 24×7 at both Kandigai and Urapakkam.",
  },
];

export default function PatientInformation() {
  return (
    <>
      <PageHeader
        title="Everything you need for a smooth visit"
      >
        <Button to="/appointment" variant="primary" iconRight="arrowRight">
          Request Appointment
        </Button>
      </PageHeader>

      <Section className="doctors-content !pt-2">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
            <div className="lg:col-span-2">
              <div className="divide-y divide-navy-100 border-y border-navy-100">
                {info.map((item) => (
                  <details key={item.title} className="group py-5" open={item.title === "Outpatient (OPD) timings"}>
                    <summary className="cursor-pointer text-body font-semibold">{item.title}</summary>
                    <p className="mt-3 max-w-2xl text-body text-navy-700">{item.body}</p>
                  </details>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="rounded-md border border-navy-100 bg-navy-50/50 p-6">
                  <h3 className="text-body font-semibold text-navy-900">Quick contact</h3>
                  <ul className="mt-4 space-y-4 text-body">
                    <li className="flex items-start gap-3">
                      <Icon name="phone" className="mt-1 h-5 w-5 text-gold-600" />
                      <a href={`tel:${site.helpline}`} className="font-semibold text-navy-900 hover:underline">
                        {site.helplineDisplay}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="alertCircle" className="mt-1 h-5 w-5 text-gold-600" />
                      <span className="text-navy-700">24×7 emergency at both branches</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-md bg-navy-900 p-6">
                  <h3 className="text-body font-semibold text-white">Not sure where to start?</h3>
                  <p className="mt-2 text-small text-navy-100">
                    Our care team can help you choose the right doctor or service.
                  </p>
                  <div className="mt-4">
                    <Button to="/callback" variant="gold" fullWidth iconRight="arrowRight">
                      Request a Callback
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
