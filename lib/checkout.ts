import type { PackageId } from '@/lib/constants';

export async function startCheckout(tier: PackageId): Promise<boolean> {
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tier }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
