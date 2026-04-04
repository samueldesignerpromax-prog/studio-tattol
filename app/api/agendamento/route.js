let agendamentos = []

export async function POST(request) {
  try {
    const body = await request.json()
    const { nome, email, artista, data, horario } = body

    if (!nome || !email || !artista || !data || !horario) {
      return new Response(
        JSON.stringify({ message: 'Campos obrigatórios não preenchidos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const novoAgendamento = {
      id: Date.now(),
      ...body,
      status: 'agendado',
      criadoEm: new Date().toISOString()
    }

    agendamentos.push(novoAgendamento)

    return new Response(
      JSON.stringify({ 
        message: 'Agendamento realizado com sucesso',
        agendamento: novoAgendamento 
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
    JSON.stringify(agendamentos),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}
