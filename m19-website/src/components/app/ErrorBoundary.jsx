import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("M19 app error:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            padding: 48,
            background: "#061326",
            color: "#fff",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 28, marginBottom: 12 }}>
            Something went wrong
          </h1>
          <p style={{ color: "rgba(139,173,212,0.9)", marginBottom: 16, maxWidth: 560 }}>
            {this.state.error.message}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              background: "#1FC1C6",
              color: "#061326",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
