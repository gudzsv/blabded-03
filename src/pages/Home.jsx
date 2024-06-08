import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const handleCountries = async () => {
      setIsLoading(true);

      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    handleCountries();
  }, []);
  return (
    <Section>
      <Container>
        {countries && <CountryList countries={countries} />}
        {isLoading && <Loader />}
        {errorMessage && <div>{errorMessage}</div>}
      </Container>
    </Section>
  );
};
