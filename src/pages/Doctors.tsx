import { Container, Section, PageHeader } from "@/components/ui";
import { CareSearch } from "@/components/CareSearch";

export default function Doctors() {
  return (
    <>
      <PageHeader
        title="Find the right doctor"
      />

      <Section className="doctors-content !pt-2">
        <Container>
          <CareSearch />
        </Container>
      </Section>
    </>
  );
}
