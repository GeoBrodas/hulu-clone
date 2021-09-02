/* eslint-disable react/display-name */
import Image from 'next/image';

import { ThumbUpIcon } from '@heroicons/react/outline';

import { forwardRef } from 'react';

const Thumbnail = forwardRef((props, ref) => {
  const {
    original_name,
    title,
    overview,
    poster_path,
    backdrop_path,
    media_type,
    release_date,
    first_air_date,
    vote_count,
  } = props.data;
  // console.log(props.data);

  const url = `https://image.tmdb.org/t/p/original${
    poster_path || backdrop_path
  }`;
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <div
      ref={ref}
      className="p-2 m-1 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        // className="rounded-3xl"
        layout="responsive"
        alt={title}
        width={1920}
        height={2000}
        src={url || `${baseUrl}${poster_path}`}
      />
      <div className="p-2">
        <p className="truncate max-w-lg">{overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {title || original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {media_type && `${media_type} ▪ `}
          {''}
          {release_date || first_air_date} ▪{''}
          <ThumbUpIcon className="h-5 mx-2" /> {vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
