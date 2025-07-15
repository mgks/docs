// config.js: basic config for docmd
module.exports = {
  // Core Site Metadata
  siteTitle: 'mgks.dev documentation',
  // Define a base URL for your site, crucial for SEO and absolute paths
  // No trailing slash
  siteUrl: 'https://docs.mgks.dev', // Replace with your actual deployed URL

  // Logo Configuration
  logo: {
    light: '/assets/images/black.png', // Path relative to outputDir root
    dark: '/assets/images/white.png',   // Path relative to outputDir root
    alt: 'docs.mgks.dev logo',                      // Alt text for the logo
    href: '/',                              // Link for the logo, defaults to site root
  },

  // Directory Configuration
  srcDir: 'docs',       // Source directory for Markdown files
  outputDir: 'site',    // Directory for generated static site

  // Theme Configuration
  theme: {
    name: 'sky',            // Themes: 'default', 'sky'
    defaultMode: 'light',   // Initial color mode: 'light' or 'dark'
    enableModeToggle: true, // Show UI button to toggle light/dark modes
    customCss: [            // Array of paths to custom CSS files
      '/assets/css/custom.css', // Custom TOC styles
    ]
  },

  // Custom JavaScript Files
  customJs: [  // Array of paths to custom JS files, loaded at end of body
    // '/assets/js/custom-script.js', // Paths relative to outputDir root
  ],

  // Plugins Configuration
  // Plugins are configured here. docmd will look for these keys.
  plugins: {
    // SEO Plugin Configuration
    // Most SEO data is pulled from page frontmatter (title, description, image, etc.)
    // These are fallbacks or site-wide settings.
    seo: {
      // Default meta description if a page doesn't have one in its frontmatter
      defaultDescription: 'docmd is a Node.js command-line tool for generating beautiful, lightweight static documentation sites from Markdown files.',
      openGraph: { // For Facebook, LinkedIn, etc.
        // siteName: 'docmd Documentation', // Optional, defaults to config.siteTitle
        // Default image for og:image if not specified in page frontmatter
        // Path relative to outputDir root
        defaultImage: '/assets/images/docmd-preview.png',
      },
      twitter: { // For Twitter Cards
        cardType: 'summary_large_image',     // 'summary', 'summary_large_image'
        // siteUsername: '@docmd_handle',    // Your site's Twitter handle (optional)
        // creatorUsername: '@your_handle',  // Default author handle (optional, can be overridden in frontmatter)
      }
    },
    // Analytics Plugin Configuration
    analytics: {
      // Google Analytics 4 (GA4)
      googleV4: {
        measurementId: 'G-FT8PC9G3SY' // Replace with your actual GA4 Measurement ID
      }
    },
    // Enable Sitemap plugin
    sitemap: {
      defaultChangefreq: 'weekly',
      defaultPriority: 0.8
    }
    // Add other future plugin configurations here by their key
  },

  // Navigation Structure (Sidebar)
  // Icons are kebab-case names from Lucide Icons (https://lucide.dev/)
  navigation: [
      { title: 'Welcome', path: '/', icon: 'home' },
      { title: 'Memoryblock', path: 'https://docs.memoryblock.io', icon: 'grid-2x2', external: true },
      { title: 'Smart Webview',
        path: '/smart-webview/',
        icon: 'smartphone',
        children: [
          { title: 'Getting Started', path: '/smart-webview/getting-started', icon: 'monitor-down'},
          { title: 'Configuration', path: '/smart-webview/configuration', icon: 'settings'},
          { title: 'Customization', path: '/smart-webview/customization', icon: 'settings-2'},
          { title: 'Features',
            path: '/smart-webview/features',
            icon: 'zap',
            children: [
              { title: 'File Handling', path: '/smart-webview/features', icon: 'file'},
              { title: 'Firebase Messaging', path: '/smart-webview/features/firebase-messaging', icon: 'bell'},
              { title: 'Analytics', path: '/smart-webview/features/analytics', icon: 'chart-line'},
              { title: 'Navigation', path: '/smart-webview/features/navigation', icon: 'arrow-right-from-line'},
              { title: 'Sharing', path: '/smart-webview/features/sharing', icon: 'share-2'},
              { title: 'Printing', path: '/smart-webview/features/printing', icon: 'printer'},
              { title: 'Dark Mode & Theming', path: '/smart-webview/features/dark-mode', icon: 'moon'},
            ]
          },
          { title: 'Plugins',
            path: '/smart-webview/plugins',
            icon: 'plug',
            children: [
              { title: 'Architecture', path: '/smart-webview/plugins', icon: 'file-code'},
              { title: 'Creating Plugins', path: '/smart-webview/plugins/creating-plugins', icon: 'file-code'},
              { title: 'Playground', path: '/smart-webview/plugins/playground', icon: 'file-code'},
              { title: 'Toast', path: '/smart-webview/plugins/toast', icon: 'file-code'},
              { title: 'Location Access', path: '/smart-webview/plugins/location', icon: 'file-code'},
              { title: 'Rating System', path: '/smart-webview/plugins/rating-system', icon: 'file-code'},
              { title: 'Dialogs & Alerts', path: '/smart-webview/plugins/dialog', icon: 'file-code'},
              { title: 'Admob', path: '/smart-webview/plugins/admob', icon: 'file-code'},
              { title: 'Google Auth', path: '/smart-webview/plugins/google-auth', icon: 'file-code'},
              { title: 'QR & Barcode Reader', path: '/smart-webview/plugins/qr-barcode-reader', icon: 'file-code'},
              { title: 'Biometric Auth', path: '/smart-webview/plugins/biometric-auth', icon: 'file-code'},
              { title: 'Enhanced Video Player', path: '/smart-webview/plugins/enhanced-video-player', icon: 'file-code'},
              { title: 'WebRTC', path: '/smart-webview/plugins/webrtc', icon: 'file-code'},
              { title: 'Local Network Access', path: '/smart-webview/plugins/local-network-access', icon: 'file-code'},
              { title: 'Payment Gateway', path: '/smart-webview/plugins/payment-gateway', icon: 'file-code'},
              { title: 'Image Compression', path: '/smart-webview/plugins/image-compression', icon: 'file-code'},
              { title: 'CSS Injection', path: '/smart-webview/plugins/css-injection', icon: 'file-code'}
            ]
          },
          { title: 'Play Store Guide', path: '/smart-webview/play-store-guide', icon: 'shield-check'},
          { title: 'Contributing', path: '/smart-webview/contributing', icon: 'users'},
          { title: 'License', path: '/smart-webview/license', icon: 'file-code'},
        ]
      },
      { title: 'Keep to Notes',
        path: '/keep-to-notes/',
        icon: 'notebook',
        children: [
          { title: 'Documentation', path: '/keep-to-notes/documentation', icon: 'scroll'},
          { title: 'Migration', path: '/keep-to-notes/migration', icon: 'arrow-right-from-line'},
        ]
      },
      { title: 'GitHub Tree',
        path: '/github-tree/',
        icon: 'tree-pine',
        children: [
          { title: 'Getting Started', path: '/github-tree/getting-started', icon: 'monitor-down'},
        ]
      },
      { title: 'Docmd', path: 'https://docmd.mgks.dev', icon: 'feather', external: true },
  ],

  /*
  "navigation":

      {
        "anchor": "Smart Webview",
        "icon": "mobile",
        "groups":[

          {
            "group": "Features",
            "pages": [
              "smart-webview/features/file-handling",
              "smart-webview/features/location",
              "smart-webview/features/firebase-messaging",
              "smart-webview/features/analytics",
              "smart-webview/features/navigation",
              "smart-webview/features/sharing",
              "smart-webview/features/rating-system",
              "smart-webview/features/printing"
            ]
          },
          {
            "group": "Plugins",
            "pages": [
              "smart-webview/plugins/architecture",
              "smart-webview/plugins/creating-plugins",
              "smart-webview/plugins/playground",
              "smart-webview/plugins/toast",
              "smart-webview/plugins/admob",
              "smart-webview/plugins/google-auth",
              "smart-webview/plugins/qr-barcode-reader",
              "smart-webview/plugins/biometric-auth",
              "smart-webview/plugins/image-compression",
              "smart-webview/plugins/css-injection",
              "smart-webview/plugins/payment-gateway"
            ]
          },
          {
            "group": "Contributing",
            "pages": [
              "smart-webview/contributing",
              "smart-webview/license"
            ]
          }
        ]
      },
      {
        "anchor": "GitHub Tree",
        "icon": "tree",
        "groups": [
          {
            "group": "Getting Started",
            "pages": [
              "github-tree/index",
              "github-tree/usage"
            ]
          }
        ]
      },
      {
        "anchor": "Keep to Notes",
        "icon": "notebook",
        "groups": [
          {
            "group": "Documentation",
            "pages": [
              "keep-to-notes/index",
              "keep-to-notes/migration"
            ]
          }
        ]
      }
    ]
  }*/

  // Footer Configuration
  // Markdown is supported here.
  footer: '© ' + new Date().getFullYear() + ' Project.',

  // Favicon Configuration
  // Path relative to outputDir root
  favicon: '/assets/favicon.png',
};
