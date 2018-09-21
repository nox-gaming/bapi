CREATE DATABASE bapi

\connect bapi

CREATE TABLE "public"."requests" (
    "id" serial,
    "correlation_id" text,
    "created_at" text,
    "body" text,
    PRIMARY KEY ("id")
);
