import * as React from 'react';
import Card from '@mui/material/Card';
import ImageListItem from '@mui/material/ImageListItem';

export default function MediaCard(props) {
  return (
    <Card sx={{ width: 300 }} >
      <ImageListItem key={1}>
        <img
          src={props.img}
          alt={'TEST'}
          loading="lazy"
          className='mobile'
        />
      </ImageListItem>
    </Card>
  );
}
