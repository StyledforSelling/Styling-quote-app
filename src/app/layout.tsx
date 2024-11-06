
<antArtifact identifier="updated-layout" type="application/vnd.ant.code" language="typescript" title="Updated Layout">
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  )
}
</antArtifact>
