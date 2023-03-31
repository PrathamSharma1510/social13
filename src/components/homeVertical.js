import React, { useState } from 'react';
import styled from 'styled-components';
import ListingResult from './listingResult';

const Title = styled.h1`
  text-align: center;
`;

const Fieldset = styled.fieldset`
  text-align: center;
`;

const Hint = styled.p`
  text-align: center;
  font-style: italic;
`;

function HomeVertical(props) {
  const [searchField, setSearchField] = useState('');
  const [filterField, setFilterField] = useState('tags');
  const [listing, setListing] = useState(null);

  const changeHandler = event => {
    const { name, value } = event.target;
    name === 'searchField' ? setSearchField(value) : setFilterField(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    props.onSubmit && props.onSubmit({ searchField, filterField });

    try {
      const res = await fetch(`/api/listing/${filterField}/${searchField}`);
      const listingData = await res.json();

      if (res.status !== 200) {
        throw Error(listingData.message);
      }

      setListing(listingData);
    } catch (err) {
      console.log('no results');
    }
  };

  return (
    <div>
      <Title>Software Engineering SFSU Fall 2019 Section 1 Team 5</Title>
      <form onSubmit={handleSubmit}>
        <Fieldset>
          <select value={filterField} name="filterField" onChange={changeHandler}>
            <option value="tags">Tags</option>
            <option value="zipcodes">Zipcode</option>
          </select>
          <label>
            Search:
            <input
              type="text"
              name="searchField"
              placeholder="search"
              value={searchField}
              onChange={changeHandler}
            />
          </label>
          <button type="submit">Search</button>
        </Fieldset>
      </form>
      <Hint>
        <b>valid test searches</b>
        <br />
        <b>tags:</b> kitchen, pets, living room, haunted, parking
        <br />
        <b>zipcodes:</b> 94132, 94105
        <br />
      </Hint>
      <ListingResult value={listing} />
    </div>
  );
}

export default HomeVertical;
