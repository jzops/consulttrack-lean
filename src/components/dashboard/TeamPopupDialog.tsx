
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface TeamPopupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedTeam: string;
  onBringInTeam: () => void;
}

export function TeamPopupDialog({
  open,
  onOpenChange,
  selectedTeam,
  onBringInTeam,
}: TeamPopupDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add {selectedTeam} Team</DialogTitle>
          <DialogDescription>
            Bringing this team into your workspace will give you access to their expertise and resources.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <h4 className="text-sm font-medium mb-2">Team Expertise</h4>
          <div className="space-y-2 mb-4">
            {selectedTeam === "Revenue Operations" ? (
              <>
                <p className="text-sm">The Revenue Operations team specializes in:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Sales and marketing alignment</li>
                  <li>Pipeline optimization</li>
                  <li>Revenue forecasting</li>
                  <li>GTM strategy implementation</li>
                  <li>Sales enablement</li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-sm">The Pipeline Operations team specializes in:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Lead qualification and scoring</li>
                  <li>Opportunity management</li>
                  <li>Sales process optimization</li>
                  <li>Conversion rate improvements</li>
                  <li>Pipeline analytics</li>
                </ul>
              </>
            )}
          </div>

          <div className="bg-muted/30 p-3 rounded-md text-sm mb-4">
            <h5 className="font-medium text-sm mb-2">Recent Team Achievements:</h5>
            {selectedTeam === "Revenue Operations" ? (
              <p>Implemented new attribution model that increased marketing ROI by 28% in the last quarter.</p>
            ) : (
              <p>Reduced sales cycle length by 35% through process optimization and automated qualification.</p>
            )}
          </div>

          <div className="text-sm">
            <span className="font-medium">Team Size:</span> {selectedTeam === "Revenue Operations" ? "7 members" : "5 members"}
          </div>
        </div>

        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onBringInTeam}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add {selectedTeam} Team
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
