const kuliah=[
    {
    "id": 1,
    "judul": "Konsep Teknologi Informasi",
    "pengajar": "Agus Wirabumi"
    },
    {
    "id": 2,
    "judul": "Dasar Sistem Informasi",
    "pengajar": "Budi Wicaksono"
    },
   ];
   console.log(kuliah);
   console.log((kuliah[0]));
   console.log((kuliah[1]));
   const judul1=kuliah[0].judul; //contoh destructuring object
   const pengajar1=kuliah[0].pengajar;
   console.log(judul1, pengajar1);


   const judul2=kuliah[1].judul;
   const pengajar2=kuliah[1].pengajar;
   console.log(judul2, pengajar2);
   const { judul, pengajar } = kuliah[0];
   console.log(judul, pengajar);