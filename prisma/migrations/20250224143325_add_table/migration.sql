-- CreateEnum
CREATE TYPE "Role" AS ENUM ('mahasiswa', 'dosen', 'admin');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'disetujui', 'selesai');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bimbingan" (
    "id" SERIAL NOT NULL,
    "mahasiswa_id" INTEGER NOT NULL,
    "dosen_id" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',

    CONSTRAINT "bimbingan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jadwal_bimbingan" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "link" TEXT,
    "bimbingan_id" INTEGER NOT NULL,

    CONSTRAINT "jadwal_bimbingan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progres" (
    "id" SERIAL NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "target_selesai" DATE NOT NULL,
    "bimbingan_id" INTEGER NOT NULL,

    CONSTRAINT "progres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dokumen" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bimbingan_id" INTEGER NOT NULL,

    CONSTRAINT "dokumen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat" (
    "id" SERIAL NOT NULL,
    "isi_pesan" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bimbingan_id" INTEGER NOT NULL,
    "pengirim_id" INTEGER NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penilaian" (
    "id" SERIAL NOT NULL,
    "nilai" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bimbingan_id" INTEGER NOT NULL,

    CONSTRAINT "penilaian_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "bimbingan" ADD CONSTRAINT "bimbingan_mahasiswa_id_fkey" FOREIGN KEY ("mahasiswa_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bimbingan" ADD CONSTRAINT "bimbingan_dosen_id_fkey" FOREIGN KEY ("dosen_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jadwal_bimbingan" ADD CONSTRAINT "jadwal_bimbingan_bimbingan_id_fkey" FOREIGN KEY ("bimbingan_id") REFERENCES "bimbingan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progres" ADD CONSTRAINT "progres_bimbingan_id_fkey" FOREIGN KEY ("bimbingan_id") REFERENCES "bimbingan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dokumen" ADD CONSTRAINT "dokumen_bimbingan_id_fkey" FOREIGN KEY ("bimbingan_id") REFERENCES "bimbingan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_bimbingan_id_fkey" FOREIGN KEY ("bimbingan_id") REFERENCES "bimbingan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_pengirim_id_fkey" FOREIGN KEY ("pengirim_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penilaian" ADD CONSTRAINT "penilaian_bimbingan_id_fkey" FOREIGN KEY ("bimbingan_id") REFERENCES "bimbingan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
