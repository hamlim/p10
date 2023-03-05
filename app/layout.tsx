// import { themeClass } from '@ds-pack/components'
// import '@ds-pack/components/dist/vars.css'
// import '@ds-pack/components/dist/reset.css'
import '@styles/globals.css'
import { Metadata } from 'next'

export default function Layout({ children }) {
  return (
    <html lang="en-US" data-theme="corporate" /*className={themeClass} */>
      <body>
        <main>
          <header></header>
          <section>{children}</section>
          <footer></footer>
        </main>
      </body>
    </html>
  )
}

export let metadata: Metadata = {
  title: 'p10',
  icons: [
    {
      url: '/favicon.ico',
      rel: 'shortcut icon',
    },
  ],
}
