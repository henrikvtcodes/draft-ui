import React from 'react'

export default function Changelog() {
  return (
    <div className="my-12 w-full">
      <div className="prose prose-slate mx-auto dark:prose-invert">
        <div>
          <h1 className="mb-4">Changelog</h1>
          <p className="lead mt-4">
            Stay up to date on the latest changes and updates
          </p>
        </div>
        <div>
          <h2>July 2023</h2>
          <p>
            Using <code>react-aria-components@1.0.0-alpha.5</code>
          </p>
          <ul>
            <li>We have a logo and a homepage!</li>
            <li>
              Docs updated; content pages are live including installation
              instructions
            </li>
            <li>Components and the rest of the site support dark mode.</li>
            <li>
              Tabs now use <code>--border-width</code> variable to avoid issues
              with nested tabs
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
