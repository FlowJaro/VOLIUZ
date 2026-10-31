type StitchViewProps = {
  file: string;
  title: string;
};

export default function StitchView({ file, title }: StitchViewProps) {
  return (
    <main aria-label={title}>
      <iframe
        className="stitch-frame"
        src={`/stitch/${file}`}
        title={title}
        loading="eager"
      />
    </main>
  );
}
