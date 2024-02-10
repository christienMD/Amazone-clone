"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="header"
      src="https://links.papareact.com/f90"
      height={150}
      width={40}
      className="object-contain cursor-pointer"
    />
  );
};

export default Logo;
