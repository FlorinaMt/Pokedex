
export default function AboutPage() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <h2 style={{ marginBottom: "30px", marginTop: "20px" }}>You expected some text paragraphs here, but it was me, Pikachu!</h2>
        <img
          src="assets/meme.png"
          alt="Happy Pika Pika Pikachu"
        />
      </div>
    );
  }
  