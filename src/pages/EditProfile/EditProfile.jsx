import { Eprofile } from "../../components";
import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/tasks");
  };
  return (
    <div className=" bg-stone-900 rounded-lg">
      <div className="flex text-white align-middle">
        <Button size="icon" className="mt-4 ml-4 mr-1" onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left"
          >
            <path d="m15 24-12-12 12-12" />
          </svg>
        </Button>
        <h3 className="mt-7 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Edit Profil
        </h3>
      </div>
      <div className="px-14 pb-8 border-stone-200 bg-stone-900 rounded-lg">
        <div className="w-[18rem] text-white">
          <Eprofile />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
