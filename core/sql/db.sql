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
  ip text,
  user_agent text,
  method text,
  url text,
  request jsonb,
  response jsonb,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- SCHEDULE
create table "schedules" (
  id serial NOT NULL,
  title text,
  is_finished boolean,
  expiration_date text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- EVENTS BELONGING TO SCHEDULE
create table "events" (
  id serial NOT NULL,
  schedule_id integer NOT NULL,
  title text,
  is_finished boolean,
  response text,
  expiration_date text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE ONLY "schedules" ADD CONSTRAINT schedule_pk PRIMARY KEY (id);
ALTER TABLE ONLY "events" ADD CONSTRAINT events_pk PRIMARY KEY (id);

-- INSERT DATA
insert into "schedules" (title, is_finished) values ('first schedule', false);