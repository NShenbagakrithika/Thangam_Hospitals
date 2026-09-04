import { Container, Section, PageHeader } from "@/components/ui";
import { RequestForm } from "@/components/RequestForm";

export default function RequestAppointment() {
  return (
    <>
      <PageHeader
        title="Request an appointment"
        description="Call our team to arrange your appointment. You can prepare your details below before speaking with us."
      />
      <Section>
        <Container className="max-w-2xl">
          <RequestForm variant="appointment" />
        </Container>
      </Section>
    </>
  );
}
