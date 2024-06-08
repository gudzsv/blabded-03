import { Container, CountryInfo, Heading, Section } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Country = () => {
  const { countryId } = useParams();
  const [coutryById, setCountryById] = useState({})
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const handleFecth = async () => {
      setLoader(true);
      try {
        const data = fetchCountry(countryId);
        setCountryById(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
      finally {setLoader(false)}
    }
    handleFecth();
  }, [])
  return (
    <Section>
      <Container>
        <CountryInfo {...coutryById} />
        {/* <Heading title="SearchCountry" bottom /> */}
      </Container>
    </Section>
  );
};
