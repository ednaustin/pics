import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bc1f57a2c1a94573bc7bfd94262ae7ccaf0be01fa9acc1ee7b2a07eae30b2ad4'
  }
});
