import React from 'react';
import { TextField } from '@mui/material';
import { ISearchBar } from 'interfaces/interface';
import './style.css';

class SearchForm extends React.Component<Record<string, number>, ISearchBar> {
  state: ISearchBar = {
    searchInput: '',
  };

  componentDidMount() {
    const search = localStorage.getItem('searchLocalStorage');
    if (search) {
      this.setState({
        searchInput: search,
      });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchLocalStorage', this.state.searchInput);
  }

  handleChange(value: string) {
    this.setState({ searchInput: value });
  }

  render() {
    const { searchInput } = this.state;
    return (
      <div className="search-form">
        <TextField
          value={searchInput}
          className="search-bar"
          placeholder="Search..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.handleChange(e.currentTarget.value)
          }
        ></TextField>
      </div>
    );
  }
}

export default SearchForm;
