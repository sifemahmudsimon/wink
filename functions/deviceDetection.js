import { headers } from 'next/headers';

export default async function detectDevice() {
  const userAgent = (await headers()).get('user-agent') || '';
  const isAndroid = /android/i.test(userAgent);
  const isiPhone = /iphone/i.test(userAgent);
  const isMobile = isAndroid || isiPhone;
  return {
    device: isAndroid ? 'android' : isiPhone ? 'iphone' : 'other',
    isMobile
  };
}