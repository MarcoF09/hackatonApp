export enum Actions {
  GET_COMPANIES = 'GET_COMPANIES',
}

export const getCompanies = (title: string, description: string) => ({
  description,
  id: 1,
  title,
  type: Actions.GET_COMPANIES,
})
