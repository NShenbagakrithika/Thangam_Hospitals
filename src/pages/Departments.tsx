import { Link } from "react-router-dom";
import { Container, Section, PageHeader } from "@/components/ui";
import { DepartmentCard } from "@/components/cards";
import { departments } from "@/data";

export default function Departments() {
  return (
    <>
      <PageHeader
        title="Our departments"
      />

      <Section className="doctors-content !pt-2">
        <Container>
          <div className="department-directory">
            {departments.map((d) => (
              <DepartmentCard key={d.slug} dept={d} />
            ))}
          </div>

          <p className="mt-10 text-center text-body text-navy-600">
            Not sure which department you need?{" "}
            <Link to="/callback" className="font-semibold text-navy-800 underline underline-offset-4 hover:text-navy-950">
              Ask us for guidance
            </Link>{" "}
            and we&apos;ll point you in the right direction.
          </p>
        </Container>
      </Section>
    </>
  );
}
