const BoxModel = ({ name }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        className={
          name === "& Lainnya"
            ? "md:px-6 p-3 rounded-xl bg-ijo border-nav text-nav border"
            : "md:px-6 p-3 rounded-xl bg-nav border-ijo border"
        }
      >
        {name}
      </div>
    </>
  );
};

export default BoxModel;
