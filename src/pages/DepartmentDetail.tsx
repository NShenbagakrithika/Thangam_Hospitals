import { useParams, Link } from "react-router-dom";
import { Container, Section, PageHeader, Button, Breadcrumb, SectionHeader } from "@/components/ui";
import { Icon } from "@/components/icons";
import { DoctorCard } from "@/components/cards";
import { departments, doctors } from "@/data";

export default function DepartmentDetail() {
  const { slug } = useParams();
  const dept = departments.find((d) => d.slug === slug);

  if (!dept) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-h1">Department not found</h1>
        <p className="mt-4 text-lead text-navy-600">The department you are looking for does not exist.</p>
        <div className="mt-6">
          <Button to="/departments" variant="primary">
            View all departments
          </Button>
        </div>
      </Container>
    );
  }

  const deptDoctors = doctors.filter((d) => d.departmentSlug === dept.slug);

  return (
    <>
      <PageHeader
        title={dept.name}
        description={dept.tagline}
      >
        <Button to={`/doctors?dept=${dept.slug}`} variant="primary" iconRight="arrowRight">
          Find a Doctor
        </Button>
        <Button to="/appointment" variant="secondary">
          Request Appointment
        </Button>
      </PageHeader>

      <Section>
        <Container>
          <Breadcrumb items={[{ label: "Departments", to: "/departments" }, { label: dept.name }]} />

          <SectionHeader title="About this department" />
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
            <div className="lg:col-span-2">
              <p className="mt-5 max-w-2xl text-lead text-navy-700">{dept.description}</p>
            </div>

            <aside className="rounded-md border border-navy-100 bg-navy-50/50 p-6">
              <h3 className="text-body font-semibold text-navy-900">Services &amp; treatments</h3>
              <ul className="mt-4 space-y-2.5">
                {dept.treatments.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-body text-navy-700">
                    <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.5} />
                    {t}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-16">
            <h2 className="text-center text-h2 font-semibold">
              {deptDoctors.length > 0 ? "Doctors in this department" : "Consultation"}
            </h2>
            {deptDoctors.length > 0 ? (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {deptDoctors.map((d) => (
                  <DoctorCard key={d.id} doctor={d} />
                ))}
              </div>
            ) : (
              <p className="mt-4 text-lead text-navy-600">
                Our team will connect you with the right specialist.{" "}
                <Link to="/callback" className="font-semibold text-navy-800 underline underline-offset-4">
                  Request a callback
                </Link>{" "}
                and we&apos;ll help you book a consultation.
              </p>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
