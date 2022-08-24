import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1652039886012-bcb6a3199b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fG5ld2ZvdW5kbGFuZCUyMGNhbmFkYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            width="677"
            height="450"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1592701601231-b49b21522694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="/"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1635606964073-5b4397b5aaaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="/"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1515678821046-f1ba75cb9f9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="/"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1565465685025-9b00dc77ad52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
