import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Icon } from "./icons";
import { Button } from "./ui";
import type { Doctor, Department, Branch } from "@/data";

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function DoctorAvatar({ doctor, className }: { doctor: Doctor; className?: string }) {
  if (doctor.photo && !doctor.photo.includes("images.pexels.com")) {
    return (
      <img
        src={doctor.photo}
        alt={doctor.name}
        loading="lazy"
        className={cn("h-14 w-14 shrink-0 rounded-md object-cover ring-1 ring-navy-100", className)}
      />
    );
  }
  return (
    <div
      className={cn(
        "flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-navy-100 text-lg font-semibold text-navy-700 ring-1 ring-navy-200",
        className
      )}
      aria-hidden="true"
    >
      {initials(doctor.name)}
    </div>
  );
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="doctor-card">
      <div className="flex items-start gap-4">
        <DoctorAvatar doctor={doctor} />
        <div className="min-w-0">
          <h3 className="text-h3 leading-tight">{doctor.name}</h3>
          <p className="mt-0.5 text-small text-navy-600">{doctor.speciality}</p>
        </div>
      </div>
      <p className="mt-4 text-small text-navy-700">{doctor.qualifications}</p>
      <div className="mt-4 space-y-2 text-small text-navy-600">
        <p className="flex items-center gap-2">
          <Icon name="mapPin" className="h-4 w-4 text-navy-400" />
          {doctor.locations.join(" · ")}
        </p>
        <p className="flex items-center gap-2">
          <Icon name="clock" className="h-4 w-4 text-navy-400" />
          {doctor.timings}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <Button to={`/doctors/${doctor.id}`} variant="tertiary" size="sm">
          View Profile
        </Button>
        <Button to={`/appointment?doctor=${doctor.id}`} variant="primary" size="sm">
          Request Appointment
        </Button>
      </div>
    </article>
  );
}

export function DepartmentCard({ dept }: { dept: Department }) {
  return <Link to={`/departments/${dept.slug}`} className="department-entry"><div><h3>{dept.name}</h3><p>{dept.tagline}</p></div><Icon name="arrowRight" className="h-5 w-5" /></Link>;
}

export function LocationCard({ branch }: { branch: Branch }) {
  return (
    <article className="flex h-full flex-col rounded-md border border-navy-100 bg-white p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-800 text-white">
          <Icon name="mapPin" className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-h3 leading-tight">{branch.name}</h3>
          <p className="text-small font-medium text-gold-600">{branch.emergency}</p>
        </div>
      </div>

      <dl className="mt-5 space-y-3 text-body text-navy-700">
        <div className="flex gap-3">
          <dt className="sr-only">Address</dt>
          <Icon name="mapPin" className="mt-1 h-5 w-5 shrink-0 text-navy-400" />
          <dd>{branch.address}</dd>
        </div>
        <div className="flex items-center gap-3">
          <dt className="sr-only">Phone</dt>
          <Icon name="phone" className="h-5 w-5 shrink-0 text-navy-400" />
          <dd>
            <a href={`tel:${branch.phone}`} className="font-semibold text-navy-900 hover:underline">
              {branch.phoneDisplay}
            </a>
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="sr-only">Opening hours</dt>
          <Icon name="clock" className="mt-1 h-5 w-5 shrink-0 text-navy-400" />
          <dd>{branch.hours}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-3 pt-2">
        <Button href={branch.directionsUrl} variant="primary" size="sm" iconLeft="navigation">
          Get Directions
        </Button>
        <Button href={`tel:${branch.phone}`} variant="secondary" size="sm" iconLeft="phone">
          Call
        </Button>
      </div>
    </article>
  );
}
