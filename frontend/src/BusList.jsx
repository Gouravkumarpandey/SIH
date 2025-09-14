import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BusList() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/buses")
      .then((r) => r.json())
      .then((data) => {
        setBuses(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: 50 }}>Loading buses...</p>;
  }

  return (
    <div style={{ padding: 28, fontFamily: "Inter, sans-serif", background: "#f7f9fb", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: 24, color: "#333" }}>Bus Tracking System</h1>
      
      <div style={{ display: "grid", gap: 16, maxWidth: 800 }}>
        {buses.length === 0 ? (
          <p>No buses available</p>
        ) : (
          buses.map((bus) => (
            <Link
              key={bus.id}
              to={`/bus/${bus.id}`}
              style={{
                textDecoration: "none",
                background: "#fff",
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(20,20,30,0.08)",
                border: "1px solid #e6eaf0",
                transition: "all 0.2s ease",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 24px rgba(20,20,30,0.12)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(20,20,30,0.08)";
              }}
            >
              <h3 style={{ margin: 0, color: "#333", fontSize: 18 }}>{bus.name}</h3>
              <p style={{ margin: "8px 0 0 0", color: "#666", fontSize: 14 }}>
                Click to view live tracking →
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
