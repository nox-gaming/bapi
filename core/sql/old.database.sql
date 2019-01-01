-- Create database
create database "nox_guild";

-- Connect to it
\connect nox_guild

-- Create a requests table
CREATE TABLE "public"."requests" (
    "id" serial,
    "correlation_id" text,
    "created_at" text,
    "body" text,
    PRIMARY KEY ("id")
);

-- Create a schedules table
create table "schedules" (
	id serial,
	title varchar(150),
	is_done boolean
);

-- insert values
insert into "schedules" (title, is_done) values ('first schedule', false);