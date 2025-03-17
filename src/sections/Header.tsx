"use client";

import CustomButton from "@/components/CustomButton";

export const Header = () => {
  const handleScroll = (id: string) => {
    const nextSection = document.getElementById(id);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <CustomButton
          title="Home"
          containerStyles="nav-item"
          handleClick={(e) => handleScroll("home")}
        />
        <CustomButton
          title="Projects"
          containerStyles="nav-item"
          handleClick={(e) => handleScroll("projects")}
        />
        <CustomButton
          title="About"
          containerStyles="nav-item"
          handleClick={(e) => handleScroll("about")}
        />
        <CustomButton
          title="Contact"
          containerStyles="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          handleClick={(e) => handleScroll("contact")}
        />
      </nav>
    </div>
  );
};
