import { MessageCircle } from "lucide-react";
import { Card } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { CoachInfo } from "@/types/report";

export function HairCoachCard({ coach }: { coach: CoachInfo }) {
  return (
    <Card className="p-7 flex flex-col items-center text-center bg-[var(--color-pine-50)] border-[var(--color-pine-100)]">
      <div className="h-16 w-16 rounded-full bg-[var(--color-pine-900)] flex items-center justify-center font-display text-xl text-[var(--color-paper)] mb-4">
        {coach.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
      </div>
      <p className="caption mb-1">{coach.title}</p>
      <h3 className="font-semibold text-[var(--color-ink-900)]">{coach.name}</h3>
      <p className="caption mt-1 mb-5">{coach.credentials}</p>
      <Button variant="primary" size="sm" className="w-full">
        <MessageCircle size={15} /> Message your coach
      </Button>
    </Card>
  );
}
