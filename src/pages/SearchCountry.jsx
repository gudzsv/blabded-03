import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (!region) return;
    const handleCountries = async () => {
      setIsLoading(true);

      try {
        const data = await fetchByRegion(region);
        setCountries(data);
        console.log('data: ', data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    handleCountries();
  }, [region]);

  const handleSubmit = value => {
    setRegion(value);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {countries && <CountryList countries={countries} />}
        {isLoading && <Loader />}
        {errorMessage && <Heading title={errorMessage} />}
      </Container>
    </Section>
  );
};
