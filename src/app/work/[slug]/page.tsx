interface WorkPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto min-h-dvh w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-[clamp(3rem,4vw,4.5rem)]">
      <p className="text-burgundy font-mono text-xs tracking-[0.18em] uppercase">Project Record</p>

      <h1 className="font-display mt-6 text-7xl tracking-[-0.03em] capitalize md:text-9xl">
        {slug}
      </h1>
    </main>
  );
}
