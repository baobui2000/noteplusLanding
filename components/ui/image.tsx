import NextImage from "next/image"

export interface ImageProps extends React.ComponentProps<typeof NextImage> {
  alt: string
}

export function Image({ alt, ...props }: ImageProps) {
  return <NextImage alt={alt} {...props} />
}

