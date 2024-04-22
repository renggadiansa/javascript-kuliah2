const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
   ]);
   console.log(capital.size);
   console.log(capital.get("London")); //mendapatkan nilai
   capital.set("New Delhi", "India"); //memasukkan data baru
   console.log(capital.size);
   console.log(capital.get("New Delhi"));
   console.log(capital.get("Indonesia")); //undefined
   console.log(capital.has("New Delhi")); // cek data ? true : false
   console.log(capital.delete("New Delhi"));
   console.log(capital.has("New Delhi"));
   console.log(capital.get("New Delhi")); //undefined