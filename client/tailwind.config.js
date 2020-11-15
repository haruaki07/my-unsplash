const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: production, // npm run dev (false), npm run build (true)
    content: ["./src/**/*.html", "./src/**/*.svelte"]
  },
  theme: {
    extend: {
      boxShadow: {
        "outline-green": '0 0 0 3px rgba(61, 180, 109, 0.5)',
        "outline-red": '0 0 0 3px rgba(235, 87, 87, 0.5)'
      }
    },
  },
  variants: {},
  plugins: [],
}
