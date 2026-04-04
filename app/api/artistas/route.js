const artistas = [
  {
    id: 1,
    nome: "Mike 'Ink' Rodriguez",
    especialidade: "Realismo 3D",
    experiencia: "10 anos",
    bio: "Especialista em retratos realistas e tatuagens em 3D.",
    imagem: "/images/artista1.jpg",
    rating: 5,
    trabalhos: 847,
    instagram: "@mikeink"
  },
  {
    id: 2,
    nome: "Ana 'Shadow' Costa",
    especialidade: "Preto e Cinza",
    experiencia: "8 anos",
    bio: "Mestra do sombreamento e técnicas em preto e cinza.",
    imagem: "/images/artista2.jpg",
    rating: 5,
    trabalhos: 623,
    instagram: "@anashadow"
  }
]

export async function GET() {
  return new Response(
    JSON.stringify(artistas),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}
