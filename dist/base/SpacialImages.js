import { useEffect, useRef, useState } from "react"


export default function SpacialImages({
  src,
  alt = "spacial image",
  style = {},
  children,
  ...props
}) {
  const ref = useRef();
  const [isLeft, setIsLeft] = useState(true);

  useEffect(() => {
    setIsLeft(ref.current.closest(".spacial-side").classList.contains("spacial-side-left"));
  }, [])
  return (
    <img
      ref={ref}
      src={isLeft ? src[0] : src[1]}
      alt={alt}
      style={style}
      {...props}
    />
  )
}