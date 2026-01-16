
declare type TParallaxProps = {
  children: React.ReactNode;
  urlImage: string;
  minHeight?: string;
  opacity?: number;
  className?: string;
};

const Parallax = (props: TParallaxProps) => {
  return (
    <div
      className={props.className + " relative z-0 w-full bg-cover bg-center bg-fixed bg-no-repeat"}
      style={{
        backgroundImage: `url(${props.urlImage})`,
        minHeight: props.minHeight || "500px",
      }}
    >
      <div
        className="absolute inset-0 bg-black z-[-1]"
        style={{ opacity: props.opacity || 0.65 }}
      />
      {props.children}
    </div>
  );
}

export default Parallax;