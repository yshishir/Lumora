/*
  Before applying this migration, update or delete existing Blog rows where thumbnail is NULL.
*/
ALTER TABLE "Blog" ALTER COLUMN "thumbnail" SET NOT NULL;
