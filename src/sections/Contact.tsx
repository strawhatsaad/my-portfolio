import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import SectionButton from "@/components/SectionButton";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
              zIndex: -1,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="relative">
              <SectionButton
                title="Contact Me"
                iconImage={<ArrowUpRightIcon className="size-6" />}
                href="mailto:strawhatsaad123@gmail.com"
                containerStyles="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
