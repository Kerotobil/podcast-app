import { useEffect, useState } from 'react';
import { BrowseScreen } from '../components/browse/screen';
import { search } from '../helpers/axios-api-client';

export default function Browse() {
  return (
    <div className="mx-auto max-w-sm h-screen min-h-screen bg-gray-900 max-h-screen">
      <div className="pr-4 w-5/6 mx-auto pt-12">
        <BrowseScreen />
      </div>
    </div>
  );
}
