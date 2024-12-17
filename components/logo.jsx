import Image from "next/image";

import dagrs from '@/public/dagrs.png';

export function LogoIcon(props) {
  return (
      <Image src={dagrs} alt="Dagrs" unoptimized {...props}/>
  )
}