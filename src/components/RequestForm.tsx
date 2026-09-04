import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Icon } from "./icons";
import { Button } from "./ui";
import { branches, departments, doctors, site } from "@/data";

type Props = { variant: "appointment" | "callback" };

type Errors = Partial<Record<"name" | "phone" | "branch" | "reason" | "time", string>>;

const times = ["Morning (9 AM – 12 PM)", "Afternoon (12 – 4 PM)", "Evening (4 – 8 PM)", "Anytime"];

const fieldClass =
  "w-full rounded-md border border-navy-200 bg-white px-4 py-3 text-body text-navy-900 placeholder:text-navy-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200";

export function RequestForm({ variant }: Props) {
  const [params] = useSearchParams();
  const preselectedDoctor = doctors.find(d => d.id === params.get("doctor"));

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [reason, setReason] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "")))
      e.phone = "Please enter a valid 10-digit mobile number.";
    if (!branch) e.branch = "Please choose a branch.";
    if (!time) e.time = "Please choose a preferred time.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
    } else {
      const form = ev.currentTarget;
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
    }
  };

  const label = (text: string, required = true) => (
    <span className="mb-1.5 block text-small font-medium text-navy-800">
      {text}
      {required && <span className="text-gold-600"> *</span>}
    </span>
  );

  if (submitted) {
    return (
      <div className="rounded-md border border-navy-100 bg-white p-8 text-center sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy-700">
          <Icon name="phone" className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-h3">Please call to complete your request.</h3>
        <p className="mx-auto mt-2 max-w-md text-body text-navy-600">
          Online requests are not available yet. Your details have not been sent. Please call our care team to arrange your appointment or callback.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={() => setSubmitted(false)} variant="secondary">
            Back to details
          </Button>
          <Button href={`tel:${branches.find(b => b.id === branch)?.phone ?? site.helpline}`} variant="primary" iconLeft="phone">
            Call us now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-md border border-navy-100 bg-white p-6 sm:p-8">
      <div className="request-notice"><h2>Arrange your visit by phone</h2><p>Online requests are not connected yet. This form can help you prepare your details, but it will not send them to the hospital.</p><a href={`tel:${site.helpline}`}>Call {site.helplineDisplay}</a></div>
      <p className="mb-5 text-small text-navy-700">Fields marked * are required to prepare your request.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block">
            {label("Full name")}
            <input
              type="text"
              required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. S. Meenakshi"
              className={cn(fieldClass, errors.name && "border-red-400")}
              autoComplete="name"
            />
            {errors.name && <p id="name-error" role="alert" className="mt-1.5 text-small text-red-600">{errors.name}</p>}
          </label>
        </div>

        <div>
          <label className="block">
            {label("Phone number")}
            <input
              type="tel"
              inputMode="numeric"
              required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              className={cn(fieldClass, errors.phone && "border-red-400")}
              autoComplete="tel"
            />
            {errors.phone && <p id="phone-error" role="alert" className="mt-1.5 text-small text-red-600">{errors.phone}</p>}
          </label>
        </div>

        <div>
          <label className="block">
            {label("Preferred branch")}
            <select
              required aria-invalid={Boolean(errors.branch)} aria-describedby={errors.branch ? "branch-error" : undefined}
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className={cn(fieldClass, errors.branch && "border-red-400")}
            >
              <option value="">Select branch</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
              <option value="not-sure">Not sure</option>
            </select>
            {errors.branch && <p id="branch-error" role="alert" className="mt-1.5 text-small text-red-600">{errors.branch}</p>}
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="block">
            {label(variant === "callback" ? "Department / reason for visit" : "Department", false)}
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className={fieldClass}
            >
              <option value="">Not sure / general enquiry</option>
              {departments.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
              <option value="home-visit">Home visit</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block">
            {label("Preferred callback time")}
            <select
              required aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? "time-error" : undefined}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={cn(fieldClass, errors.time && "border-red-400")}
            >
              <option value="">Select time</option>
              {times.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.time && <p id="time-error" role="alert" className="mt-1.5 text-small text-red-600">{errors.time}</p>}
          </label>
        </div>

        {variant === "appointment" && (
          <div>
            <label className="block">
              {label("Preferred date", false)}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={fieldClass}
              />
            </label>
          </div>
        )}
      </div>

      {preselectedDoctor && (
        <p className="mt-4 text-small text-navy-600">
          Selected doctor: {preselectedDoctor.name}. Please ask about their availability when you call.
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary" size="lg" iconRight="arrowRight">
          Review request details
        </Button>
        <p className="text-small text-navy-500">Online requests are currently unavailable. Please call to confirm.</p>
      </div>
    </form>
  );
}
