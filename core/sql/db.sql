CREATE DATABASE "nox_guild" WITH TEMPLATE = template0;

\connect "nox_guild";

DROP TABLE IF EXISTS requests, schedules, events, teams, members, games CASCADE;

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
  id bigint NOT NULL DEFAULT next_id() PRIMARY KEY,
  request_id text,
  ip text,
  user_agent text,
  method text,
  url text,
  request jsonb,
  response jsonb,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- GAMES
create table "games" (
  id serial NOT NULL PRIMARY KEY,
  hash text,
  title text,
  type text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(hash)
);

-- SCHEDULE
create table "schedules" (
  id serial NOT NULL PRIMARY KEY,
  title text,
  is_finished boolean,
  organizers text,
  team text,
  expiration_date text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- EVENTS BELONGING TO SCHEDULE
create table "events" (
  id serial NOT NULL,
  schedule_id integer REFERENCES schedules(id),
  title text,
  is_finished boolean,
  description text,
  expiration_date text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id, schedule_id)
);

-- TEAMS
create table "teams" (
  id serial NOT NULL PRIMARY KEY,
  hash text,
  title text,
  tag text,
  game_id integer REFERENCES games(id) NOT NULL,
  is_dissolved boolean,
  squads text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- MEMBERS
create table "members" (
  id serial NOT NULL PRIMARY KEY,
  firstname text,
  lastname text,
  nickname text,
  squads text,
  teams text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- INSERT DATA
insert into "members" (firstname, lastname, nickname, squads, teams) values ('Ugo', 'Arzur', 'Carbo', '["Blackwatch"]', '["Blackwatch"]');
insert into "games" (hash, title, type) values ('abcd', 'Overwatch', '["fps"]');
insert into "teams" (hash, title, is_dissolved, tag, squads, game_id) values ('xb03hi','Overwatch team', false, 'lgrf', '["Overwatch"]', 1);
insert into "schedules" (title, is_finished, team) values ('Overwatch Schedule', false, 'xb03hi');
insert into "events" (schedule_id, title, is_finished, description, expiration_date) values (1, 'Overwatch Schedule', false, 'hallo','xb03hi');