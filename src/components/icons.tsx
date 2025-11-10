import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.42,143.41-52,32a12,12,0,0,1-12.84,0l-52-32A12,12,0,0,1,48,156V100a12,12,0,0,1,8.58-11.41l52-32a12,12,0,0,1,12.84,0l52,32A12,12,0,0,1,208,100v56A12,12,0,0,1,173.42,167.41ZM101,116l27,16.5L155,116l-27-16.5Z"
      />
    </svg>
  );
}
