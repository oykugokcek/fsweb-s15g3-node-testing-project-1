/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  // ✨ kodlar buraya

  // Object.keys(obj).map(
  //   (k) => (obj[k] = typeof obj[k] == "string" ? obj[k].trim() : obj[k])
  // );
  // return obj;
  for (let i in obj) {
    typeof obj[i] == "string" ? (obj[i] = obj[i].trim()) : obj[i];
  }
  return obj;
}

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  // ✨ kodlar buraya
  typeof obj[prop] == "string" ? (obj[prop] = obj[prop].trim()) : obj[prop];
  return obj;
}

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya
  // let max = 0;
  // for (let i = 0; i < tamsayilar.length; i++) {
  //   for (let key in tamsayilar[i]) {
  //     if (tamsayilar[i][key] > max) {
  //       max = tamsayilar[i][key];
  //     }
  //   }
  // }
  // return max;

  let max = 0;
  for (let i = 0; i < tamsayilar.length; i++) {
    const element = tamsayilar[i];
    if (tamsayilar[i] > max) {
      max = element.tamsayi;
    }
  }
  return max;
}

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  let tempSayi = ilkSayi;

  this.asagiSay = () => {
    // ✨ kodlar buraya
    //   if(tempSayi== 0)
    //   {
    //     return 0;

    //   }
    // return tempSayi--;
    return tempSayi == 0 ? 0 : tempSayi--;
  };
}
const sayac = new Sayici(3);
for (let i = 0; i < 6; i++) {
  console.log(sayac.asagiSay());
}

function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */
  const mevsimler = { 1: "ilkbahar", 2: "yaz", 3: "sonbahar", 4: "kış" };
  // ✨ gerekli propları ekleyin
  let mevsim;
  let i = 0;
  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  this.sonraki = () => {
    // ✨ kodlar buraya
    if (i < 4) {
      mevsim = mevsimler[Object.keys(mevsimler)[i]];
      i++;
    } else {
      i = 0;
      mevsim = mevsimler[Object.keys(mevsimler)[0]];
      i++;
    }
    return mevsim;
  };
}
const mevsimler = new Mevsimler();
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());

function Araba(isim, depo, kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol
   */

  this.odometer = 0; // araba 0 kilometrede yüklenecek
  this.depo = depo; // araba full depoyla yüklenecek
  console.log(this.depo, depo);
  this.kml = kml;
  // ✨ gerekli propları ekleyin
  this.toplamYol = depo * kml;
  this.kalanYol = this.toplamYol;
  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  this.sur = (gidilecekyol) => {
    // ✨ kodlar buraya
    let kalanYol = this.kalanYol;
    if (this.kalanYol < gidilecekyol) {
      gidilecekyol = 0;
    }
    kalanYol -= gidilecekyol;
    console.log(`kalan yol: ${kalanYol}`);
    this.odometer += gidilecekyol;
    this.kalanYol = kalanYol;
    console.log(`gidilecek yol: ${gidilecekyol}`);
    this.depo -= gidilecekyol / this.kml;
    console.log(`benzin: ${Math.round(this.depo)}`);
    return this.odometer;
  };

  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  this.benzinal = (litre) => {
    // ✨ kodlar buraya
    if (litre > 20) {
      litre = 20;
    }
    this.depo = litre * this.kml;
    return this.depo;
  };
}
const focus = new Araba("focus", 20, 30);
console.log(focus.sur(100)); // 100 döndürür
console.log(focus.sur(200)); // 100 döndürür
console.log(focus.sur(100)); // 100 döndürür
console.log(focus.sur(200)); // 100 döndürür
console.log(focus.sur(200)); // 100 döndürür
console.log(`bura ${focus.benzinal(99)}`);
console.log(`slm ${focus.benzinal(10)}`);

/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
function asenkronCiftSayi(sayi) {
  // ✨ implement
  // if (sayi % 2 == 0) {
  //   return true;
  // }
  // return false;
  return sayi % 2 == 0 ? true : false;
}

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
};
