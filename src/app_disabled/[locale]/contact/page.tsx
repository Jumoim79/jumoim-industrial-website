export default function Page() {
  return (
    <main>

      <section className="section-padding">
        <div
          className="container-jumoim"
          style={{
            maxWidth: 900,
          }}
        >

          <h1 className="section-title">
            Contact Us
          </h1>

          <form
            style={{
              display: "grid",
              gap: 20,
              marginTop: 40,
            }}
          >

            <input
              placeholder="Name"
              style={{
                padding: 16,
              }}
            />

            <input
              placeholder="Email"
              style={{
                padding: 16,
              }}
            />

            <textarea
              rows={6}
              placeholder="Message"
              style={{
                padding: 16,
              }}
            />

            <button
              className="btn-primary"
            >
              Submit
            </button>

          </form>

        </div>
      </section>

    </main>
  );
}
