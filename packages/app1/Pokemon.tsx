import { useGetPokemonByNameQuery } from '@app/2/slice';

export function Pokemon() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  return <div></div>;
  // render UI based on data and loading state
}
