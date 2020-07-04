import Link from 'next/link'

const Layout = ({ children }) => (
  <div className="bg-white antialiased">
    <div>
      <div>
        <div className="max-w-xl mx-auto px-8">{children}</div>
      </div>
    </div>
  </div>
)

export default Layout
