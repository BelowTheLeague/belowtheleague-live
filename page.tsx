// page.tsx
import AppLayout from './components/layout/AppLayout';
import LiveScreen from './components/live/LiveScreen';

export default function HomePage() {
  return (
    <AppLayout activeTab="live">
      <LiveScreen />
    </AppLayout>
  );
}
