import { useEffect, useRef, useState } from "react"

export default function SpacialImage({
  src,
  alt = "spacial image",
  rounded = 0,
  spacial = true,
  style = {},
  children,
  ...props
}) {
  const ref = useRef()
  const [aspectRatio, setAspectRatio] = useState(1)
  const [objectPosition, setObjectPosition] = useState("0% 50%")
  const [isLeft, setIsLeft] = useState(true)
  useEffect(() => {
    if (ref.current) {
      if (children) {
        const img = new Image();
        img.onload = () => {
          const w = img.naturalWidth
          const h = img.naturalHeight
          setAspectRatio((w === 0 ? 1 : (w / 2)) / (h === 0 ? 1 : h))
        }
        img.src = src;
      } else {
        const w = ref.current.naturalWidth
        const h = ref.current.naturalHeight
        setAspectRatio((w === 0 ? 1 : (w / 2)) / (h === 0 ? 1 : h))
      }
    }
    switch (spacial) {
      case true:
        setIsLeft(ref.current.closest(".spacial-side").classList.contains("spacial-side-left"));
        break;
      case false:
      case "left":
        setIsLeft(true);
        break;
      case "right":
        setIsLeft(false);
        break;
    }
  }, [spacial, children, src])
  useEffect(() => {
    setObjectPosition(isLeft ? "0% 50%" : "100% 50%")
  }, [isLeft])
  return children ? (
    <div
      ref={ref}
      className="spacial-image-div"
      style={{
        aspectRatio,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        width: "100%",
        height: "auto",
        objectFit: "cover",
        objectPosition,
        margin: "0 auto",
        borderRadius: rounded ? (isNaN(rounded) ? rounded : `${rounded}px`) : 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  ) : (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className="spacial-image"
      style={{
        aspectRatio,
        width: "100%",
        height: "auto",
        objectFit: "cover",
        objectPosition,
        margin: "0 auto",
        borderRadius: rounded ? (isNaN(rounded) ? rounded : `${rounded}px`) : 0,
        ...style,
      }}
      {...props}
    />
  )
}

