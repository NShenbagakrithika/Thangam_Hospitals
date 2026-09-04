import { useState } from "react";
import { Container, Section, PageHeader } from "@/components/ui";
import { Icon } from "@/components/icons";
import { healthResources } from "@/data";
import { cn } from "@/utils/cn";

export default function HealthResources() {
  const [open, setOpen] = useState<string | null>(healthResources[0]?.id ?? null);

  return (
    <>
      <PageHeader
        title="Simple health guidance you can trust"
        description="General information on common health topics. Discuss your individual care needs with your doctor."
      />

      <Section>
        <Container className="max-w-3xl">
          <div className="space-y-3">
            {healthResources.map((r) => {
              const isOpen = open === r.id;
              return (
                <article key={r.id} className="overflow-hidden rounded-md border border-navy-100 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : r.id)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen} aria-controls={isOpen ? `resource-${r.id}` : undefined}
                  >
                    <span>
                      <span className="mt-1 block text-h3 font-semibold text-navy-900">{r.title}</span>
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    >
                      <Icon name="chevronDown" className="h-5 w-5" />
                    </span>
                  </button>
                  {isOpen && (
                    <div id={`resource-${r.id}`} className="border-t border-navy-100 px-6 py-5">
                      <p className="max-w-2xl text-body text-navy-700">{r.body}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
