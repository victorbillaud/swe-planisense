-- CreateTable
CREATE TABLE "TreeLocation" (
    "idbase" SERIAL NOT NULL,
    "typeemplacement" TEXT NOT NULL,
    "domanialite" TEXT NOT NULL,
    "arrondissement" TEXT NOT NULL,
    "complementadresse" TEXT,
    "numero" INTEGER,
    "adresse" TEXT NOT NULL,
    "idemplacement" TEXT NOT NULL,
    "libellefrancais" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "espece" TEXT NOT NULL,
    "varieteoucultivar" TEXT,
    "circonferenceencm" INTEGER NOT NULL,
    "hauteurenm" INTEGER NOT NULL,
    "stadedeveloppement" TEXT NOT NULL,
    "remarquable" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TreeLocation_pkey" PRIMARY KEY ("idbase")
);
