
export default function RFQPage() {
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
            Request RFQ
          </h1>

          <p className="section-subtitle">
            Upload drawings and
            describe requirements.
          </p>

          <form
            style={{
              marginTop: 40,
              display: "grid",
              gap: 20,
            }}
          >

            <input
              placeholder="Company"
              style={{
                padding: 16,
              }}
            />

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

            <select
              style={{
                padding: 16,
              }}
            >
              <option>
                Plastic Mold
              </option>

              <option>
                Metal Mold
              </option>

              <option>
                CNC / Additive
              </option>
            </select>

            <textarea
              rows={6}
              placeholder="Project Details"
              style={{
                padding: 16,
              }}
            />

            <input type="file" />

            <button
              className="btn-primary"
            >
              Submit RFQ
            </button>

          </form>

        </div>
      </section>

    </main>
  );
}

