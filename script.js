(() => {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("İçerik yüklendi");
         // Bu kodu var kullanmadan yazmayı bilmediğim için yapamadım. Çok fazla yerde çağırılıyor.
        var screen1 = document.querySelector(".ekran1");

        // Ekrana yazı yazdırma kodu
        (() => {
            let btnNumber = document.querySelectorAll(".nmb");
            let operators = document.querySelectorAll(".btnOperator");
            for(let i = 0; i < btnNumber.length; i++){
                btnNumber[i].addEventListener("click", write);
            }
            for(let i = 0; i < operators.length; i++){
                operators[i].addEventListener("click", write);
            }
            function write() {
                screen1.value += this.value;
            }
        })();

        // Ekranda yazan değerleri temizleme fonksiyonu
        document.querySelector(".clearLine").addEventListener("click", () => screen1.value="");
        document.querySelector(".clearAll").addEventListener("click", () => screen1.value="");
        document.querySelector(".clearLast").addEventListener("click", () => screen1.value = screen1.value.slice(0,-1));

        // Toplama fonksiyonu
        document.querySelector(".equal").addEventListener("click", () => screen1.value = eval(screen1.value));

        // Yüzde alma fonksiyonu
        document.querySelector("#percntOpt").addEventListener("click", () => screen1.value = screen1.value / 100);

        // Karekök alma fonksiyonu
        document.querySelector(".sqrtOpt").addEventListener("click", () => screen1.value = Math.sqrt(screen1.value));

        // Üs alma fonksiyonu
        document.querySelector(".powOpt").addEventListener("click", () => screen1.value = Math.pow(screen1.value, 2));

        // Ekranda yazan değerin 1'e bölünmüş değerini veren fonksiyon
        document.querySelector(".divideOneOpt").addEventListener("click", () => screen1.value =  1 / screen1.value);

        // Ekranda yazan değeri pozitif ise negatif, negatif ise pozitif yapan fonksiyon
        document.querySelector(".absOpt").addEventListener("click", () => {
            if(screen1.value < 0){
                screen1.value = Math.abs(screen1.value);
            }
            else if(screen1.value > 0){
                screen1.value *= -1;
            }
            else{
                screen1.value = screen1.value;
            }
        });

        // Window küçükken sağ üst tarafta bulunan history butonuna tıklandığı zaman açılan alt pencere kodu. HTML kısmında onclick ile çağırılmaktadır.
        (()=>{
            let bttmHistory = document.getElementById("history");
            let content = document.getElementById("bottomHistory");
            bttmHistory.onclick = () => {
                if(content.style.display == "none")
                {
                    content.style.display = "";
                }
                else
                {
                    content.style.display = "none";
                }
            }
        })();
    });
})();