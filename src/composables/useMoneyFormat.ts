export const useMoneyFormat = (sum: number) => {
	return Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
	}).format(sum)
}
