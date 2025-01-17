export default function SpacialBody({
  isAR = true,
  style = {},
  sideStyle = {},
  children,
  ...props
}) {
  return (
    <div
      className="spacial-body"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        ...style,
      }}
      {...props}
    >
      <div
        className="spacial-side spacial-side-left"
        style={{
          width: "100%",
          ...sideStyle,
        }}
      >
        {children}
      </div>
      {isAR && (
        <div
          className="spacial-side spacial-side-right"
          style={{
            width: "100%",
            ...sideStyle,
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}