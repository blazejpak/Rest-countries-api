import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <section className="mt-52 flex justify-center">
      <Circles
        height="160"
        width="160"
        color="#1660c2"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  );
};

export default Loading;
