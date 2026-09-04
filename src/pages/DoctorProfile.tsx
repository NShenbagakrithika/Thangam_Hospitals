import { useParams } from "react-router-dom";
import { Container, Section, Button, Breadcrumb } from "@/components/ui";
import { Icon } from "@/components/icons";
import { doctors, branches } from "@/data";

function largeInitials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-h1">Doctor not found</h1>
        <p className="mt-4 text-lead text-navy-600">The doctor you are looking for is not listed.</p>
        <div className="mt-6">
          <Button to="/doctors" variant="primary">
            View all doctors
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container className="py-10 sm:py-12">
        <Breadcrumb items={[{ label: "Doctors", to: "/doctors" }, { label: doctor.name }]} />
      </Container>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
            {/* Left: photo + facts */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <div className="doctor-profile-portrait overflow-hidden rounded-md">
                {doctor.photo && !doctor.photo.includes("images.pexels.com") ? (
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center bg-navy-100 text-6xl font-semibold text-navy-700">
                    {largeInitials(doctor.name)}
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-4 rounded-md border border-navy-100 bg-navy-50/50 p-6">
                <div className="flex items-start gap-3">
                  <Icon name="clock" className="mt-1 h-5 w-5 text-gold-600" />
                  <div>
                    <p className="text-small font-medium text-navy-500">Experience</p>
                    <p className="text-body font-semibold text-navy-900">{doctor.experienceYears}+ years</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="clipboard" className="mt-1 h-5 w-5 text-gold-600" />
                  <div>
                    <p className="text-small font-medium text-navy-500">Qualifications</p>
                    <p className="text-body font-semibold text-navy-900">{doctor.qualifications}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="globe" className="mt-1 h-5 w-5 text-gold-600" />
                  <div>
                    <p className="text-small font-medium text-navy-500">Languages</p>
                    <p className="text-body font-semibold text-navy-900">{doctor.languages.join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="clock" className="mt-1 h-5 w-5 text-gold-600" />
                  <div>
                    <p className="text-small font-medium text-navy-500">Consultation hours</p>
                    <p className="text-body font-semibold text-navy-900">{doctor.timings}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: bio + actions */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <h1 className="text-h1 font-semibold">{doctor.name}</h1>
              <p className="mt-2 text-lead font-medium text-navy-600">{doctor.speciality}</p>
              <p className="mt-1 flex items-center gap-2 text-small text-navy-500">
                <Icon name="mapPin" className="h-4 w-4 text-gold-600" />
                {doctor.locations.join(" · ")}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button to={`/appointment?doctor=${doctor.id}`} variant="primary" size="lg" iconLeft="calendar">
                  Request Appointment
                </Button>
                <Button href={`tel:${branches[0].phone}`} variant="secondary" size="lg" iconLeft="phone">
                  Call
                </Button>
              </div>

              <div className="mt-8 border-t border-navy-100 pt-8">
                <h2 className="text-left text-h3 font-semibold">About {doctor.name.split(" ").slice(0, 2).join(" ")}</h2>
                <p className="mt-3 max-w-2xl text-lead text-navy-700">{doctor.bio}</p>
              </div>

              <div className="mt-8 rounded-md border border-navy-100 bg-navy-50/50 p-6">
                <h3 className="text-body font-semibold text-navy-900">Areas of focus</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doctor.keywords.map((k) => (
                    <span key={k} className="border-b border-navy-200 px-0 py-1.5 text-small capitalize text-navy-700">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
