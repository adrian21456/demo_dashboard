import { ProfileForm } from "@/components/Form";
import StatsCard from "@/components/StatsCard";
import StatsPanel from "@/components/StatsPanel";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-2 lg:grid-cols-4">
      <StatsPanel />
      <div className="bg-primary-foreground p-4 rounded-lg col-span-2">
        <ProfileForm />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"></div>
    </div>
  );
}
