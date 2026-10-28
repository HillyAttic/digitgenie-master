'use client'

import Image from 'next/image'

export default function TemplateImage({ 
  src, 
  alt, 
  width, 
  height,
  className 
}: { 
  src: string; 
  alt: string; 
  width: number; 
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = 'https://via.placeholder.com/400x240?text=No+Image'
      }}
    />
  )
}