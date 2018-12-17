CREATE DATABASE "nox_guild" WITH TEMPLATE = template0;

\connect "nox_guild";

-- FUNCTION next_id to process automated id
CREATE FUNCTION next_id (OUT result bigint)
  RETURNS bigint
  LANGUAGE plpgsql
AS $$
DECLARE
  our_epoch bigint := 1314220021721;
  seq_id bigint;
  now_millis bigint;
  shard_id int := 5;
BEGIN
  SELECT
    nextval('table_id_seq') % 1024 INTO seq_id;
  SELECT
    FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
  result := (now_millis - our_epoch) << 23;
  result := result | (shard_id << 10);
  result := result | (seq_id);
END;
$$;

-- CREATE A SEQUENCE
CREATE SEQUENCE table_id_seq
  START WITH 1
  INCREMENT BY 1
  NO MINVALUE
  NO MAXVALUE
  CACHE 1;

-- REQUESTS GATEWAY
CREATE TABLE requests (
  id bigint NOT NULL DEFAULT next_id(),
  request_id text,
  token text,
  method text,
  url text,
  response_time text,
  request jsonb,
  response jsonb,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- PLANS
create table "plans" (
  id serial NOT NULL,
  title text,
  is_done text,
  expiration_date text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- EVENTS BELONGING TO PLANS
create table "events" (
  id serial NOT NULL,
  plan_id text,
  title text,
  is_done text,
  response text,
  expiration_date text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE ONLY "plans" ADD CONSTRAINT plans_pk PRIMARY KEY (id);
ALTER TABLE ONLY "events" ADD CONSTRAINT events_pk PRIMARY KEY (id);

-- INSERT DATA
insert into "plans" (title, is_done) values ('first plan', false);