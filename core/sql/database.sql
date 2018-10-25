CREATE DATABASE nox_guild;

\connect nox_guild;

-- Create a plan table
CREATE TABLE "public"."plan" (
    "id" serial,
    "type" text,
    "name" text,
    "created_at" text,
    "generated_at" text,
    "tags" text,
    PRIMARY KEY ("id")
);

-- Create a requests table to log them
CREATE TABLE "public"."requests" (
    "id" serial,
    "correlation_id" text,
    "created_at" text,
    "body" text,
    PRIMARY KEY ("id")
);
