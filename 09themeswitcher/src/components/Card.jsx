export default function Card() {
  return (
    <div className="w-full border rounded-lg shadow"
         style={{
           backgroundColor: "var(--color-card-bg)",
           borderColor: "var(--color-border)",
           color: "var(--color-text)"
         }}>
      <a href="/">
        <img className="p-8 rounded-t-lg" src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product_image1" />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* rating stars (unchanged) */}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>$599</span>
          <a
            href="/"
            style={{ backgroundColor: "var(--color-primary)" }}
            className="text-white hover:opacity-90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  )
}
