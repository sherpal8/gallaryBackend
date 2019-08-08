DROP DATABASE IF EXISTS gallary_database;
CREATE DATABASE gallary_database;

\c gallary_database

CREATE TABLE users (
   profiler_id SERIAL PRIMARY KEY,
   profilername VARCHAR (255),
   secretpass VARCHAR (255)
);