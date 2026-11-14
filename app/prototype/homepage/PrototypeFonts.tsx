const GOOGLE_FONTS =
  'https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600&family=IBM+Plex+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Geist+Mono:wght@400&family=Chakra+Petch:wght@600&family=IBM+Plex+Mono:wght@500&family=Host+Grotesk:wght@400;500&family=Atkinson+Hyperlegible+Mono:wght@400;500&family=Syne:wght@700&family=Onest:wght@400;500&family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,500..800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;1,8..60,400&family=Epilogue:wght@400;600;700&family=Literata:opsz,wght@7..72,400;7..72,500&family=Martian+Mono:wdth,wght@75..112.5,400..700&family=Bungee&family=Chivo:wght@400;700;900&family=Silkscreen:wght@700&display=swap'

const FONTSHARE =
  'https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=cabinet-grotesk@800&display=swap'

export default function PrototypeFonts() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={GOOGLE_FONTS} />
      <link rel="stylesheet" href={FONTSHARE} />
    </>
  )
}
