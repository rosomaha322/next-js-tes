import Register from '../src/modules/register';
import { PublicLayout } from '@/src/common/components';

export default function Home() {
  return (
    <PublicLayout>
      <Register />
    </PublicLayout>
  );
}
