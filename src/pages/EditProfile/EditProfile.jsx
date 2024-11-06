import { Eprofile } from "../../components";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "../../components/ui/button";

const EditProfile = () => {
  return (
    <div className=" bg-stone-900 rounded-lg">
      <div className="flex text-white align-middle">
        <Button size="icon" className="mt-4 ml-4 mr-1">
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
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8em"
              height="8em"
              viewBox="0 0 24 24"
            >
              <g fill="white">
                <path d="M12 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></path>
                <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12a9.74 9.74 0 0 0 4 7.875l.001-.413C6.434 15.883 9.272 14.11 12 14.11s5.566 1.773 5.749 5.352l.001.413a9.74 9.74 0 0 0 4-7.875A9.75 9.75 0 0 0 12 2.25m-3.25 7a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></path>
                <path d="M16.259 20.773c-.004-.78-.007-1.209-.008-1.235c-.134-2.608-2.137-3.928-4.251-3.928s-4.117 1.32-4.251 3.928c-.001.026-.004.454-.008 1.235A9.7 9.7 0 0 0 12 21.75a9.7 9.7 0 0 0 4.259-.977"></path>
              </g>
            </svg>
          </div>

          <Eprofile />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
