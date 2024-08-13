import { useRef, useState } from "react";

function App() {
  const [matterId, setMatterId] = useState<number>();
  const [token, setToken] = useState<string>();
  const matterIdRef = useRef<HTMLInputElement | null>(null);
  const tokenRef = useRef<HTMLTextAreaElement | null>(null);

  const onClick = () => {
    if (!matterIdRef?.current?.value) {
      setMatterId(undefined);
      return;
    }

    if (!tokenRef?.current?.value) {
      setToken(undefined);
      return;
    }

    const id = +matterIdRef.current?.value;
    setMatterId(isNaN(id) ? undefined : id);
    setToken(tokenRef.current.value);
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
        <input type="number" id='matter-id' ref={matterIdRef} />
        
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <label htmlFor="token">Token</label>
        <textarea ref={tokenRef} id="token" style={{
          width: '100%'
        }} rows={5} />
      </div>
      <button onClick={onClick}>
          Update
        </button>
      {matterId && token ? (
        <iframe
          key={matterId}
          src={`https://dev.pythia.legal/wl/matter/${matterId}/forms?token=${token}`}
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
