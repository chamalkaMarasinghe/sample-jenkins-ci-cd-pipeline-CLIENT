import React from 'react';
import { CONFIGURATIONS } from "../config/envConfig"

const ClientHome = () => {
  return (
    <>
      <div className="max-w-4xl px-6 py-10">
        <h1 className="mt-24 mb-4 text-4xl font-bold text-left text-primary">
          Welcome to my
        </h1>
        <h1 className="mt-24 mb-4 text-4xl font-bold text-left text-primary">
          REPO : {CONFIGURATIONS.REPO}
        </h1>
        <div className='text-white'>
          {CONFIGURATIONS.API_BASE_URL}
        </div>
      </div>
    </>
  );
};

export default ClientHome;
