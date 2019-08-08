DROP DATABASE IF EXISTS gallary_database_test;
CREATE DATABASE gallary_database_test;

\c gallary_database_test

CREATE TABLE users (
   profiler_id SERIAL PRIMARY KEY,
   profilername VARCHAR (255),
   secretpass VARCHAR (255)
);