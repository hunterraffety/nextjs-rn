import Link from 'next/link'

const Layout = ({ children }) => (
  <div className="bg-white antialiased">
    <div className="mx-auto px-8">{children}</div>
  </div>
)

export default Layout
