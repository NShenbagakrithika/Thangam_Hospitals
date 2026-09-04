import { Container, Section, PageHeader } from "@/components/ui";
import { RequestForm } from "@/components/RequestForm";

export default function RequestCallback() {
  return (
    <>
      <PageHeader
        title="Not sure which doctor you need?"
        description="Call our care team for help choosing a doctor, arranging a visit or discussing care at home."
      />
      <Section className="doctors-content !pt-2">
        <Container className="max-w-2xl">
          <RequestForm variant="callback" />
        </Container>
      </Section>
    </>
  );
}
