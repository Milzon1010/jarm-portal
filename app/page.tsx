
export default function Page(){
  return (
    <main style={{maxWidth:980,margin:"0 auto",padding:"56px 22px"}}>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <strong>JARM TechSight</strong>
        <nav style={{display:"flex",gap:16,fontSize:14}}>
          <a href="https://www.allanraytechsight.co.id">Lobby</a>
          <a href="mailto:milzon.mohd@allanraytechsight.co.id">Contact</a>
        </nav>
      </header>

      <section style={{marginTop:24}}>
        <h1 style={{fontSize:36,margin:"8px 0"}}>JARM TechSight</h1>
        <p style={{opacity:.9,lineHeight:1.6}}>Products, playbooks, and analytics that turn operations data into reliable action.</p>
      </section>

      <section style={{marginTop:28,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12}}>
        <a style={{display:"block",padding:"14px 16px",border:"1px solid rgba(255,255,255,.08)",borderRadius:12}} href="/products">Products</a>
        <a style={{display:"block",padding:"14px 16px",border:"1px solid rgba(255,255,255,.08)",borderRadius:12}} href="/cases">Case Studies</a>
        <a style={{display:"block",padding:"14px 16px",border:"1px solid rgba(255,255,255,.08)",borderRadius:12}} href="/pricing">Pricing</a>
        <a style={{display:"block",padding:"14px 16px",border:"1px solid rgba(255,255,255,.08)",borderRadius:12}} href="mailto:milzon.mohd@allanraytechsight.co.id">Contact</a>
      </section>
    </main>
  );
}
