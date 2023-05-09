import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'b0deo8aj',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

console.log(process.env.REACT_APP_SANITY_TOKEN);



export const urlFor = (source) => imageUrlBuilder(client).image(source);