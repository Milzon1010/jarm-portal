
export default function Products(){
  const items = [
    { title: "IoT Edge Kit", desc: "ESP32 + sensors + MQTT templates" },
    { title: "Network KPI Pack", desc: "RAN/microwave/GPON dashboards" },
    { title: "Anomaly Detector", desc: "ETL + models + alerting" },
    { title: "OTDR ML", desc: "Fiber cut/error classifier (beta)" }
  ];
  return (
    <main style={{maxWidth:980,margin:"0 auto",padding:"48px 22px"}}>
      <h1>Products</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12,marginTop:12}}>
        {items.map((it,i)=>(
          <div key={i} style={{padding:"14px 16px",border:"1px solid rgba(255,255,255,.08)",borderRadius:12}}>
            <strong>{it.title}</strong>
            <p style={{opacity:.9}}>{it.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
