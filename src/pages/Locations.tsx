import { Container, Section, PageHeader, Button } from "@/components/ui";
import { LocationCard } from "@/components/cards";
import { branches, site } from "@/data";

export default function Locations() {
  return (
    <>
      <PageHeader
        title="Care, closer to home"
        description="Visit us at Kandigai or Urapakkam"
      >
      </PageHeader>

      <Section className="doctors-content !pt-2">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((b) => (
              <LocationCard key={b.id} branch={b} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
