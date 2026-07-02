interface BlobDecorationProps {
  color?: 'primary' | 'accent';
  className?: string;
}

export default function BlobDecoration({ color = 'primary', className = '' }: BlobDecorationProps) {
  const bg = color === 'accent' ? 'bg-accent/10' : 'bg-primary/10';
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${bg} ${className}`}
    />
  );
}
