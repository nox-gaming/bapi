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

-- TEAMS
create table "teams" (
  id bigint NOT NULL DEFAULT next_id(),
  hash text,
  title text,
  tag text,
  game_id serial REFERENCES games(id) NOT NULL,
  is_dissolved boolean,
  squads text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE(hash)
);

-- SCHEDULE
create table "schedules" (
  id bigint NOT NULL DEFAULT next_id() PRIMARY KEY,
  title text,
  is_finished boolean,
  organizers text,
  team_id bigint REFERENCES teams(id),
  game_id serial REFERENCES games(id),
  expiration_date text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(team_id, game_id)
);

-- EVENTS BELONGING TO SCHEDULE
create table "events" (
  id bigint NOT NULL DEFAULT next_id(),
  schedule_id integer REFERENCES schedules(id),
  title text,
  is_finished boolean,
  description text,
  expiration_date text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id, schedule_id)
);


-- MEMBERS
create table "members" (
  id bigint NOT NULL DEFAULT next_id() PRIMARY KEY,
  password text,
  firstname text,
  lastname text,
  nickname text,
  games jsonb,
  tag text,
  squads text,
  teams text,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


select * from members
where created_at > now();

--- overwatch_players
create view ovewatch_players as
select * from members where firstname = 'Ugo';

-- INSERT DATA
insert into "games" (hash, title, type) values ('abcd', 'Overwatch', '["FPS"]');
insert into "games" (hash, title, type) values ('aodu', 'World Of Warcraft', '["MMO"]');
insert into "games" (hash, title, type) values ('azer', 'League Of Legends', '["RTS"]');

insert into "members" (password, firstname, lastname, nickname, games, tag, squads, teams) values ('azerty', 'Camille', 'Guerin', 'Pölaire', '{ "games": [1, 2, 3, 5] }', 'azerty', '["Blackwatch"]', '["Blackwatch"]');
insert into "members" (firstname, lastname, nickname, games, tag, squads, teams) values ('Ugo', 'Arzur', 'Carbo', '{ "games": [1, 2, 3, 5] }', 'abcd', '["Blackwatch"]', '["Blackwatch"]');
insert into "members" (firstname, lastname, nickname, games, tag, squads, teams) values ('Ugo', 'Arzur', 'Carbo', '{ "games": [1, 2, 3, 5] }', 'abcde', '["Blackwatch"]', '["Blackwatch"]');

insert into "teams" (hash, title, is_dissolved, tag, squads, game_id) values ('blc','Blackwatch', false, 'blackwatch', '["Overwatch"]', 1);
insert into "teams" (hash, title, is_dissolved, tag, squads, game_id) values ('lgf','La Griffe', false, 'lagriffe', '["Overwatch"]', 1);
insert into "teams" (id, hash, title, is_dissolved, tag, squads, game_id) values (1, 'lolToken','League of Legend', false, 'lgrf', '["Overwatch"]', 3);

insert into "schedules" (id, title, is_finished, team_id) values (1, 'Blackwatch Schedule', false, 1);

insert into "events" (schedule_id, title, is_finished, description, expiration_date) values (1, 'Overwatch Schedule', false, 'Overwatch League Open Division - preparation','xb03hi');