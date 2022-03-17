job = [
    {
        gambar: './assets/card-img.png',
        nama: 'Petani',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 300 / Month'

    },
    {
        gambar: './assets/gambar-2.jpg',
        nama: 'Guru',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 800 / Month'

    },
    {
        nama: 'Supir',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 100 / Month'

    },
    {
        nama: 'Gitaris',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 800 / Month'

    },
];

dataJob();
function dataJob(){
    var result="";
    var i;
    for (i in job){
        gambar = job[i].gambar;
        nama = job[i].nama;
        deskripsi = job[i].deskripsi;
        harga = job[i].harga;

        result = result +`<div class="col-lg-4 container-cardya mb-4">\
        <div class="card rounded-0">\
            <img src="${gambar}" alt="">\
            <div class="card-body card-body-costume">\
                <div class="card-title title-card">${nama}</div>\
                <div class="card-text">${deskripsi}</div>\
            </div>\
                <a href="#" class="btn btn-primary button rounded-0">${harga}</a>\
        </div>\
    </div>`;

    }
    document.getElementById("job").innerHTML = result;
}