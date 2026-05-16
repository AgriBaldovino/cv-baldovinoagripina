export function buildProjectSlides(portada, screenshotModules) {
  const paths = Object.keys(screenshotModules).sort()

  if (paths.length) {
    return paths.map((path, index) => ({
      src: screenshotModules[path],
      alt: `Captura ${index + 1}`
    }))
  }

  return [{ src: portada, alt: 'Vista del proyecto' }]
}
