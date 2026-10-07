import { contactProfileSchema } from "@/features/contact/schemas/contact-profile-schema";

const contactProfileData = {
  availability: "Open to software engineering opportunities",

  statement:
    "If the way I think, build and document software aligns with what you are looking for, the next step is simple.",

  secondaryStatement:
    "I am interested in frontend, full-stack and product-oriented software work where engineering quality, thoughtful architecture and continuous learning actually matter.",

  location: "Mexico City, Mexico",

  channels: [
    {
      id: "email",
      label: "Email",
      value: "jonathansme01@gmail.com",
      href: "mailto:jonathansme01@gmail.com",
      external: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "jonathan-morales-dev",
      href: "https://www.linkedin.com/in/jonathan-morales-dev",
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      value: "0sayo0",
      href: "https://github.com/0sayo0",
      external: true,
    },
  ],
} as const;

export const contactProfile = contactProfileSchema.parse(contactProfileData);
