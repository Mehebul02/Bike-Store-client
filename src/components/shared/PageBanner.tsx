
interface PageBannerProps
{
    title:string;
    description:string;
}
const PageBanner = ({title,description}:PageBannerProps) => {
    return (
        <div>
            <section 
            className="w-full bg-[#234F67] h-[300px] flex flex-col justify-center items-center text-white text-center px-4"
            aria-label="About Bike Store">
            <h1 className="text-3xl font-bold mb-4 ">{title}</h1>
            <p className="text-md font-medium max-w-2xl">
           {description}
            </p>
          
        </section>
        </div>
    );
};

export default PageBanner;