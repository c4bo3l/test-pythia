import { useRef, useState } from "react";

function App() {
  const [matterId, setMatterId] = useState<number>();
  const ref = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (!ref?.current?.value) {
      setMatterId(undefined);
      return;
    }

    const id = +ref.current?.value;
    console.log();
    setMatterId(isNaN(id) ? undefined : id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "calc(100vh - 30px)",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <label htmlFor="matter-id">Matter Id</label>
        <input type="number" id='matter-id' ref={ref} />
        <button onClick={onClick}>
          Update Matter Id
        </button>
      </div>
      {matterId ? (
        <iframe
          key={matterId}
          src={`https://dev.pythia.legal/wl/matter/${matterId}/forms`}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
