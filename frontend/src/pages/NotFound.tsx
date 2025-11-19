import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-muted-foreground mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">
          Page not found
        </h2>

        {/* Subtext */}
        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Go back home button */}
        <div className="flex justify-center items-center ">
            
        <NavLink to="/">
          <Button className="flex items-center gap-2 rounded-md px-6 py-3">
            <ArrowLeft size={18} />
            Go back home
          </Button>
        </NavLink>
            
            

        </div>
      </div>
    </div>
  );
}
