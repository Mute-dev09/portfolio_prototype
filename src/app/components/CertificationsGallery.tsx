import { useState } from "react";
import { Award, ExternalLink, FileBadge, Languages, Maximize2, Trophy } from "lucide-react";
import type { Certificate } from "../data/certificates";
import { CERTIFICATES } from "../data/certificates";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

const ICONS: Record<string, typeof Award> = {
  "mos-word": FileBadge,
  "mos-excel": FileBadge,
  "hcmc-olympic": Trophy,
  "ielts-7": Languages,
};

function CertificateCard({ certificate, onImageClick }: { certificate: Certificate; onImageClick: (certificate: Certificate) => void }) {
  const Icon = ICONS[certificate.id] ?? Award;

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-secondary/60">
        {certificate.image ? (
          <button
            type="button"
            onClick={() => onImageClick(certificate)}
            className="group relative h-full w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
            aria-label={`Enlarge ${certificate.title}`}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/25 group-hover:opacity-100">
              <Maximize2 className="h-7 w-7" aria-hidden="true" />
            </span>
          </button>
        ) : (
          <div className="flex flex-col items-center gap-3 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-sm">
              <Icon className="h-8 w-8 text-primary" strokeWidth={1.75} />
            </div>
            <span className="text-xs font-medium text-muted-foreground">Image coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">{certificate.issuer}</p>
        <h3 className="mb-2 font-bold leading-snug text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {certificate.title}
        </h3>
        <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{certificate.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="text-xs font-semibold text-muted-foreground">{certificate.date}</span>
          {certificate.credentialUrl ? (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition hover:underline"
            >
              View credential
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

type CertificationsGalleryProps = {
  isDark: boolean;
};

export function CertificationsGallery({ isDark }: CertificationsGalleryProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <>
      <section id="credentials" className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Proof of Work
          </span>
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: isDark ? "linear-gradient(135deg, #DA6C14 60%, #915020 100%)" : undefined,
              WebkitBackgroundClip: isDark ? "text" : undefined,
              WebkitTextFillColor: isDark ? "transparent" : undefined,
              backgroundClip: isDark ? "text" : undefined,
            }}
          >
            Achievements & Credentials
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-sm text-muted-foreground">
            Official certifications and awards I have earned along the way.
          </p>
        </div>

          <div className="flex flex-wrap justify-center gap-5">
            {CERTIFICATES.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onImageClick={setSelectedCertificate}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={Boolean(selectedCertificate)}
        onOpenChange={(open) => {
          if (!open) setSelectedCertificate(null);
        }}
      >
        <DialogContent className="max-w-[min(92vw,1100px)] border-0 bg-black/90 p-3 sm:p-5">
          <DialogTitle className="sr-only">
            {selectedCertificate?.title ?? "Certificate preview"}
          </DialogTitle>
          {selectedCertificate?.image ? (
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="max-h-[80vh] w-full object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
