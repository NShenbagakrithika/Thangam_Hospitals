import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Icon } from "./icons";
import { DoctorCard } from "./cards";
import { Button } from "./ui";
import { departments, doctors, searchCare } from "@/data";

const branchNames = ["Kandigai", "Urapakkam"];

export function CareSearch({ limit = 0 }: { limit?: number }) {
  const [params] = useSearchParams();
  const [query, setQuery] = useState("");
  const [deptFilter, setDeptFilter] = useState(params.get("dept") ?? "");
  const [locFilter, setLocFilter] = useState("");

  const matchesFilters = (d: (typeof doctors)[number]) =>
    (!deptFilter || d.departmentSlug === deptFilter) && (!locFilter || d.locations.includes(locFilter));

  const results = useMemo(() => {
    const q = query.trim();
    if (q) {
      const r = searchCare(q);
      return {
        doctors: r.doctors.filter(matchesFilters),
        departments: r.departments,
        services: r.services,
      };
    }
    return { doctors: doctors.filter(matchesFilters), departments: [], services: [] };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, deptFilter, locFilter]);

  const shownDoctors = limit > 0 ? results.doctors.slice(0, limit) : results.doctors;
  const hasQuery = query.trim().length > 0;
  const noResults =
    hasQuery && results.doctors.length === 0 && results.departments.length === 0 && results.services.length === 0;

  return (
    <div>
      {/* Controls */}
      <div className="rounded-md border border-navy-100 bg-white p-4 sm:p-5">
        <div className="grid items-end gap-4 lg:grid-cols-[1fr_auto_auto]">
          <label className="block">
            <span className="mb-1 block text-small font-medium text-navy-600">Find a doctor</span>
            <span className="relative block">
              <Icon
                name="search"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Name, speciality or symptom"
                className="h-12 w-full rounded-md border border-navy-200 bg-navy-50/50 pl-11 pr-4 text-body text-navy-900 placeholder:text-navy-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200"
              />
            </span>
          </label>

          <label className="block">
            <span className="mb-1 block text-small font-medium text-navy-600">Department</span>
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="h-12 w-full rounded-md border border-navy-200 bg-white px-3 text-body text-navy-900 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200 lg:w-52"
            >
              <option value="">All departments</option>
              {departments.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-small font-medium text-navy-600">Location</span>
            <select
              value={locFilter}
              onChange={(e) => setLocFilter(e.target.value)}
              className="h-12 w-full rounded-md border border-navy-200 bg-white px-3 text-body text-navy-900 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200 lg:w-44"
            >
              <option value="">All locations</option>
              {branchNames.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* No results */}
      {noResults && (
        <div className="mt-6 rounded-md border border-navy-100 bg-navy-50/50 p-8 text-center">
          <p className="text-body font-medium text-navy-800">
            We couldn&apos;t find a match for &ldquo;{query}&rdquo;.
          </p>
          <p className="mx-auto mt-2 max-w-md text-small text-navy-600">
            Tell us what you need help with and our care team will guide you to the right doctor or department.
          </p>
          <div className="mt-5 flex justify-center">
            <Button to="/callback" variant="primary" iconRight="arrowRight">
              Request a Callback
            </Button>
          </div>
        </div>
      )}

      {/* Department / service suggestions */}
      {(results.departments.length > 0 || results.services.length > 0) && (
        <div className="mt-6">
          <p className="text-small font-medium text-navy-500">Also matches</p>
          <ul className="mt-2 space-y-2">
            {results.departments.map((d) => (
              <li key={d.slug}>
                <Link
                  to={`/departments/${d.slug}`}
                  className="flex items-center gap-3 rounded-md border border-navy-100 bg-white p-4 transition-colors hover:border-navy-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-navy-900">{d.name} department</span>
                    <span className="block text-small text-navy-600">{d.tagline}</span>
                  </span>
                  <Icon name="chevronRight" className="h-5 w-5 text-navy-300" />
                </Link>
              </li>
            ))}
            {results.services.map((s) => (
              <li key={s.id}>
                <Link
                  to={s.route}
                  className="flex items-center gap-3 rounded-md border border-navy-100 bg-white p-4 transition-colors hover:border-navy-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-navy-900">{s.name}</span>
                    <span className="block text-small text-navy-600">{s.short}</span>
                  </span>
                  <Icon name="chevronRight" className="h-5 w-5 text-navy-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p role="status" className="mt-6 text-small text-navy-700">{results.doctors.length} {results.doctors.length === 1 ? "doctor matches" : "doctors match"} your search and filters.</p>
      {/* Doctors */}
      {shownDoctors.length > 0 && (
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {shownDoctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>
      )}

      {!hasQuery && shownDoctors.length === 0 && (
        <p className="mt-8 text-center text-body text-navy-600">
          No doctors match this filter. Please try a different department or location.
        </p>
      )}
    </div>
  );
}
