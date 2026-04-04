let orcamentos = []

export async function POST(request) {
  try {
    const body = await request.json()
    const { nome, email, estilo, tamanho, descricao } = body

    if (!nome || !email || !estilo || !tamanho || !descricao) {
      return new Response(
        JSON.stringify({ message: 'Campos obrigatórios não preenchidos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const novoOrcamento = {
      id: Date.now(),
      ...body,
      status: 'pendente',
      criadoEm: new Date().toISOString()
    }

    orcamentos.push(novoOrcamento)

    return new Response(
      JSON.stringify({ 
        message: 'Orçamento solicitado com sucesso',
        orcamento: novoOrcamento 
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Erro interno do servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

export async function GET() {
  return new Response(
    JSON.stringify(orcamentos),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}
