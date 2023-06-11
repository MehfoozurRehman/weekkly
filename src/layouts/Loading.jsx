import MoonLoader from "react-spinners/MoonLoader";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <MoonLoader size={100} color="#3fc344" />
    </div>
  );
}
