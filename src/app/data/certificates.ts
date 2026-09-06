/**
 * Achievements & credentials shown in the gallery.
 * Add optional `image` paths (e.g. "/certificates/mos-word.jpg") when you have them.
 */
export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  /** Path under /public — leave undefined until you add the file */
  image?: string;
  /** Link to verify or view the credential online */
  credentialUrl?: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "mos-word",
    title: "Microsoft Office Specialist — Word",
    issuer: "Microsoft",
    date: "Grade 10",
    description: "Validated advanced Word skills for documents, formatting, and professional reports.",
    image: "/certificates/experiment.jpg",
  },
  {
    id: "mos-excel",
    title: "Microsoft Office Specialist — Excel",
    issuer: "Microsoft",
    date: "Grade 11",
    description: "Certified in spreadsheets, formulas, data organization, and Excel workflows.",
    image: "/certificates/placeholder2.jpg",
  },
  {
    id: "hcmc-olympic",
    title: "HCMC English Olympic — 3rd Prize",
    issuer: "Ho Chi Minh City Department of Education",
    date: "Grade 11",
    description: "Earned 3rd prize at the city-wide English Olympic for high school students.",
    image: "/certificates/placeholder3.jpg",
  },
  
];
