import Image from "next/image";

type SponsorshipPackageProps = {
  title: string;
  investment: string;
  benefits: string[];
  images: string[];
  variant?: 'red' | 'blue' | 'green' | 'yellow' | 'gray';
};

const SponsorshipPackage: React.FC<SponsorshipPackageProps> = ({
  title,
  investment,
  benefits,
  images,
  variant = 'gray',
}) => {
  
  const bgColor = {
    red: 'bg-red-900',
    blue: 'bg-sky-900',
    green: 'bg-green-900',
    yellow: 'bg-orange-200',
    gray: 'bg-gray-800',
  }[variant];
const color = {
    red: 'red-900',
    blue: 'sky-900',
    green: 'green-900',
    yellow: 'orange-200',
    gray: 'gray-800',
}[variant];

  const textColor = variant === 'yellow' ? 'text-black' : 'text-white';

  return (
    <div className={`${bgColor} p-8 shadow-lg rounded-md text-center mt-8`}>
      <h2 className={`${textColor} text-6xl font-bold mb-4`}>{title}</h2>
      <p className={`${textColor} text-4xl font-semibold mb-6`}>Investment: {investment}</p>
      <div className="flex">
        <div className="w-1/2 text-left relative">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 to-${color} mr-4`}></div>
          <ul className={`${textColor} text-xl mb-8 ml-6 leading-loose`}>
            {benefits.map((benefit, index) => (
              <li key={index} className="mb-2">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 align-middle">
          <div className="flex flex-wrap justify-center align-middle my-12">
            {images.map((image, index) => (
              <Image key={index} src={image} width="300" height="300" alt={`Image ${index + 1}`} className="w-2/3 rounded-lg border-4 border-slate-700" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPackage;