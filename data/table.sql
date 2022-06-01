BEGIN.

DROP TABLE IF EXISTS "answer","question";

CREATE TABLE IF NOT EXISTS "answer" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT NOT NULL,
    "question_id" INTEGER NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "question" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT NOT NULL,
    "answer_id" INTEGER NOT NULL REFERENCES "answer" ("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

ALTER TABLE "answer"
ADD FOREIGN KEY ("question_id") REFERENCES "question" ("id");

COMMIT;