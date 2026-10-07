import { aboutProfileSchema } from "@/features/about/schemas/about-profile-schema";

const aboutProfileData = {
  statement:
    "I am interested in understanding systems deeply — not only how to use them, but why they work, how their parts relate and how they can be made clearer.",

  secondaryStatement:
    "Software is currently the main expression of that curiosity, but the same way of thinking extends into philosophy, communication, music, business and continuous learning.",

  direction:
    "My professional direction is toward increasingly complete software systems: strong frontend engineering, deeper backend architecture and the ability to reason about products from interface to infrastructure.",

  principles: [
    {
      id: "understand-first",
      title: "Understand before abstracting",
      description:
        "I prefer understanding the underlying problem and its constraints before reaching for patterns, libraries or abstractions.",
    },
    {
      id: "systems-over-patches",
      title: "Systems over patches",
      description:
        "I value solutions whose responsibilities, boundaries and relationships remain understandable as the product grows.",
    },
    {
      id: "clarity",
      title: "Make complexity legible",
      description:
        "Good engineering should reduce unnecessary ambiguity. Structure, naming and explicit decisions matter as much as implementation.",
    },
    {
      id: "continuous-learning",
      title: "Keep expanding the model",
      description:
        "I treat learning as an ongoing process of connecting new concepts to an increasingly coherent technical foundation.",
    },
  ],

  interests: [
    {
      id: "philosophy",
      label: "Philosophy",
    },
    {
      id: "reading",
      label: "Reading",
    },
    {
      id: "music-production",
      label: "Music production",
    },
    {
      id: "entrepreneurship",
      label: "Entrepreneurship",
    },
    {
      id: "technology",
      label: "Technology",
    },
    {
      id: "communication",
      label: "Communication",
    },
  ],
} as const;

export const aboutProfile = aboutProfileSchema.parse(aboutProfileData);
