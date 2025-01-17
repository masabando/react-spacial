import { useEffect, useRef, useState } from "react"

export default function SpacialContainer({
  shift = 1,
  style = {},
  inline = false,
  className = "",
  children,
  ...props
}) {
  const ref = useRef()
  const [isRight, setIsRight] = useState(false)
  useEffect(() => {
    setIsRight(ref.current.closest(".spacial-side").classList.contains("spacial-side-right"))
  }, [])
  return (
    <div
      ref={ref}
      className={`spacial-container ${className}`}
      style={{
        display: inline ? "inline-block" : "block",
        transform: `translateX(${isRight ? `-${shift}` : `${shift}`}${isNaN(shift) ? "" : "%)"}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}