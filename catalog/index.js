import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import MarkdownPage from './pages/MarkdownPage'

const pages =
  [ { path: "/"
    , title: "Welcome"
    , content: pageLoader(() => import("./pages/WELCOME.md"))
    }
  , { path: "/components"
    , title: "Components"
    , content: pageLoader(() => import("./pages/COMPONENTS.md"))
    }
  , { path: '/markdown'
    , styles:
        [ "/dist/markdown.css"
        , "https://cdn.jsdelivr.net/highlight.js/9.1.0/styles/github.min.css" 
        ]
    , title: 'Markdown'
    , component: MarkdownPage
    }
  ]

// See `DefaultTheme.js` for more contamination options:
// https://github.com/interactivethings/catalog/blob/v3.5.2/src/DefaultTheme.js
const foamTheme =
  // Colors
  { background: '#fff'
  , linkColor: '#fdbba6'

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  , lightColor: '#fff'

  // Used in PageHeader
  , pageHeadingBackground: '#000'

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  , pageHeadingHeight: 120

  // Used for navigation bar
  , navBarBackground: '#eee'
  , navBarTextColor: '#000'

  , sidebarColor: '#eee'
  , sidebarColorActive: '#000'
  , sidebarColorText: '#444'
  , sidebarColorTextActive: '#000'
  , sidebarColorHeading: '#000'

  // Fonts
  , fontFamily: "'Open Sans', sans-serif"
  , fontHeading: "'GT Haptik', sans-serif"
  , fontMono: "'Roboto Mono', monospace"
  }


ReactDOM.render(
  <Catalog
    title="FOAM Styleguide"
    pages={pages}
    theme={foamTheme}
  />,
  document.getElementById("root")
)