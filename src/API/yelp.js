import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer yQj90BujIZron-fBsRUWBddCGLvTNtOR9xko6kMFYOcGZJQhRGCvBm0Sq5s0d111atZyQj8-97G8qxPtvU_zr4akXpsHBWBVpwZMI2mKBEssDIjD5IJpRhtHAh1oXXYx"
  }
});
