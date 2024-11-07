import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import "./profile.css";

function Users({ name, avatar, className, ...props }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/sign-in");
  };

  const handleEditProfile = () => {
    navigate("/");
  };

  return (
    <Card className={cn("w-[250px] mt-10 mb-10", className)} {...props}>
      <CardContent className="flex flex-col items-center justify-center text-center h-full">
        <div className="mt-10">
          <img
            src={
              avatar ||
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kIj48cGF0aCBkPSJNMTggMjBhNiA2IDAgMCAwLTEyIDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSI0Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4="
            }
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>Welcome Back, {name || "Sarah"}!</CardTitle>
        </CardHeader>
        <div className="">
          <Button onClick={handleEditProfile}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-pencil"
            >
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
              <path d="m15 5 4 4" />
            </svg>
            Edit Profile
          </Button>
        </div>
        <div className="p-4">
          <Button
            variant="destructive"
            className="w-32"
            onClick={handleSignOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
            Sign Out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Users;
