import { ProfileForm } from "@/components/Form";
import StatsCard from "@/components/StatsCard";
import StatsPanel from "@/components/StatsPanel";
import { DataTableDemo } from "@/components/Table";

export default function HomePage() {
  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      <StatsPanel />

      <div className="bg-primary-foreground p-4 rounded-lg col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-1">
        <ProfileForm />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-3 h-fit">
        <DataTableDemo />
      </div>
    </div>
  );
}
