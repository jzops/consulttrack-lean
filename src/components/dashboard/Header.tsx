
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/layout/MainNav";

interface HeaderProps {
  onAuditRequestClick: () => void;
}

export function Header({ onAuditRequestClick }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <MainNav />
        <img 
          src="/lovable-uploads/79532bf8-1e6b-4925-be95-5d51e27c470d.png" 
          alt="LeanScale Logo" 
          className="h-4"
        />
      </div>
      <Button 
        variant="default" 
        className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
        onClick={onAuditRequestClick}
      >
        Request an Audit
      </Button>
    </div>
  );
}
