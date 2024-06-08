import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countries = [] }) => {
  return (
    <Grid>
      {countries.map(({ id, country, flag }) => (
        <GridItem key={id}>
          <Link to={'country/' + id}>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
