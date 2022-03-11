// JavaScript Document
console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")

const b =document.getElementById("btn") 
b.addEventListener("click", myFunction);

function myFunction() {
  alert ("Maaf Data Belum Lengkap, info lengkap cek ig @semauigm :)");
}



const next = document.getElementById("btn-0") 
next.addEventListener("click", mySecondFunction);


function mySecondFunction() {
//	document.getElementById("btn-0").innerHTML =- "#btn-0";	
  	document.getElementById("btn-0").innerHTML = "<p> Senat Mahasiswa (SEMA) dalam hal ini adalah pusat dari setiap gerakan mahasiswa yang ada. Mencoba untuk mengakomodir semua pola yang ada untuk dijadikan sebuah gerakan kedepannya. Termasuk dalam berkoodinasi dengan setiap organisasi mahasiswa yang ada dilingkup UIGM. Sebagai bentuk kontribusi dan media interaktif, website ini dikelola oleh divisi komunikasi dan informasi SEMA yang berfungsi untuk sumber informasi resmi terkait dengan seluruh organisasi maupun kegiatan kemahasiswaan yang ada di Universitas Indo Global Mandiri.<br>";
	document.getElementById("btn-0").style.textDecoration = 'none';
	document.getElementById("btn-0").style.color = 'black';
  
}
