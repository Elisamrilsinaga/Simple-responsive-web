job = [
    {
        gambar: './assets/petani.jpg',
        nama: 'Petani',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 300 / Month'

    },
    {
        gambar: './assets/guru.jpg',
        nama: 'Guru',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 800 / Month'

    },
    {
        gambar: './assets/supir.jpg',
        nama: 'Supir',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 100 / Month'

    },
    {
        gambar: './assets/gitaris.jpg',
        nama: 'Gitaris',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 800 / Month'

    },
    {
        gambar: './assets/pelukis.jpg',
        nama: 'Pelukis',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 900 / Month'

    },
    {
        gambar: './assets/pilot.jpg',
        nama: 'Pilot',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 1.000 / Month'

    },
    {
        gambar: './assets/penjahit.jpg',
        nama: 'Penjahit',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 200 / Month'

    },
    {
        gambar: './assets/penjahat.jpg',
        nama: 'Penjahat',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 10.000 / Month'

    },
    {
        gambar: './assets/drummer.jpg',
        nama: 'Drummer',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 800 / Month'

    },
    {
        gambar: './assets/dokter.jpg',
        nama: 'Dokter',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 1.000 / Month'

    },
    {
        gambar: './assets/arsitek.jpg',
        nama: 'Arsitek',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 20.000 / Month'

    },
    {
        gambar: './assets/video editor.jpg',
        nama: 'Video Eitor',
        deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima libero soluta optio? Quisquam minus cupiditate illo distinctio nesciunt aspernatur.',
        harga: '$ 200 / Month'

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

        result = result +
        `<div class="col-lg-4 container-cardya mb-4">\
            <div class="card rounded-0 card-job">\
                <div class="inner card-image">
                    <img src="${gambar}" alt="" width="100%">\   
                </div>
            <div class="card-body card-body-costume">\
                <div class="card-title title-card">${nama}</div>\
                <div class="card-text ellipsis m-2">${deskripsi}</div>\
            </div>\
                <a href="#" class="btn btn-primary button rounded-0">${harga}</a>\
            </div>\
        </div>`;

    }
    document.getElementById("job").innerHTML = result;
}