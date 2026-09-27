function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YosPuZfmOC":
        Script1();
        break;
      case "6kLJhVuE434":
        Script2();
        break;
      case "6AJ7PVfUO8r":
        Script3();
        break;
      case "6qad5urslzM":
        Script4();
        break;
      case "6i1PmQkQMj3":
        Script5();
        break;
      case "6Ug5f03Sihv":
        Script6();
        break;
      case "6ods3LfHPql":
        Script7();
        break;
      case "5VcLv9qXx7c":
        Script8();
        break;
      case "6DTsFqBYBFU":
        Script9();
        break;
      case "6438OOpaRMI":
        Script10();
        break;
      case "5ebWAXMItGb":
        Script11();
        break;
      case "6eSUxulDdH2":
        Script12();
        break;
      case "6pgqXCcyd6E":
        Script13();
        break;
      case "6UPnbDk7F6k":
        Script14();
        break;
      case "5sAWQGIf5pC":
        Script15();
        break;
      case "64mQCWlhxni":
        Script16();
        break;
      case "6DJwMgJ4dWF":
        Script17();
        break;
  }
}

function Script1()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script2()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script3()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script4()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script5()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script6()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script7()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script8()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script9()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script10()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script11()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script12()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script13()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script14()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script15()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script16()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script17()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

