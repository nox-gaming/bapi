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

-- Create a plans table
create table "plans" (
	id serial,
	title varchar(150),
	is_done boolean
);

-- insert values
insert into "plans" (title, is_done) values ('first plan', false);