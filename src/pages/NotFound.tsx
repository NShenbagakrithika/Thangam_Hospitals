import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-small font-semibold uppercase tracking-[0.16em] text-gold-600">404</p>
      <h1 className="mt-3 text-h1 font-semibold">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-lead text-navy-600">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button to="/" variant="primary" iconRight="arrowRight">
          Back to Home
        </Button>
        <Button to="/doctors" variant="secondary">
          Find a Doctor
        </Button>
      </div>
    </Container>
  );
}
