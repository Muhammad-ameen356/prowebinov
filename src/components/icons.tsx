
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/prowebinov.png"
        alt="ProwebInov Agency Logo"
        data-ai-hint="logo"
        width={240}
        height={50}
        style={{padding: 20}}
        className="object-contain"
      />
    </div>
  );
}
