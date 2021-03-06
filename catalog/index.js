import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages =
  [ { path: "/"
    , title: "Welcome"
    , content: pageLoader(() => import("./pages/WELCOME.md"))
    }
  , { path: "/typography"
    , title: "Typography"
    , content: pageLoader(() => import("./pages/typography.md"))
    }
  , { path: "/mod-padding"
    , title: "Modular Padding"
    , content: pageLoader(() => import("./pages/mod-padding.md"))
    }
  , { path: "/utils"
    , title: "Utils"
    , content: pageLoader(() => import("./pages/utils.md"))
    }
  , { path: "/button"
    , title: "Button"
    , content: pageLoader(() => import("./pages/button.md"))
    }
  , { path: "/icon"
    , title: "Icon"
    , content: pageLoader(() => import("./pages/icon.md"))
    }
  , { path: "/user-widget"
    , title: "User Widget"
    , content: pageLoader(() => import("./pages/user-widget.md"))
    }
  , { path: "/map-controls"
    , title: "Map Controls"
    , content: pageLoader(() => import("./pages/map-controls.md"))
    }
  , { path: "/create-poi-card"
    , title: "Create POI Card"
    , content: pageLoader(() => import("./pages/create-poi-card.md"))
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
  , pageHeadingHeight: 100

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
