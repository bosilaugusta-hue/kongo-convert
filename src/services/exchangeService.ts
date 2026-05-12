export async function getExchangeRate(
  from: string,
  to: string
) {
  try {
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${from}`
    )

    if (!response.ok) {
      throw new Error('Erreur API')
    }

    const data = await response.json()

    return data.rates[to]
  } catch (error) {
    console.error(error)

    return null
  }
}