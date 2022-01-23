import React from "react";
interface Props {
  className?: string;
  id?: string;
  src: string;
  alt?: string;
  onClick?(...args: any[]): void;
  onLoad?(...args: any[]): void;
}

const Image = ({ className, id, src, alt, onClick, onLoad }: Props) => (
  <img
    id={id}
    alt={alt}
    className={className}
    src={src}
    onClick={onClick}
    onLoad={onLoad}
  ></img>
);

export default Image;
