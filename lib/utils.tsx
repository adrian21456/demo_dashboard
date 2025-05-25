import { clsx, type ClassValue } from "clsx";
import { Bell } from "lucide-react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function showToast({
  title,
  message = "",
  color = "blue",
  icon = <Bell className="w-4 h-4" />,
}: {
  title: string;
  message: string;
  color: string;
  icon: React.ReactNode;
}) {
  toast(
    <div
      className="flex items-start space-x-2 p-3 w-full rounded-md"
      style={{ width: "100%" }}
    >
      <div className="mt-1 text-red-500">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium text-sm text-red-700">{title}</h4>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
    </div>,
    {
      duration: 50000,
    }
  );
}
